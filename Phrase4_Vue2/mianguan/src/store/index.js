import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
         title:"小米商城",
		 cartList:localStorage.getItem("p4kao")?JSON.parse(localStorage.getItem("p4kao")).info:[]
	},
	actions:{

	},
	mutations:{
		add(state,obj){
          let index=state.cartList.findIndex(v=>v.id==obj.id)
		  if (index>-1) {
			   state.cartList[index].num+=1
		  }else{
			  obj.num=1
			  state.cartList.push(obj)
		  }
		  localStorage.setItem("p4kao",JSON.stringify({"info":state.cartList}))
		},
		del(state,id){
			let index=state.cartList.findIndex(v=>v.id==v.id)
			state.cartList.splice(index,1)
			localStorage.setItem("p4kao",JSON.stringify({"info":state.cartList}))
		}
        //  jia(state,id){
        //    let obj=state.
		//  }
	},
	getters:{

	}
})
export default store