<template>
  <div> 姓名：{{name}}</div>
  <div> 年龄：{{age}}</div>
  <div> job:{{job.type}}</div>
  <div> 爱好 :
  <ul>
    <li v-for="item in hobby" key="item">{{item}}</li>
  </ul> </div>
  <button @click="changeInfo">修改</button>
</template>

<script>
import {ref ,reactive} from  "vue"
export default {
  name: 'App',
  
  //此处只是测试一下setuP，不考虑响应式
  setup(){

    //数据  这种数据没有响应式
    // let name = "张三";
    // let age = "18";

    // 使用ref函数实现数据响应式
    let name = ref("张三");
    let age = ref(18);

    //使用reactive实现对象数据类型
    let job = reactive({
      type:"11",
      salary:"30k",
    });

    let hobby = reactive(["11",2,3,4]);


    function changeInfo(){ 
      console.log("job",job);

      job.type = "22";
      hobby[0] = "9999";
    }

    // 返回一个对象，则对象中的属性、方法，在模板中均可以直接使用！
    return {
      name,
      age,
      job,
      hobby,
      changeInfo

    }

  },
}
</script>
