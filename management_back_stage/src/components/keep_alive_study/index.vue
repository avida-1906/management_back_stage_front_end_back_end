<template>
    <div class="container">
        <ul class="vertical">
            <!-- 这里是手动改变current_component变量的值，值是各个组件的名字 -->
            <li @click="current_component = my_home">首页</li>
            <li @click="current_component = my_detail">详情页</li>
            <li @click="current_component = my_about">关于</li>
        </ul>
        <!-- 这里这个component有个动态属性is，绑定一个变量给它，这个变量的值在上面点击事件那里被改变 -->
        <keep-alive>
            <transition>
                <div class="change_com">
                    <component class="child" :is="current_component"></component> 
                </div>
            </transition>
        </keep-alive>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, markRaw, reactive, shallowRef } from 'vue'
    import my_home from './home.vue'
    import my_detail from './detail.vue'
    import my_about from './about.vue'

    //记住了，定义组件类型的变量时，一定要使用shallowRef代替ref来创建一个浅响应式对象，否则控制台报警告。
    const current_component = shallowRef(my_home)
    
</script>
    
<style scoped lang='css'>
    .container {
        width: 100%;
        height: 100%;
        background: gray;
    }
    .vertical {
        margin: 0 auto;
        list-style-type: none;
        width: 50%;
        display: flex;
        justify-content: center;
        border: 1px solid red;
    }
    .vertical li {
        margin: 5%;
        border: 1px solid blue;
        cursor: pointer;
    }
    
    .child {
        margin: 0 auto;
    }
    .change_com {
        width: 100%;
        height: 300px;
    }
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
