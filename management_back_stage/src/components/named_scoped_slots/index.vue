
<!-- 
    这个具名作用域插槽有点绕，
    理论上来说父组件这边有多少组tempalte标签子组件那边就有多少组slot标签，
    具名的目的就是为了对应子组件那边的slot，
    等号后面的变量就是找到子组件那边对应的slot之后获取它的动态属性。
    一共有5种插槽，一定要掌握。
-->


<template>
    <div>
        <h1>具名作用域插槽---学习</h1>
        <child>
            <!-- 具名作用域插槽：v-slot:header="receive" ，
                v-slot:header指向对面子组件的name属性，
                变量receive是个对象，包含子组件传过来的动态属性 
            -->
            <template v-slot:header="receive">
                {{ receive.text }}
            </template>
            <!--  默认作用域插槽：#default="receive" ，
                #default指向对面子组件的name属性，如果对面子组件没写name属性也没关系，
                变量receive是个对象，包含子组件传过来的动态属性 
            -->
            <template #default="receive">
                {{ receive.count }}
            </template>
            <!-- 具名作用域插槽：#footer="receive" ，
                #footer指向对面子组件的name属性，
                变量receive是个对象，包含子组件传过来的动态属性 
            -->
            <template #footer="receive">
                {{ receive.state }}
            </template>
        </child>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'
</script>
    
<style scoped lang='css'>
    
</style>
