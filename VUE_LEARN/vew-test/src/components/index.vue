<template>
  <div class="page">
     <div class="container" v-for="item in user" :key="item.id" @click="selectItem(item)">
    <div class="main">
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>


<script>

export default {

  data() {
    return {
      user:[],
      
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d2c9bda8d71b63bc63de2d4/example_copy/userList_copy_1563207825158')
    .then(res=>{
       this.user = res.data.data
       console.log(this.user)
    })    
  },
  methods: {
    selectItem (item) {
      this.$router.push({
        path: `/rank/${item.id}`
      })
  },
}
}
</script>

<style>

</style>