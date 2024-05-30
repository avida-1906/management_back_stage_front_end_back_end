<template>
  <router-view></router-view>
  <!-- 这个是挂载表单弹窗的容器 -->
  <div ref="form_box" id="form_box"></div>

  <!-- 这个是挂载Loading弹窗的容器 -->
  <div ref="loading_box" id="loading_box"></div>

  <!-- 这个是挂载确认/取消弹窗的容器 -->
  <div ref="message" id="message"></div>

</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue'
    import { watch_element } from '@/utlis/resize_observer'

    /* 获取目标元素，元素上用ref绑定这个变量就可以了（vue3不会用this.$refs.xxx这种写法了），
      ref()不用给默认值，获取到的是一个响应式对象，可以通过.value来访问这个元素。 */
    const form_box = ref<any>(null);
    const message = ref<any>(null);

    onMounted(()=>{
      //调用该方法是为了让两个容器都微调居中
      watch_element(form_box.value)
      watch_element(message.value)

    })    
        
    onUnmounted(()=>{
          
    })
    

    
</script>

<style scoped>
  /* 
    以后所有弹窗的容器都不要放到index.html文件里边去了，统一放到App.vue这里来。
    这是对form_box这个最外层的弹窗容器进行样式设置，
    首先就是给它一个最小宽度：写死（写百分比的话浏览器缩小到一定程度的时候样式会错乱），让它可以撑开来，
    然后就是页面居中设置，用绝对定位absolute脱离文档流，
    top:50%,left:50%,大概可以居中了，
    margin:-height/2 0 0 -width/2 微调，完全居中，用JS设置，
    关于容器就只设置这几个样式就可以了。
    这样，子元素那个表单弹窗的宽高、在页面中的位置也就跟着它来了。
  */
  #form_box {
    min-width: 400px;
    /* 下面三个CSS属性设置之后元素基本在页面居中了，剩下的就要用JS（ResizeObserver）去微调它的外边距了 */
    position: absolute;
    top: 50%;
    left: 50%;
  }
  /* 注释同上，容器设置绝对定位，子元素不需要设置任何定位 */
  #message {
    min-width:300px;
    position: absolute;
    top: 50%;
    left: 50%;
  }

</style>
