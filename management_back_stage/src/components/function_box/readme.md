# 这个function_box组件是用来研究函数式弹窗的一个组件。

## 控制弹窗的函数全都写在index.ts里边，一个函数对应一种类型的弹窗，每个函数用export导出，关闭弹窗统一用function close_box()这个方法，在组件里边使用的时候用 import { xxx } from './index.ts' 解构出来。

## 每一种类型的弹窗都有自己的.vue文件。比如：form_box.vue/message.vue这些。TS都是共用index.ts这个文件。

## index.vue这个文件将来可以是任意需要用到弹窗的组件，这里只是用来做演示，可以删掉。