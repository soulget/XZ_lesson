#清除浮动的几种方法:
 1. 在父元素底部加上一行代码 <div style="clear:left"></div>

 2. 在父元素CSS中加上  div.content{ float: left;}  

 3. 使用css中的伪类after，给父元素div添加一个clearFix的class类
.clearFix::after{
    content:'';
    display:block;
    clear:both;
}

4. 利用BFC简称(块级格式化上下文)的效果来弥补父级容器的高度塌陷

div.content{
    overfloat:hiddlen;auto;scroll;   //三个属性都可以清除浮动
}

5. 尼古拉斯大师 方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果
.content{
    dialay:table;
}

                                
                        