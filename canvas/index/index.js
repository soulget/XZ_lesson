//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/b1.png',
      '/images/index/b2.png',
      '/images/index/b3.png'
    ],
    interval: 3000,
    duration: 800,
    recommendtext: '人气推荐',
    searchtext: '搜索商品',
    title1: '猜你喜欢',
    classlist:[
      {
        imgsrc:'/images/system-icon/img1.png',
        text:'手机'
      },
      {
        imgsrc: '/images/system-icon/img2.png',
        text: '电视'
      },
      {
        imgsrc: '/images/system-icon/img3.png',
        text: '电脑'
      },
      {
        imgsrc: '/images/system-icon/img4.png',
        text: '智能'
      },
      {
        imgsrc: '/images/system-icon/img5.png',
        text: '生态链'
      },
      {
        imgsrc: '/images/system-icon/img6.png',
        text: '新品'
      },
      {
        imgsrc: '/images/system-icon/img7.png',
        text: '小米众筹'
      },
      {
        imgsrc: '/images/system-icon/img8.png',
        text: '以旧换新'
      },
      {
        imgsrc: '/images/system-icon/img9.png',
        text: '1分拼团'
      },
      {
        imgsrc: '/images/system-icon/img10.png',
        text: '每日臻选'
      },
    ],
    forrecmdgoods1:[
      {
        url1:'/images/index/img1.jpg',
        goodsname1:'米家扫地机器人',
        goodsspecial1:'智能路径/大风压',
        goodsprice1:'￥1499',
        url2: '/images/index/img1.jpg',
        goodsname2: '米家扫地机器人',
        goodsspecial2: '智能路径/大风压',
        goodsprice2: '￥1499',
      },
      {
        url1: '/images/index/img1.jpg',
        goodsname1: '米家扫地机器人',
        goodsspecial1: '智能路径/大风压',
        goodsprice1: '￥1499',
        url2: '/images/index/img1.jpg',
        goodsname2: '米家扫地机器人',
        goodsspecial2: '智能路径/大风压',
        goodsprice2: '￥1499',
      }
    ],
    forrecmdgoods2:[
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      {
        url1: '/images/index/img2.jpg',
        goodsname1: '小米小爱智能闹钟',
        goodsspecial1: '能听会说的人工智能闹钟',
        goodsprice1: '￥139',
        url2: '/images/index/img2.jpg',
        goodsname2: '小米小爱智能闹钟',
        goodsspecial2: '能听会说的人工智能闹钟',
        goodsprice2: '￥139',
      },
      
    ],

  },
})
