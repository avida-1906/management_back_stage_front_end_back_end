import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<any> = [ //这里填充该项目的所有路由
    {//这是个登陆组件的路由
        path: '/login',
        name: 'login',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/login/index.vue'),  //这是按需加载
    },
    {//这是个首页组件的路由
        path: '/',
        name: 'home',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/home/index.vue'),
    },
    {//研究computed的页面
        path: '/computed_study',
        name: 'computed_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/computed_study/index.vue'),
    },
    {//研究弹窗的页面
        path: '/pop_up_study',
        name: 'pop_up_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/pop_up_study/index.vue'),
    },
    {//研究弹窗的页面
        path: '/message_study',
        name: 'message_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/message/index.vue'),
    },
    {//研究动态添加data属性的页面
        path: '/data_update',
        name: 'data_update',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/data_update/index.vue'),
    },
    {//研究函数式弹窗
        path: '/function_box',
        name: 'function_box',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/function_box/index.vue'),
    },
    {//研究axios拦截器设置token---商品列表页
        path: '/product_list',
        name: 'product_list',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/product_list/index.vue'),
    },
    {//研究pinia
        path: '/pinia_study',
        name: 'pinia_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/pinia_study/index.vue'),
    },
    {//研究sass
        path: '/sass_study',
        name: 'sass_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/sass_study/index.vue'),
    },
    {//研究teleport
        path: '/teleport_study',
        name: 'teleport_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/teleport_study/index.vue'),
    },
    {//研究利用弹性布局让div在页面居中
        path: '/flex_layout',
        name: 'flex_layout',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/flex_layout/index.vue'),
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。history模式是createWebHistory
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

/* 
  全局前置守卫---这个东西是路由跳转前触发的4.x版本开始可以不使用next()这个方法了，
  可写return true或者不写。
  如果一定要用next()这个方法，请写在else里边。
  return false 是取消跳转
*/
router.beforeEach( async ( to, from )=>{
    const authenticated = localStorage.getItem('userInfo')
    //如果不是去登录页，而且又不是已经登录的，则跳转到登录页
    if ( to.name !== 'login' && !authenticated  ) {
        return { name: 'login' }
    }
    //如果要去登录页，而且又已经登录了，则不跳转
    if ( to.name === 'login' && authenticated ) {
        return false;  //return false 就是不跳转的意思
    }
    
    return true;  //这个return true一定要写啊！
} )

//向外暴露router对象
export default router