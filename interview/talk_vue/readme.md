基于 Vue 2.0 + Vuex + VueRouter  全家桶实现方案 来模拟网易云音乐WebApp项目
css预编译工具使用是Sass, 音乐上下滚动加载用的是betterscroll，全面采用es6风格代码


解决了哪些问题
- 图片懒加载  vue-lazyload
- 前后端分离  
  使用node.js NeteaseCloudMusicAPI proxy  8000 + 3000
- fastclick
- 设计了store
  songs index song singer mode favoriteList
  searchHistory playingHistory
- iconfont
- eslint