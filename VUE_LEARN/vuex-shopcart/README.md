#  技能思路

- 购物车
Good > GoodsItem
共享数据 库存 -> 购物车
- 组件让我们从容的进行页面的划分
- vuex data（组件私有） 不适合防共享数据
  props 父子组件传值，但是event bus 不如vuex
  computed 从中央到地方的对接点
- 
  store  module(products.all)[]
  mapState({ products: state=> state.all })

  all   state  <- mutations  <- actions axios 请求（后端api）
  modules state.products.all
  dispatch('products/getAllProducts')  -> action -> api -> mutation -> state -> MVVM -> 界面 vuex 开发套路
  methods => mapActions
  this.$store.dispatch()