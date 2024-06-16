<template>
    <div id="parent">
        <h1>sass学习</h1>
        <h2>sass全局变量</h2>
        <div class="d1"></div>
        <div class="d2"></div>
        <button class="btn">按钮</button>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    
</script>
    
<style scoped lang='scss'>
    // 使用sass的一些注意事项：声明变量写在顶部

    // 定义变量和值
    // $bgcolor: red;
    // $coclor: blue;

    // 使用变量
    // #parent {  //sass代码是可以嵌套来写的。子元素或者后代元素可以嵌套在父元素或者祖先级元素代码里边
    //     h1 {
    //         $bgcolor: green;  //这里相当于给变量重新赋值了，那么这个变量的作用域仅限于这个h1标签
    //         background: $bgcolor;
    //     }
    //     h2 {
    //         $bgcolor: blue !global;  //写了!global之后表示从这一行开始后面所有$bgcolor的值都为blue
    //         background: $bgcolor;
    //     }
    //     .d1 {
    //         width: 100px;
    //         height: 100px;
    //         background: $bgcolor;
    //     }
    // }
    
    //这种写法在vue3里边不行，会报错
    // font: {
    //     family: Helvetica, sans-serif;
    //     color: black;
    //     size: 18px;
    //     weight: bold;
    // }

    //导入一个外部的sass文件，文件类型是scss
    @import "my_style";
    @import "second_sass";
    



</style>
