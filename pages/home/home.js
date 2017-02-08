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
                img: "/images/icon/shop/v5_8_584118f0b4c7f.png",
                title: "淘宝"
            },
            {
                img: "/images/icon/shop/v5_8_5841191194575.png",
                title: "京东"
            },
            {
                img: "/images/icon/shop/v5_8_584119c0a5404.png",
                title: "品牌特卖"
            },
            {
                img: "/images/icon/shop/v5_8_584119d59dafa.png",
                title: "网上超市"
            },
            {
                img: "/images/icon/shop/v5_8_585c7f85257c5.png",
                title: "外卖"
            },
            {
                img: "/images/icon/shop/v5_8_58411a20a7bda.png",
                title: "信用卡"
            },
            {
                img: "/images/icon/shop/v5_8_5872ec044dcaf.png",
                title: "机/酒/门票"
            },
            {
                img: "/images/icon/shop/v5_8_58411afacb3b8.png",
                title: "吃喝玩乐"
            },
            {
                img: "/images/icon/shop/v5_8_58411a8625b6d.png",
                title: "充值中心"
            },
            {
                img: "/images/icon/shop/v5_8_58411a565d147.png",
                title: "全网商城"
            }
        ],
        iconList: [
            {
                img: "/images/icon/shop/v5_8_5847a4636f178.png",
                title: "海淘尖货"
            },
            {
                img: "/images/icon/shop/v5_8_4c9481e4c8073e85.png",
                title: "苏宁"
            },
            {
                img: "/images/icon/shop/v5_8_58411e4794d30.png",
                title: "1号店"
            },
            {
                img: "/images/icon/shop/v5_8_9feff5ba48402883.png",
                title: "网易考拉"
            },
            {
                img: "/images/icon/shop/v5_8_4a818184ebb1cc0d.png",
                title: "国美"
            },
            {
                img: "/images/icon/shop/v5_8_d58a54e94377e6ae.png",
                title: "当当网"
            },
            {
                img: "/images/icon/shop/v5_8_50ba3f7cba1e6c53.png",
                title: "亚马逊"
            },
            {
                img: "/images/icon/shop/v5_8_6baeb75112f09fa1.png",
                title: "网易严选"
            },
            {
                img: "/images/icon/shop/v5_8_efc3b337800875b5.png",
                title: "同程旅游"
            },
            {
                img: "/images/icon/shop/v5_8_584123c525450.png",
                title: "蘑菇街"
            },
            {
                img: "/images/icon/shop/v5_8_584118f0b4c7f.png",
                title: "1药网"
            },
            {
                img: "/images/icon/shop/v5_8_584118f0b4c7f.png",
                title: "艺龙旅行"
            },
            {
                img: "/images/icon/shop/v5_8_81a21445772454cb.png",
                title: "华为商城"
            },
            {
                img: "/images/icon/shop/v5_8_585c80a5ec38c.png",
                title: "酒仙网"
            },
            {
                img: "/images/icon/shop/v5_8_58412ef63d2a8.png",
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