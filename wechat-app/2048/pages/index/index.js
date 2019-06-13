//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game_manager.js')
Page({
  data: {
   grids:[]
  },
  GameManager: null,
  onLoad: function () {
    this.GameManager = new GameManager(4);
    const grids = this.GameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(){
    console.log('touchStart');
  },
  touchMove(){
    console.log('touchMove');
  },
  touchEnd(){
    console.log('touchEnd');
  },

})
