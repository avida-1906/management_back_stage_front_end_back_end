<!-- 
    学习心得：
        实现一个定时弹窗，正常来说，登录之后，每两个小时弹一次，
        如果用户勾选不再弹窗，则明天凌晨零点之前都不再弹了，
        明天凌晨零点一到，则恢复弹窗。
        弄了两天我发现，单靠前端这边是很难实现的，
        如果不允许刷新页面的话，肯定要后端那边配合才行。
        我这边弄一个周期性定时器轮询调接口，
        如果后端那边返回一个布尔值为true则弹窗，否则不弹窗。
        这样就是把大部分逻辑交给后端去处理。
        以后，写稍微复杂一点的组件，先把流程图画好，哪怕流程图很简单也要画出来，
        然后把最外层的逻辑铺设好，再层层深入，
        外层结构都没有弄好，写着写着就会一团乱麻。
        如果允许前端页面刷新的话那么单靠前端这边也有实现的可能性，
        利用周期性定时器结合localStorage来实现。
-->

<template>
    <div class="header">
        <div class="personal-center">
            <img src="@/assets/img/profile.png" alt="暂无图片">
        </div>
        <!-- i18n国际化template里边使用的格式为：{{ $t('login') }} -->
        <h3>{{ $t('headerTittle') }}</h3>
        <!-- mouseenter和mouseleave太好用了 -->
        <div class="personal-center right" @mouseenter="show_list"  @mouseleave="hide_lsit">
            <img src="@/assets/img/profile.png" alt="暂无图片" class="">
        </div>
        <!-- mouseenter和mouseleave太好用了 -->
        <div v-if="is_show_list"  class="dropdown" @mouseenter="show_list"  @mouseleave="hide_lsit">
            <ul>
                <li @click="show()">点击</li>
                <li @click="changeActive('zh')">中文</li>
                <li @click="changeActive('en')">英文</li>
                <li @click="removeObj">移除obj</li>
                <li @click="addObj">添加obj</li>
                <li @click="logout">退出登录</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { onUnmounted, ref } from 'vue'
    import { useRouter } from 'vue-router';  //第一步：从vue-router模块里边解构出来useRouter函数
    import { popUp } from '@/utlis/alwaysPopUp'
    import { storeToRefs } from 'pinia';
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n()
    const router = useRouter()  //调用useRouter函数放到一个变量中

    let is_show_list = ref(false)
    const show_list = ()=>{
        is_show_list.value = true;
    }
    const hide_lsit = ()=>{
        is_show_list.value = false;
    }
    //退出登录
    const logout = ()=>{
        localStorage.removeItem('userInfo')  //清空localStorage里边的用户信息
        router.push({ name: 'login' })  //使用路由跳转到登录页
    }
    onUnmounted( ()=> {
        //卸载组件的时候刷新一下页面，这样定时弹窗就不会继续弹了。
        // window.location.reload()
    } )

    const addObj = ()=> {
        console.log(111111111)
        const d = new Date()
        let currentDay = d.getDate()
        const obj = {
            currentDay
        }
        const a = JSON.stringify(obj)
        if ( !localStorage.getItem( 'obj' ) ) {
            localStorage.setItem( 'obj', a )
            window.location.reload()
        }
    }
    const removeObj = ()=> {
        if ( localStorage.getItem( 'obj' ) ) {
            localStorage.removeItem( 'obj' )
            window.location.reload()
        }
    }
    
    popUp()
    
    //多语言切换
    const changeActive = ( lang:any )=> {
        locale.value = lang;
        localStorage.setItem('lang', lang)
    }
    //在JS代码里边使用i18n的话需要从lang文件夹里边的index文件里边解构出来i18n这个对象，使用格式：i18n.global.t('login')
    import { i18n } from '@/lang/index';
    const show = ()=>{
        alert(i18n.global.t('login'))
    }

</script>
    
<style scoped lang='scss'>
    /* 
    sass学习心得：
        sass可以使用嵌套
        定义变量的时候使用$符号
    */
    $my-color: blue;
    .header {
        $my-color: green;
        background: $my-color;
        border: 1px solid red;
        /* min-width: 1280px; */
        display: flex;
        justify-content: space-between;
        .personal-center {
            max-width: 50px;
        }
    }
    
    .header .right {
        cursor: pointer;
    }
    .header .dropdown {
        margin: 0;
        padding: 0;
        border: 1px solid red;
        position: absolute;
        top: 17%;  /* 这里不能写百分比，否则不同页面相对于父元素的位置会不一样，我也不知道为什么 */
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
