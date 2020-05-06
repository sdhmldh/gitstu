// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"halo",
    phone:"",
    code:""
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

  },
  bindText:function(e){
   this.setData({message:e.detail.value})
  },
  bindPhone:function(e){
  this.setData({phone:e.detail.value})
  },
  bindCode:function(e){
  this.setData({code:e.detail.value})
  },
  login:function(){
    wx.request({
      url: 'http://127.0.0.1:8000/api/login/',
      data: {phone:this.data.phone,code:this.data.code},
      method: "POST",
      success: (result) => {
        console.log(result)
      },
    })
  },
  checkCode:function(){
    console.log("点击获取验证码");
      //获取手机号
      var phone = this.data.phone
      if(phone.length != 11){
        //弹窗提示
        wx.showToast({
          title: '手机号码长度有误',
          icon:"none",
          duration:2000
        })
        return;
      }
      //进行正则匹配手机号码
      var reg = /^(1[3|4|5|6|7|8|9])\d{9}$/;
      if(!reg.test(this.data.phone)){
        wx.showToast({
          title: '手机号码格式有误',
          icon:"none",
          duration:2000
        })
        return;

      }


      wx.request({
        url: 'http://127.0.0.1:8000/api/message/',
        data: {phone:this.data.phone},
        method: "GET",
        success: (result) => {
        console.log(result)
      },
      })



  }
})