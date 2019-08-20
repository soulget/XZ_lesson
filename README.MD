## DOM
将一个文档建模为一个对象，通常是一颗树
我们可以用 js 操作树上的每一个节点，关联事件。

## ATTR
```html
<p style="" class="" data-item=""> text </p>
```
getAttribute
setAttribute


## Document
  整个树的入口
  document.documentElement html 节点
  不止 document.forms

## Event
  事件流：捕获 > 目标 > 冒泡
  事件模型

  
## Element
  .clientHeight
  .clientWidth
  .clientTop
  .clientLeft
  .scrollHeight  //滚动的高度
  .getBoundingClientReact()  //返回元素大小以及相对视窗的位置


scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
document.documentElement.scrollTop 垂直方向滚动的值



## Node
  nodeType
  同级节点相关的
  nextSibing
  所有的子结点
  childNodes 所有的结点
  elementNodes 只获取元素结点
  remove
  append
  clone

## NuationObserver
  检测 dom 树的改变



