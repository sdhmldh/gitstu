// pages/redirect/redirect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messgae:"永远的神",
    userName:"",
    path:"/static/goods/xrmgd.jpg",
    localPath:"获取位置信息",
    dataList:["大狗","小狗","母狗"],
    dataDic:{age:18,name:"刘东海"},
    imageList:["/static/goods/xrmga.jpg","/static/goods/xrmgd.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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

  },
  changeData:function(e) {
    var name = e.currentTarget.dataset.name
    this.setData({messgae:"永远的神"+name})
  },
  changeDataT:function(){
    this.setData({messgae:"永远的神"})
  },
  getUSerInfo:function() {
    var that = this;
    wx.getUserInfo({
      success:function(res) {
        console.log("success",res.userInfo)
        console.log(res.userInfo.country);
        console.log(res.userInfo.province);
        console.log(res.userInfo.avataUrl);
        that.setData({
          userName:res.userInfo.nickName,
          path:res.userInfo.avataUrl
        });
      },
      fail:function(res) {
        console.log("fail",res)
      }
    },
    )
  },
  getLocalPath:function(){
    var that = this;
    wx.chooseLocation({
      complete: (res) => {
        console.log(res)
        that.setData({
          localPath:res.address
        })
      },
    })
  },
  uploadImage:function(){
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          imageList:that.data.imageList.concat(tempFilePaths)
        })
      }
    })



  }
})
