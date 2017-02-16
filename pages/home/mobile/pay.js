// pages/home/mobile/pay.js
Page({
  data: {
    phoneFees: [
      {
        title: "20元",
        price: 20,
        selected: true
      },
      {
        title: "30元",
        price: 30,
        selected: false
      },
      {
        title: "50元",
        price: 50,
        selected: false
      },
      {
        title: "100元",
        price: 100,
        selected: false
      },
      {
        title: "200元",
        price: 200,
        selected: false
      },
      {
        title: "300元",
        price: 300,
        selected: false
      },
      {
        title: "500元",
        price: 500,
        selected: false
      }
    ],
    webFees: [
      {
        title: "30M",
        price: 5,
        selected: true
      },
      {
        title: "50M",
        price: 7,
        selected: false
      },
      {
        title: "100M",
        price: 10,
        selected: false
      },
      {
        title: "200M",
        price: 15,
        selected: false
      },
      {
        title: "500M",
        price: 30,
        selected: false
      },
      {
        title: "1G",
        price: 50,
        selected: false
      }
    ],
    url: "https://route.showapi.com/6-1?showapi_appid=30959&showapi_sign=827c452495f54a248fef243fcf20219b",
    phoneFee: 20,
    webFee: 5,
    currentTab: 0,
    mobile: "18621323656",
    mobileLocation: "上海联通"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  selectPhoneFee: function (e) {
    const fee = e.currentTarget.dataset.fee;
    console.log(fee);

    var that = this;
    var phoneFees = that.data.phoneFees;
    const length = phoneFees.length;
    for (let i = 0; i < length; i++) {
      if (phoneFees[i].price === fee) {
        phoneFees[i].selected = true;
      } else {
        phoneFees[i].selected = false;
      }
    }
    that.setData({
      phoneFees: phoneFees,
      phoneFee: fee
    })
  },
  selectWebFee: function (e) {
    const fee = e.currentTarget.dataset.fee;
    console.log(fee);

    var that = this;
    var webFees = that.data.webFees;
    const length = webFees.length;
    for (let i = 0; i < length; i++) {
      if (webFees[i].price === fee) {
        webFees[i].selected = true;
      } else {
        webFees[i].selected = false;
      }
    }
    that.setData({
      webFees: webFees,
      webFee: fee
    })
  },
  onChangeInput: function (e) {
    var that = this;

    const mobile = e.detail.value;
    console.log(mobile);
    var mobileLocation = "";
    if (mobile.length === 11) {
      const currentDate = new Date();
      const year = currentDate.getFullYear() < 10 ? "0" + currentDate.getFullYear() : currentDate.getFullYear();
      console.log(year);
      const month = currentDate.getMonth() + 1 < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth();
      console.log(month);
      const day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();
      console.log(day);
      const hour = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours();
      console.log(hour);
      const minute = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
      console.log(minute);
      const second = currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds();
      console.log(second);
      const dateTime = "" + year + month + day + hour + minute + second;
      const url = that.data.url + "&num=" + mobile + "&showapi_timestamp=" + dateTime;
      console.log(url);

      wx.request({
        url: url,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.showapi_res_code === 0) {
            const bodyData = res.data.showapi_res_body;
            mobileLocation = bodyData.prov + bodyData.city + bodyData.name;
            console.log(mobileLocation);
            that.setData({
              mobileLocation: mobileLocation
            })
          }
        }
      })
    }
    that.setData({
      mobile: mobile
    })
  }
})