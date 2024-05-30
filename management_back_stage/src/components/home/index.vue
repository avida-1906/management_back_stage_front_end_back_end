<template>
    <div>
        <p>这是首页</p>
        <button @click="get_menus()">获取菜单</button>
        <p>这是一个下拉列表-后端返回十万条数据不卡顿</p>
        <!-- <p>{{ $route }}</p> -->
        <Dropdown 
            v-model="selectedItem"
            :options="items"
            optionLabel="label"
            optionValue="value"
            :virtualScrollerOptions="{ itemSize: 28 }"
            placeholder="请选择"
            class="w-full md:w-14rem"
        />
        <p><button @click="show_box">弹窗</button></p>
        <p>{{ my_count }}</p>
        <!-- <p>{{ change_count }}</p> -->
        <p>{{ xxx() }}</p>
    </div>
</template>

<script setup type="ts">
    import { onBeforeMount, onMounted, ref, reactive, nextTick, computed } from 'vue'
    import axios from 'axios' //局部引入axios
    import Dropdown from 'primevue/dropdown'; //局部引入该组件，全局引入会报错，而且VUE3里边引入一个组件不需要注册，直接使用即可
    import { message } from '@/components/common/function_box'  //引入一个函数式弹窗
    import { useUserStore } from '@/pinia';  //引入pinia里边的Store
    
    //v-model的值就是个number类型
    const selectedItem = ref();
    //在组件挂载之前去生成模拟数据并且赋值给组件
    let items = ref([]);
    onBeforeMount(()=>{
        get_data()
    })
    function get_data(){
        const arr = []
        for( let i=0;i<100000;i++ ){
            arr.push({ label: `Option ${i}`, value: i })
        }
        items = arr
    }

    onMounted(
        ()=>{
            // axios.get('http://localhost:3000/menus').then(( res )=>{
            //     console.log(res)
            // })
            // get_menus()
        }
    )
    
    const show_box = ()=>{
        message( '弹窗标题', ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eos saepe nemo ipsam tempore! Quidem, ullam. Fugit, tempora dolore! 
        Quam nostrum, animi consectetur totam fugiat laborum eos natus officia debitis beatae`, '确定', '取消' )
    }
    
    //使用store
    const store = useUserStore()

    //继续使用store里边的变量
    const my_count = computed(()=>{
        return store.count;  //使用store里边的变量时可以跳过state直接store.里边的变量
    })
    //更改store里边的变量
    const change_count = computed(()=>{
        return store.change_count
    })
    //让store里边的count乘以2
    function xxx() {
        return store.double_count()
    }

</script>

<style>
    .w-full {
        width: 500px;
    }
</style>