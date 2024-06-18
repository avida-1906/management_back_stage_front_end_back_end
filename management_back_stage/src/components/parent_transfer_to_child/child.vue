<template>
    <div class="child">
        <h5>我是子组件</h5>
        <h2>{{ get_data }}</h2>
        <h2>{{ disabled }}</h2>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'

    // export default {
    //     // props: ['get_data'],
    //     props: {
    //         get_data: String
    //     },
    //     setup(props) {
    //         console.log(props.get_data)
    //     }
    // }

    //方式一：
    //所有 prop 默认都是可选的，除非声明了 required: true。
    //这个defineProps一定要搭配<script setup>
    // const props = defineProps(['get_data'])

    //方式二：
    //运行时声明
    // const props = defineProps({
    //     get_data: String,
    //     disabled:Boolean
    // })

    //方式三：
    //基于类型的声明
    // const props = defineProps<{
    //     get_data?: string,
    //     disabled?:boolean
    // }>()

    //方式四：
    //我们也可以将 props 的类型移入一个单独的接口中：
    // interface props_type{
    //     get_data?: string,
    //     disabled?:boolean
    // }
    // const props = defineProps<props_type>()

    //方式五：
    //从一个专门的类型文件里边引入类型
    // import type { props_type } from './props_type'
    // const props = defineProps<props_type>()

    //方式六：
    // 当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 withDefaults 编译器宏解决：
    interface props_type{
        get_data?: string,
        disabled?:boolean
    }
    const props = withDefaults( defineProps<props_type>(), {
        get_data: '我是默认值',
        disabled: false,
    } )

</script>
    
<style scoped lang='css'>
    .child {
        width: 20%;
        height: 20%;
        background: blue;
    }
    .child h5, h2 {
        color: yellow;
    }
</style>

