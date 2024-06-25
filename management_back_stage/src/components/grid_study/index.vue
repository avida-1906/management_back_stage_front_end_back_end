<template>
    <div>
        <h1>grid布局学习</h1>
        <div class="container">
            <div class="item1">1</div>
            <div class="item1">2</div>
            <div class="item1">3</div>
            <div class="item1">4</div>
            <div class="item1">5</div>
            <div class="item1">6</div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .container {
        display: grid;
        /* grid: 160px / auto auto auto; */
        /* grid-gap: 10px 20px;  横向缝隙 纵向缝隙 */
        /* grid-template-columns: 1fr 1fr 1fr;  一个值代表一列 */
        /* grid-template-columns: repeat( 3, 1fr );  一个值代表一列 */
        grid-template-columns: repeat( auto-fill, minmax(100px, 1fr) );  /* 一个值代表一列 */
        gap: 30px;
    }
    .container div {
        border: 1px solid red;
    }
</style>
