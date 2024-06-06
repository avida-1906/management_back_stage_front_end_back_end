<template>
    <div>
        <p @click="addProperty">{{ item }}</p>
    </div>
</template>
    
<script setup lang='ts'>
    import { onMounted, reactive } from 'vue'
    const item = reactive({
        oldProperty:" "
    })
    const addProperty = ()=>{
        // item.newProperty = '新属性'
        Reflect.set(item,'newProperty','新属性')
        // console.log(item)
    }
    // onMounted(()=>{
    //     addProperty()
    // })
</script>
    
<style scoped lang='css'>
    
</style>
