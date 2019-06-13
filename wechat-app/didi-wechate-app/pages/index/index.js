//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index';
Page({
  data: {
   navData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.requestCart();
  },
  //nav items req
  requestCart() {
    util.request({
      url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get'
    })
    .then((res) => {
      // const waitingTimesArr = res.data.waitingTimes;
      // const index = Math.floor((Math.random() * waitingTimesArr.length));
      // var index = 
      this.setData({
        navData: res.data.navData,
        // cost: res.data.cost,
        // isLoading: false,
        // waitingTimes: waitingTimesArr[index]
      })
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
