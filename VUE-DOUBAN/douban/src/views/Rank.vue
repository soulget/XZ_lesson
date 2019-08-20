<template>
  <div class="rank">
    <ScrollView :data="topMovie">
      <Card v-for="(item, index) in topMovie" :key="item._id" :movie="item" @select="select(item._id)" :sort="index+1"></Card>
    </ScrollView>
    <div class="loading-wrap" v-show="!topMovie.length">
      <Loading/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      topMovie:[]
    }
  },
  created() {
    this.getTopMovie()
  },
  methods: {
    getTopMovie(){
      axios.get('/api/api/movie/get_rank').then(res => {
        console.log(res)
        if(res.data.code === 1001){
          this.topMovie = res.data.result.movies
        }
      })
    },
    select(id){
      this.$router.push(`/movie/${id}`)
    }

  },
}
</script>
<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>