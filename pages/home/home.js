Page({
    data: {
        imgUrls: [
            {
                img: "http://l0.51fanli.net/event/attach/image/2017/02/589853ee7036b.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l1.51fanli.net/event/attach/image/2017/02/58983d7c3e6a3.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l3.51fanli.net/event/attach/image/2017/01/588464bc6e3f8.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l4.51fanli.net/event/attach/image/2017/02/58982af5b97a5.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l2.51fanli.net/event/attach/image/2017/02/58982322208e8.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l3.51fanli.net/event/attach/image/2017/02/5898324aaf953.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l3.51fanli.net/event/attach/image/2017/02/5895ab2c05a95.jpg",
                tap: "gotoBanner1"
            },
            {
                img: "http://l2.51fanli.net/event/attach/image/2017/01/58846d3d421a0.jpg",
                tap: "gotoBanner1"
            }
        ],
        indicatorDots: true,
        autoplay: true,
        circular: true,
        interval: 5000,
        duration: 1000,
        hotIconList: [
            {
                img: "/images/icon/shop/taobao.png",
                title: "淘宝"
            },
            {
                img: "/images/icon/shop/jd.png",
                title: "京东"
            },
            {
                img: "/images/icon/shop/vip1.png",
                title: "品牌特卖"
            },
            {
                img: "/images/icon/shop/1haodian1.png",
                title: "网上超市"
            },
            {
                img: "/images/icon/shop/eleme.png",
                title: "外卖"
            },
            {
                img: "/images/icon/shop/ka.png",
                title: "信用卡"
            },
            {
                img: "/images/icon/shop/xiecheng.png",
                title: "机/酒/门票"
            },
            {
                img: "/images/icon/shop/meituan.png",
                title: "吃喝玩乐"
            },
            {
                img: "/images/icon/shop/mobile.png",
                title: "充值中心"
            },
            {
                img: "/images/icon/shop/all.png",
                title: "全网商城"
            }
        ],
        iconList: [
            {
                img: "/images/icon/shop/haitao.png",
                title: "海淘尖货"
            },
            {
                img: "/images/icon/shop/suning.png",
                title: "苏宁"
            },
            {
                img: "/images/icon/shop/1haodian.png",
                title: "1号店"
            },
            {
                img: "/images/icon/shop/kaola.png",
                title: "网易考拉"
            },
            {
                img: "/images/icon/shop/gome.png",
                title: "国美"
            },
            {
                img: "/images/icon/shop/dangdang.png",
                title: "当当网"
            },
            {
                img: "/images/icon/shop/amazon.png",
                title: "亚马逊"
            },
            {
                img: "/images/icon/shop/yanxuan.png",
                title: "网易严选"
            },
            {
                img: "/images/icon/shop/tongcheng.png",
                title: "同程旅游"
            },
            {
                img: "/images/icon/shop/meituan1.png",
                title: "蘑菇街"
            },
            {
                img: "/images/icon/shop/letv.png",
                title: "1药网"
            },
            {
                img: "/images/icon/shop/feiniu.png",
                title: "艺龙旅行"
            },
            {
                img: "/images/icon/shop/huawei.png",
                title: "华为商城"
            },
            {
                img: "/images/icon/shop/tmall.png",
                title: "酒仙网"
            },
            {
                img: "/images/icon/shop/more.png",
                title: "更多"
            }
        ]
    },
    gotoBanner1: function () {
        wx.navigateTo({
          url: 'banner/banner1/banner1',
          success: function(res){
            // success
            console.log("success")
          },
          fail: function() {
            // fail
            console.log("fail")
          },
          complete: function() {
            // complete
            console.log("complete")
          }
        })
    }
})