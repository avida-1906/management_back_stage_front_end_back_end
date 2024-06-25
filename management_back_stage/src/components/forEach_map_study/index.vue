<!-- 
    map和forEach这两个数组方法比较常用，它们既有共同的地方，也有不同的地方。
    相同点：都是用来遍历数组，里边都是传一个箭头函数或者匿名函数，
            回调函数里边的this是undefined，
            回调函数的形参都分别是item,index,array,
            不会对空数组进行操作，
    不同点：map的返回值为一个处理过后的新数组，而forEach的返回值永远都是undefined,
            map可以用来做深拷贝，

-->

<template>
    <div>
        <h1>forEach和map的区别</h1>
        <p>
            <!-- {{ a }} -->
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { reactive, ref } from 'vue'

    interface array_element{
        m: string
        n: number
        o: Array<string>
    }

    let msg: Array<array_element> = reactive([])  //定义数组类型的变量一定要用reactive

    
    // let arr = [ 'a', 'b', 'c', 'd', 'e' ]
    let arr = [1, 2, 3, 4, 5]
    let arr2 = [
        { name:'张三', age: 18 },
        { name:'李四', age: 28 }
    ]
    //数组map方法《不会》改变（除非元素是引用类型）原数组，并且可以返回一个新数组。
    // let a = arr2.map( ( m, n, o )=>{  //m代表被遍历的数组元素，n代表元素下标，o代表被遍历的数组本身
    //     // return o[n] = m + 1;  //如果这样return,原数组会被改变
    //     return m.name = '王五'  //如果这样原数组也会改变
    //     // return m + 1;  //如果这样return,原数组不会被改变
    //     // return m;
    //     // console.log(this)  //undefiend
    // } )
    // console.log(arr2)
    // console.log(a)  //返回一个处理过后的新数组
    /* 
        false, 这样就实现了深拷贝，
        用JSON序列化的办法去深拷贝的话会造成数据丢失，
        还有lodash里边也有一个方法：cloneDeep()可以用来深拷贝
    */
    // console.log( arr === a )

    /* =============================================================================== */

    //数组forEach方法《不会》改变原数组，没有返回值
    // let b = arr2.forEach( ( item, index, array )=>{  //m,n,o跟map方法一样
    //     // return array[index] = item + 1;  //如果这样return,原数组会被改变
    //     return item.name = '王五'  //如果这样原数组也会改变
    //     // return item + 1;  //如果这样return,原数组不会被改变
    //     // console.log(this)  //undefined
        
    // } )
    // console.log(arr2)
    // console.log(b)  //undefiend




    // let obj1 = {
    //     name: '张三'
    // }
    // let obj2 = obj1

    // console.log( obj1 === obj2 )  //true

    const timer = setTimeout(() => {
        console.log(11111111)
    }, 2000);
    console.log(timer)
</script>
    
<style scoped lang='css'>
    
</style>
