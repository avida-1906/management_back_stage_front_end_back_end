import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<any> = [ //这里填充该项目的所有路由
    {//这个是重定向路由
        path: '/',
        name: 'retry',
        // redirect: { name: 'home' }  //使用命名路由重定向
        redirect: ( to:any )=> {  //使用方法的形式返回重定向的目标路由
            return { path: '/home' }
            // return 'home'
        }
    },
    {//这是个登陆组件的路由
        path: '/login',
        name: 'login',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/login/index.vue'),  //这是按需加载
    },
    {//这是个首页组件的路由
        path: '/home',
        name: 'home',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/home/index.vue'),
        children: [
            {//这是首页下面的子路由1
                path: '/child_1',
                name: 'child_1',
                meta: { requiresAuth: true },
                component: ()=>import('@/components/children_router/child_1.vue'),  //这是按需加载
            },
            {//这是首页下面的子路由2
                path: '/child_2',
                name: 'child_2',
                meta: { requiresAuth: true },
                component: ()=>import('@/components/children_router/child_2.vue'),  //这是按需加载
            },
        ]
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
    {//研究父组件给子组件传值
        path: '/parent_transfer_to_child',
        name: 'parent_transfer_to_child',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/parent_transfer_to_child/index.vue'),
    },
    {//研究子组件给父组件传值
        path: '/child_transfer_to_parent',
        name: 'child_transfer_to_parent',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/child_transfer_to_parent/index.vue'),
    },
    {//研究v-model双向绑定原理
        path: '/v-model_two_way_binding',
        name: 'v-model_two_way_binding',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/v-model_two_way_binding/index.vue'),
    },
    {//研究keep-alive内置组件
        path: '/keep_alive_study',
        name: 'keep_alive_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/keep_alive_study/index.vue'),
    },
    {//研究transition内置组件
        path: '/transition_study',
        name: 'transition_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/transition_study/index.vue'),
    },
    {//研究@keyFrams原生CSS样式
        path: '/keyFrams_study',
        name: 'keyFrams_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/keyFrams_study/index.vue'),
    },
    {//研究Attributes透传
        path: '/attributes_study',
        name: 'attributes_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/Attributes_study/index.vue'),
    },
    {//依赖注入学习
        path: '/provide_inject_study',
        name: 'provide_inject_study',
        meta: { requiresAuth: true },
        component: ()=>import('@/components/provide_inject_study/index.vue'),
    },
    {//异步组件学习：按需导入（或者说动态导入）
        path: '/async_components',
        name: 'async_components',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/async_components/index.vue'),
    },
    {//vue3懒加载组件库学习
        path: '/lazy_load',
        name: 'lazy_load',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/lazy_load_study/index.vue'),
    },
    {//vue3默认插槽学习
        path: '/default_slots',
        name: 'default_slots',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/default_slots/index.vue'),
    },
    {//vue3具名插槽学习
        path: '/named_slots',
        name: 'named_slots',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/named_slots/index.vue'),
    },
    {//vue3条件插槽学习
        path: '/conditional_slots',
        name: 'conditional_slots',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/conditional_slots/index.vue'),
    },
    {//vue3动态插槽名学习
        path: '/dynamic_slot_names',
        name: 'dynamic_slot_names',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/dynamic_slot_names/index.vue'),
    },
    {//vue3作用域插槽学习
        path: '/scoped_slots',
        name: 'scoped_slots',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/scoped_slots/index.vue'),
    },
    {//vue3具名作用域插槽学习
        path: '/named_scoped_slots',
        name: 'named_scoped_slots',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/named_scoped_slots/index.vue'),
    },
    {//数组相关的一些API学习
        path: '/array_api_study',
        name: 'array_api_study',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/array_api_study/index.vue'),
    },
    {//instanceof学习
        path: '/instanceof_study',
        name: 'instanceof_study',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/instanceof_study/index.vue'),
    },
    {//forEach和map两个数组方法学习
        path: '/forEach_map_study',
        name: 'forEach_map_study',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/forEach_map_study/index.vue'),
    },
    {//grid布局学习
        path: '/grid_study',
        name: 'grid_study',
        meta: { requiresAuth: true },
        component: ()=> import('@/components/grid_study/index.vue'),
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