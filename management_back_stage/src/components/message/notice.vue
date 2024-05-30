<template>
  <div v-if="show" class="modal">
    <div class="notice"
      width="890px"
      title="弹窗"
      :footer="null"
    >
      <p class="title">
        <span>弹窗标题：我是一个消息弹窗</span>
        <svg @click="cancel" class="close" focusable="false" data-icon="close" width="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
      </p>
      <p class="content">弹窗内容：这里好多内容</p>
      <p class="footer">
        <button class="confirm" @click="handleOk">确定</button>
        <button class="cancel" @click="cancel">取消</button>
      </p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, inject }  from 'vue'
  import { closeModal } from "./index";
  
  // cancel 关闭弹窗
  // 带有回调函数关闭弹窗(预留需要关闭弹窗进行其他操作）
  const { cancel, handleOk } = closeModal("notice");
  let show = inject( 'notice', ref<boolean>(false) )

</script>

<style>
  .modal {
    width:300px;
    border: 1px solid red;
    position: absolute;
    top:20%;
    left:10%;
    padding: 0 1%;
  }
  .modal .title {
    border: 1px solid red;
    display:flex;
    justify-content: space-between;
  }
  .modal .title .close {
    /* font-size: 40px; */
    cursor: pointer;
  }
  .modal .content {
    border: 1px solid green;
  }
  .modal .footer {
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
  }
  .modal .footer .confirm {
    background:#1677ff;
    color: white;
  }
</style>
