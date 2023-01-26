import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
         title:"小米商城",
		 cartList:localStorage.getItem("p40903")?JSON.parse(localStorage.getItem("p40903")).info:[]
		  
	},
	actions:{

	},
	mutations:{
		// 添加
       add(state,obj){
         let index=state.cartList.findIndex(v=>v.id==obj.id)
		 if (index>-1) {
			 state.cartList[index].num+=1
		 }else{
			 obj.num=1
			 state.cartList.push(obj)
		 }
		 localStorage.setItem("p40903",JSON.stringify({"info":state.cartList}))
	   },
	   // 删除
	   del(state,id){
        let index=state.cartList.findIndex(v=>v.id==id)
		state.cartList.splice(index,1)
		localStorage.setItem("p40903",JSON.stringify({"info":state.cartList}))
	   },
	   jia(state,id){
		   let index=state.cartList.findIndex(v=>v.id==id)
		   state.cartList[index].num+=1
	   },
	   jian(state,id){
		let index=state.cartList.findIndex(v=>v.id==id)
		if (state.cartList[index].num>1) {
			state.cartList[index].num-=1
		}else{
			state.cartList.splice(index,1)
		}
	   }
	},
	getters:{

	}
})
export default store