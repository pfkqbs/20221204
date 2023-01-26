new Vue({
    el:"#app",
    data(){
        return {
            a:"111",
            leftData:[
                {id:01,checked:true,name:"html"},
                {id:02,checked:true,name:"js"},
                {id:03,checked:true,name:"React"},
                {id:04,checked:true,name:"Vue"},
                {id:05,checked:false,name:"css"},
            ],
            rightData:[
                // {id:06,checked:true,name:"html"},
                // {id:07,checked:true,name:"js"},
                // {id:08,checked:true,name:"React"},
                // {id:09,checked:true,name:"css"},
                // {id:10,checked:false,name:"html"},
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
