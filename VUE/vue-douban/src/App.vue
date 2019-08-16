<template>
  <div id="app">
    <!-- 头部 -->
      <TheHeader></TheHeader>
   <div class="content">
     <!-- keep-alive 保持页面状态 -->
     <keep-alive>  
      <router-view/>
     </keep-alive>
   </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components:{
    TheHeader
  }
}
</script>

<style lang="stylus" scoped>
.content
  position absolute
  top 56px
  bottom 0
  width 100%
</style>
