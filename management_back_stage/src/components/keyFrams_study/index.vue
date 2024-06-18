<template>
    <div>
        <button @click="pop_up">弹窗</button>
        <!-- <my_modal v-if="is_show"/> -->
        <!-- <Transition name="fade" mode="default">
            <p v-if="is_show">你好世界</p>
        </Transition> -->
        <div class="fadein container" :class="transition_effect" v-if="is_show">
            <p>你好世界</p>
        </div>
        
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import my_modal from './modal.vue'
    
    const transition_effect = ref('')
    const is_show = ref(false)
    const pop_up = ()=>{
        is_show.value = true;
        transition_effect.value = '.active'
    }

</script>
    
<style scoped lang='css'>
    
    .container {
        width: 100px;
        height: 100px;
        background: red;
    }
    .fadein {
        /*
            animation中文意思是动画片，
            把一套动画@keyframes绑定到当前类里边来，
            它的第一个参数是@keyframes的动画名make_a_move，
            第二个参数是动画持续时间
        */
        animation: make_a_move 1s;
    }
    /*
        使用@keyframes规则，你可以创建动画。

        创建动画是通过逐步改变从一个CSS样式设定到另一个。

        在动画过程中，您可以更改CSS样式的设定多次。

        指定的变化时发生时使用％，或关键字"from"和"to"，这是和0％到100％相同。

        0％是开头动画，100％是当动画完成。

        为了获得最佳的浏览器支持，您应该始终定义为0％和100％的选择器。
    */
    @keyframes make_a_move {
        0% {
            /*transform中文意思是使转化，它有很多属性值，其中一个就是translate(x,y)*/
            /*translate中文意思是平移，translate(x,y) 分别定义了元素在水平方向和垂直方向上的移动，x正值是从右往左，y正值是从下往上*/
            transform: translate(10%, 100%);
        }
        100% {
            transform: none;
        }
    }

</style>
