<template>
    <div>
        <my_headerheader></my_headerheader>
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
        <!-- <p>{{ username }}</p>
        <p>{{ userpassword }}</p> -->
        <p>{{ store.count }}</p>
        <!-- <p>{{ arr }}</p>
        <p>{{ isOk }}</p> -->
        <!-- <p>{{ store.change_count }}</p>
        <p>{{ store.change_count_plus_one }}</p>
        <p>{{ store.get_count(6) }}</p> -->
        <!-- <button @click="xxx">{{ my_count }}</button> -->
    </div>
</template>

<script setup type="ts">
    import { onBeforeMount, onMounted, ref, reactive, nextTick, computed, defineComponent } from 'vue'
    import axios from 'axios' //局部引入axios
    import Dropdown from 'primevue/dropdown'; //局部引入该组件，全局引入会报错，而且VUE3里边引入一个组件不需要注册，直接使用即可
    import { message } from '@/components/common/function_box'  //引入一个函数式弹窗
    import { useUserStore } from '@/stores/users';  //使用pinia里边的某个Store
    import { storeToRefs } from 'pinia';  //为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。
    import my_headerheader from '@/components/common/header/index.vue'


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
    // store.count++  //最简单的使用方式
    // store.$reset()  //重置store
    // const { username, userpassword, count, arr, isOk } = storeToRefs(store)  //从store里边的state解构出来的ref变量，可在template里边使用
    const { double_count } = store  //作为actions里边的double_count可以直接解构出来
    double_count()
    // store.$patch({  //$patch可以修改state里边的多个属性---接收一个对象
    //     username: '张三',
    //     userpassword: '李四',
    //     count: 10086
    // })
    // store.$patch((state)=>{  //$patch可以修改state里边的引用类型属性---接收一个箭头函数
    //     state.arr.push( { name: '梅超风' } )
    //     state.isOk = true
    // })
    

    //继续使用store里边的变量
    // const my_count = computed(()=>{
    //     return store.count;  //使用store里边的变量时可以跳过state直接store.里边的变量
    // })
    //更改store里边的变量
    // const change_count = computed(()=>{
    //     return store.change_count
    // })
    //让store里边的count乘以2
    // function xxx() {
    //     store.double_count()
    // }

</script>

<style>
    .w-full {
        width: 500px;
    }
</style>