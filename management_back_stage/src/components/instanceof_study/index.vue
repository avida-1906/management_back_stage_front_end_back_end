<!-- 
    ES6里边有11种数据类型：
        基本类型：
            Number
            Boolean
            String
            Null
            Undefined
            Symbol
        引用类型：
            Object
            Array
            Date
            Function
            RegExp
-->


<template>
    <div>
        <h1>instanceof 学习</h1>
    </div>
</template>
    
<script setup lang='ts'>
    import { error } from 'console';
import { ref } from 'vue'
    
    
    // console.log( arr instanceof Object )  //true
    // console.log( arr instanceof Array )  //true
    // console.log( arr instanceof String )  //false
    // console.log( arr instanceof Function )  //false

    /* 
        JS里边的instanceof是用来判断一个变量是否为某种引用类型的数据，返回值为true/false
        它是通过原型链这种链表结构去查找
        具体使用方法：A instanceof B
        就是判断左边这个变量它的原型链上是否存在右边的变量
        说法二：右值是否存在于左值的原型链上
        只要是引用类型，就一定有_proto_，这个叫做隐式原型
    */

    // const is_instanceof = ( p:any, target:any ) => {
    //     while ( p ) {
    //         if ( p.__proto__ == target.prototype ) {
    //             return true;
    //         }
    //         p = p._proto_;
    //     }
    //     return false;
    // }

    // let a = is_instanceof( obj, Object )  //第二个参数取值：Object/Array/Function

    // console.log('它是么？', a)

    let b = '666';
    let c = 666;
    let d = false;
    let e = undefined;
    let f = null;
    let g = Symbol('123')
    
    //这个typeof操作符区分不了对象和数组
    console.log( typeof b )  //返回string
    console.log( typeof c )  //返回number
    console.log( typeof d )  //返回boolean
    console.log( typeof e )  //返回undefined
    console.log( typeof f )  //返回object
    console.log( typeof g )  //返回symbol
    // console.log( typeof fn )  //返回function
    

    /* 
        使用instanceof操作符来判断一个变量是否为Array/Object/Function
    */
    let arr = [1,2,3,4,5]
    let obj = {
        name: '张三'
    }
    let fn = () => {}
    let D = new Date()
    let E = new RegExp(/^$/)
    console.log( arr instanceof Array )  //true
    console.log( obj instanceof Object )  //true
    console.log( fn instanceof Function )  //true
    console.log( D instanceof Date )  //true
    console.log( E instanceof RegExp )  //true

    //判断数组的专用方法
    console.log( Array.isArray(arr) )  //true

</script>
    
<style scoped lang='css'>
    
</style>
