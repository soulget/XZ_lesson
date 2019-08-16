<template>
  <div id="app">
    <el-button type="primary" size="small" @click="doButtonPress" disabled>主要按钮</el-button>
    <el-button type="success" size="mini" v-on:click="doButtonPress">成功</el-button>
    <el-button type="info">信息</el-button>
    <router-view/>
  </div>
</template>

<script>
import ElButton from './components/ElButton'
export default {
  name: 'App',
  components:{
    'el-button':ElButton
  },
  methods: {
    doButtonPress(){
      console.log('pressd')
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
