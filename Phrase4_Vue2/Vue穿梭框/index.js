new Vue({
    el:"#app",
    data(){
        return {
            a:"111",
            leftAll:false,
            rightAll:false,
            leftData:[
                {id:01,checked:true,name:"html"},
                {id:02,checked:true,name:"js"},
                {id:03,checked:true,name:"React"},
                {id:04,checked:true,name:"Vue"},
                {id:05,checked:false,name:"css"},
            ],
            rightData:[
            ],

        }
    },
    methods:{
        toLeft(){
            let selectData = this.rightData.filter((item) => item.checked == true)
             this.leftData.push(...selectData);
             this.rightData = this.rightData.filter((item) => item.checked == false)
        },
        toRight(){
             let selectData = this.leftData.filter((item) => item.checked == true)
            this.rightData.push(...selectData);
            this.leftData = this.leftData.filter((item) => item.checked == false)

        },
        rightChange(){
            for(let i=0;i<this.rightData.length;i++){
                this.rightData[i].checked = this.rightAll
            }
        },
        leftChange(){
            for(let i=0;i<this.leftData.length;i++){
                this.leftData[i].checked = this.leftAll
            }
        },
        changeCheckLeft(){
            let selectData  = this.leftData.filter((item) => item.checked == true )
            selectData.length == this.leftData.length ? this.leftAll = true :this.leftAll = false
        },
        changeCheckRight(){
            let selectData  = this.rightData.filter((item) => item.checked == true )
            selectData.length == this.rightData.length ? this.leftAll = true :this.leftAll = false
        }
    },
    computed:{
        leftSelect:function(){
            return this.leftData.filter((item) => item.checked == true )
        },
        rightSelect:function(){
            return this.rightData.filter((item) => item.checked == true )
        },

    }
})
