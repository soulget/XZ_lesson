
- -webkit-overflow-scrolling: touch   滚动条滑动更顺滑


-  overflow-x: hidden;/*禁止水平滚动条*/

  
-   max-width: 960px;/* 从pc端到移动端 屏宽在变 适配时考虑的是宽度  max-width 在PC时生效，960px 左右留白，pc 上ok
        移动设备上<600 max-width失效 平铺整个宽度 */



    1. max-width +margin:0 auto 轻松构建跨设备自适应
    2. 搭盒子
    3. 语义化 mian 主体 
    4. header 外面放一个div  盒子责任的划分
    5. 语义化 + 盒子(margin-bottom)