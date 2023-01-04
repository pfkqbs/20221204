<template>
  <div> 姓名：{{name}}</div>
  <div> 年龄：{{age}}</div>
  <div> job：{{job.type}}</div>
  <button @click="changeInfo">修改</button>
</template>

<script>
import {ref} from  "vue"
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
    let job = ref({
      type:"11",
      salary:"30k",
    });


    function changeInfo(){ 
      name.value = "李四";
      age.value = "11";
      console.log("job.value",job.value);

      job.value.type = "22";



      //模板里不用.value,检查出了是ref对象，解析出来

      //修改了数据，但是没有数据相应
      console.log("name","age",name,age,job);

    }

    // 返回一个对象，则对象中的属性、方法，在模板中均可以直接使用！
    return {
      name,
      age,
      job,
      changeInfo

    }

  },
}
</script>
