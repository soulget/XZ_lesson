<template>
  <div>
    <div class="top-wrapper">
      <div class="left">
        <span class="rating">{{seller.score}}</span>
        <span class="score">综合评分</span>
        <span class="better">高于周边商家{{seller.rankRate}}%</span>
      </div>
      <div class="right">
        <div class="server">
          <span class="server-des">服务态度</span>
          <start></start>
        </div>
        <div class="server">
          <span class="server-des">商品评分</span>
          <start></start>
        </div>
        <div class="server">
          <span class="delieve">送达时间{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import start from '@/components/ratings/ratings'
export default {
  name:'Ratings',
   props: {
    seller: {
      type: Object
    }
  },
  components: {
    start
  },
  data () {
    return {
      shop:[]
    }
  },
  // created () {
  //   this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
  //   .then(res => {
  //     console.log(res)
  //     if(res.data.errno === 0){
  //       let seller = res.data.data
  //       this.$nextTick(()=>{

  //       })
  //     }
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
.top-wrapper
  width 100%
  height 150px
  background-color #ffffff
  display flex
  .left
    height 80px
    width 140px
    text-align center
    border-right 1px solid #ececec
    margin 20px 10px
    box-sizing border-box 
    .rating
      color #f28b1d
      font-size 40px
      display block
      margin-bottom 5px
    .score
      font-size 15px
      display block
      margin-bottom 5px
    .better
      color #9c9ea3
      font-size 12px
      // display inline-block
  .right
    position relative
    height 80px
    // width auto 
    overflow hidden
    margin 20px 10px
    text-align left 
    .server
      width 200px
      font-size 15px
      margin-bottom 15px

</style>
