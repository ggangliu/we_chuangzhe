import Cain from '../../utils/Cain.js'
// 本地方式
import LocalData from '../../utils/LocalData.js'

Page({
  data: {
    imgUrls: [
      '../../images/gou.png', 
      '../../images/goods02.png',
      '../../images/goods01.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    overlay:true
  },
 
  onReady: function (e) {
    this.getData()
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  //获取数据
  getData(){
    // 本地方式
   this.setData(LocalData)
   wx.hideLoading()
   this.setData({ 'overlay': false })
   //远程方式
   const self = this;
   /*
    wx.request({
      url:'https://health.ztlife.com.cn/UnionWeChat/json/haze.liu.json',
      success:function(data){
        wx.hideLoading()
        self.setData(data.data)
        self.setData({'overlay': false})
      }
    });*/
  },
  //打开/关闭手风琴项
  toggleAccordionItem(e) {
    let item = this.data.workList[e.currentTarget.dataset.index];

    item.isShow = !item.isShow

    this.setData({
      workList: this.data.workList
    })
  },

  //设置剪切板内容
  setClipboard(e) {
    Cain.setClipboard(e.currentTarget.dataset.content)
  },
  //打电话
  callPhone() {
    Cain.callPhone(this.data.baseInfo.mobilePhone)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})