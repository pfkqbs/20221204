
/* 
    1、Scene 场景对象：
        控制canvas 中所有的内容的对象
        多个FireWorks 状态位置 进程
        整体渲染更新

    2、Particle 粒子
        每一个小球状态以及位置等控制
        位置、颜色、速度、加速度

    3、FireWorks
        从一束烟花发射到爆炸所有的内容
        状态：发射中一个球，移动到哪
        状态改变：多个小球

    三个对象的控制：

*/

class Scene {
    constructor(name) {
        this.canvas = document.querySelector(name)
        this.ctx = this.canvas.getContext('2d')

        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.fireWorksLength = 30
        this.fireWorksList = []

        this.init()

    }
    // 初始化
    init() {
        this.rigister()
        for(let i=0;i<this.fireWorksLength;i++){
            setTimeout(()=>this.fireWorksList.push(new FireWorks),200*i)
        }
        this.render()
    }
    // 多个烟花状态
    render() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(255,192,203,0.1)';//背景颜色
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.fireWorksList.forEach( i => {
            i.draw(this.ctx)
            i.update()
        })

        requestAnimationFrame(this.render.bind(this))//修改 this 指向

    }
    //状态改变
    update() {

    }
    rigister() {
        window.onresize = () => {
            /* 设置 canvas 区域为屏幕的宽和高 */
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
        }
    }
}

class FireWorks {
    constructor() {
        // 位置速度加速度颜色状态
        // 控制每一个粒子的速度改变
        this.initFireWork()
    }
    initFireWork() {
        this.color = '#'+ Math.random().toString().slice(-6)
        this.px = window.innerWidth*(1/2 + (Math.random() - 0.5)/2)
        this.py = window.innerHeight
        this.vx = (Math.random()-0.5)*10
        this.vy = -20
        this.g = 0.4
        this.state = 0  //0 上升，1 爆炸 2  重置
        this.particle = new Particle(
            this.px,this.py,2,this.color,this.vx,this.vy)
        this.particleList = []//爆炸后的粒子
        this.particleLength = 30
    }
    initParticalList(){
        // console.log("this.particleList")
        for(let i=0; i<this.particleLength; i++){
            let temp = Math.random()

            /* 渲染爆炸后的粒子 */
            this.particleList.push(
                new Particle(
                    this.particle.px,
                    this.particle.py,
                    2,
                    this.color,
                    Math.cos((temp*Math.PI*2)*5),
                    Math.sin((temp*Math.PI*2)*5)
                    )
                )
        }
        setTimeout(()=>{
            this.state = 2
        },400)
    }
    // 多个烟花状态
    draw(ctx) {
        if(this.state === 0){//小球上升，继续绘制小球
            this.particle.draw(ctx)
        }else if(this.state === 1){//小球爆炸，绘制爆炸
            //绘制爆炸
            if(this.particleList.length == 0){
                this.initParticalList()
            }else{
                this.particleList.forEach( i => {
                    i.draw(ctx)
                    i.update()
                })
            }
        }
        if(this.state === 2){//小球重置
            this.initFireWork()
        }
    }
    //状态改变
    update() {
        if(this.state === 0){
            if(this.particle.vy < 0){
                this.particle.update(this.g)  
            }else{
                this.state = 1
            }
        }

    }
}

class  Particle{
    constructor(px,py,r,color,vx,vy) {
        // 位置速度颜色状态
        // 控制每一个粒子的速度改变
        this.px = px
        this.py = py
        this.r = r
        this.color = color
        this.vx = vx
        this.vy = vy
    }
    // 多个烟花状态
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.px, this.py, this.r, 0, Math.PI*2, false)//绘制
        ctx.fillStyle = this.color;
        // ctx.fillRect(0, 0, 0, 0)
        ctx.fill()
    }
    //状态改变
    update(g = 0) {
        this.vy += g
        this.px += this.vx
        this.py += this.vy
    }
}


