Component({
  // page传来的参数
  properties:{
    //向page要什么
    tittle:{
      type: String,
      value: ' 标题'
    },
    content:{
      type:String,
      value:'内容'
    },
    btn_no:{
      type:String,
      value:'取消'
    },
    btn_ok:{
      type:String,
      value:'确定'
    }
  },
  data:{
    flag:false //弹窗显示还是隐藏
  },
  // 页面中被调用
  methods:{
    _error(){

    },
    _success(){

    },
  }
})