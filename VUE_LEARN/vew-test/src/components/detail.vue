<template>
  <div>详情页</div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
        this.$http.get('https://www.easy-mock.com/mock/5d2c9bda8d71b63bc63de2d4/example_copy/details#!method=get')
    .then(res=>{
       this.list = res.data.data
       console.log(this.list)
    })    
  },

}
</script>

<style>
</style>
