<template>
    <div>
        <h1>数组相关的一些API学习</h1>
        <p>{{ show_arr }}</p>
        <p>{{ temp }}</p>
        <p>{{ new_array }}</p>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    const show_arr = ref([0,1,0,2,0,5,5,0,3,4])

    let temp:number[] =[];
    let count = 0;
    let new_array:number[] =[];

    for( let i=0; i<show_arr.value.length; i++ ) {
        if ( show_arr.value[i] === 0 ) {
            show_arr.value.splice(i, 1)
            count++
        }
    }
    
    for( let i=0; i<count; i++ ) {
        temp.push(0)
    }

    new_array = show_arr.value.concat(temp)

</script>
    
<style scoped lang='css'>
    
</style>
