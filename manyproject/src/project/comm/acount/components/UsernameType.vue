<template>
    <div class="Username-Type-tag">
      <ul>
        <li>
          
            <i class="icon icon-mb3">
              <svg-icon icon-class="phone" class-name="svg-icon-18"></svg-icon>
            </i>
            手机
        </li>
        <li>
          
          <i class="icon icon-mb3">
              <svg-icon icon-class="email" class-name="svg-icon-18"></svg-icon>
            </i> 
            邮箱
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "UsernameType",
    props: {
      
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .Username-Type-tag {
    text-align: right;
    li {
        display: inline-block;
        margin-left: 15px;
        padding:7px 15px 6px 13px;
        border-radius: 100px;
        background-color: $color-main;
        font-size: 14px;
        line-height: 18px;
        color:#fff;

    }
  }
  </style>
  