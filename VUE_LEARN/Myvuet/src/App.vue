<template>
  <div id="app">
    <el-container>
      <el-header>
    <nav class="navgatorbar">
      <div class="container">
        <a href="#" class="link">
         <i class="el-icon-time"></i>
          计划板
        </a>
        <ul class="goto">
          <li class="one"><router-link to="/home">首页</router-link></li>
          <li class="two"><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container> 

    <router-view/>
  </div>
</template>

<script>
import Slidebar from '@/components/slidebar'
export default {
  name: 'App',
  components:{
    Slidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.navgatorbar{
    position: relative;
    width: 100%;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    background-color: #f8f8f8;
    box-sizing: border-box;

}
.container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    color:#777
}
.link{
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    color:#777777;
    text-decoration: none;

}
.goto{
  display: block;
  list-style: none;
  float:left;

}
.one{
  color: #777;
  font-size: 14px;
  float:left;
  margin-right: 30px;
  text-decoration: none;
}
.two{
  float:left;
  text-decoration: none;
  font-size: 14px;
}
</style>
