<template>
    <div>
        <h1>vue3懒加载组件库学习</h1>
        
            <p v-for="item in img_url" style="width: 300px;">
                <img v-lazy="item" alt="" style="width: 100%;">
            </p>
            <!-- <vue-lazy-component :timeout="5000" tagName="div">
                <my_image  slot="skeleton"/>
            </vue-lazy-component> -->
        
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import my_image from '@/components/lazy_load_study/my_image.vue'


    let arr = []

    const img_url = ref([
        'src/assets/img/1.jpg',
        'src/assets/img/2.jpg',
        'src/assets/img/3.jpg',
        'src/assets/img/4.jpg',
        'src/assets/img/5.jpg',
        'src/assets/img/6.jpg',
        'src/assets/img/7.jpg',
        'src/assets/img/8.jpg',
        'src/assets/img/9.jpg',
        'src/assets/img/10.jpg',
    ])

    for(let i =0; i<10; i++) {
        arr.push(`src/assets/img/${i+1}.jpg`)
    }


    // setTimeout( ()=>{
    //     img_url.value = 'src/assets/img/photo_2022-08-01_13-03-22.jpg'
    // } ,2000)

</script>
    
<style scoped lang='css'>
    
</style>
