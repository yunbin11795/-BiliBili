// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
        '../../static/image/1.webp.jpg',
        '../../static/image/2.webp.jpg',
        '../../static/image/3.webp.jpg',
        '../../static/image/4.webp.jpg',
        '../../static/image/5.webp.jpg'
      ],
      // 是否显示面板指示点
      indicatorDots: false,
      // 是否自动切换
      autoplay: true,
      // 自'动切换时间间隔
      interval: 5000,
      // 滑动动画时长
      duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})