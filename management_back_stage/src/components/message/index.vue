<template>
    <div class="home">
      <button @click="openAction">消息-弹窗</button>
      <Notice />
    </div>
  </template>
  <script setup lang="ts">
  import { openModal } from "./index"; // 控制弹窗逻辑
  import Notice from "./notice.vue"; // 弹窗vue组件
  
  // 打开弹窗
  const { openAction } = openModal("notice");

  

  </script>
  
