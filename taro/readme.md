- 小程序为什么要框架？
  原生写小程序  有组件化 但语法好怪
  vue  react 开发者  学习成本高
  taro(react)  mpvue(vue)  让开发者不用学小程序就可以写了
  命令行工具，可以安装一堆的npm包，极大地扩展了小程序的功能
  complie src -> dist/


- JSX
  XML in js , react template 的新语法
  JSX  -> babel -> preset react -> JS
  reder () {
    return (

    )
  }

  react 没有v-for  v-if 指令
  原生写
  <view>
  {
    this.data.list.map((item, index) => {
      return(
        ...
      )
    })
  }
  </view>