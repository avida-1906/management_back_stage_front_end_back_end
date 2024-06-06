<template>
    <div class="header">
        <div class="personal-center">
            <img src="@/assets/img/profile.png" alt="暂无图片">
        </div>
        <h3>这是公共header</h3>
        <!-- mouseenter和mouseleave太好用了 -->
        <div class="personal-center right" @mouseenter="show_list"  @mouseleave="hide_lsit">
            <img src="@/assets/img/profile.png" alt="暂无图片" class="">
        </div>
        <!-- mouseenter和mouseleave太好用了 -->
        <div v-if="is_show_list"  class="dropdown" @mouseenter="show_list"  @mouseleave="hide_lsit">
            <ul>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li @click="logout">退出登录</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';  //第一步：从vue-router模块里边解构出来useRouter函数

    const router = useRouter()  //调用useRouter函数放到一个变量中

    let is_show_list = ref(false)
    const show_list = ()=>{
        is_show_list.value = true;
    }
    const hide_lsit = ()=>{
        is_show_list.value = false;
    }
    const logout = ()=>{
        localStorage.removeItem('userInfo')  //清空localStorage里边的用户信息
        router.push({ name: 'login' })  //使用路由跳转到登录页
    }
</script>
    
<style scoped lang='css'>
    .header {
        border: 1px solid red;
        /* min-width: 1280px; */
        display: flex;
        justify-content: space-between;
    }
    .header .personal-center {
        max-width: 50px;
    }
    .header .right {
        cursor: pointer;
    }
    .header .dropdown {
        margin: 0;
        padding: 0;
        border: 1px solid red;
        position: absolute;
        top: 60px;  /* 这里不能写百分比，否则不同页面相对于父元素的位置会不一样，我也不知道为什么 */
        right:1%;
    }
    .header .dropdown ul {
        padding: 0;
    }
    .header .dropdown li {
        cursor: pointer;
        list-style: none;
        padding:5% 0;
        border-bottom: 1px solid gray;
    }
    .personal-center img {
        max-width: 100%;
    }
</style>
