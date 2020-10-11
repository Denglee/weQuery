<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  // import Swiper from 'swiper';
  // import TweenMax from '@/assets/js/TweenMax.min.js';


  // import wx from 'weixin-js-sdk'
  import {IndexTotal_membership,getLunbo,getSignature} from '@/assets/js/api'   /*引用 首页 接口*/

  export default {
    name: "Home",
    data() {
      return {

        swiper: {
          swiperWid: '',
          swiperHei: '150',
        },

        /*轮播图*/
        imgBanner: [],

        /*四大导航*/
        indexNav: [
          {id: '1', url: '/loanList', name: '银行产品', icon: '1', sunTitle: '汇集热门银行产品', sunTitle2: ''},
          {id: '4', url: '/loanList', name: '企业融资', icon: '2', sunTitle: '当下企业融资产品', sunTitle2: ''},
          {id: '2', url: '/cardItem', name: '信用卡办理', icon: '3', sunTitle: '申请快人一步', sunTitle2: ''},
          {id: '6', url: '/loanList', name: '在线急融', icon: '4', sunTitle: '最快当天放款', sunTitle2: ''},
          {id: '7', url: '/aboutUs', name: '服务中心', icon: '5', sunTitle: '急速答疑解惑', sunTitle2: ''},
        ],
      }
    },
    methods: {
      wxConfig(){
        getSignature({
          // url:location.href.split('#')[0],
          url:'http://www.jierong123.com/dist/#/index',
        }).then(res=>{
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wxdcf6df398c3ce766', // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr:res.data.noncestr, // 必填，生成签名的随机串
            signature: res.data.signature,
            jsApiList: ['updateAppMessageShareData','onMenuShareTimeline' ] // 必填，需要使用的JS接口列表
          });
          wx.error(function (res) {
            // 注册失败
            console.log('注册失败');
            console.log(res);
          });
          /*wx.ready(function () {
              //朋友圈
              wx.onMenuShareTimeline({
                  title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
                  link: 'http://www.jierong123.com/dist/other/creditAddress.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
                  success: function () {
                      // 设置成功
                  }
              });
              //朋友
              wx.onMenuShareAppMessage({
                  title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
                  desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
                  link: 'http://www.jierong123.com/dist/other/creditAddress.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
                  type: 'link', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function () {
                      // 用户点击了分享后执行的回调函数
                  }
              });
          });*/
        }).catch(res=>{

        });
      },

      share(){
        window.addEventListener("pageshow", function (e) {

          wx.ready(function () {
            //朋友
            wx.updateAppMessageShareData({
              title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
              link: 'http://www.jierong123.com/dist/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
              imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
              success: function () {
                // 设置成功
              }
            });

            // 朋友圈
            wx.onMenuShareTimeline({
              title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
              link: 'http://www.jierong123.com/dist/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              // desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
              imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
              success: function () {
                // 设置成功
              }
            })

            //朋友
            // wx.onMenuShareAppMessage({
            //   title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
            //   desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
            //   link: 'http://www.jierong123.com/dist/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
            //   type: 'link', // 分享类型,music、video或link，不填默认为link
            //   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            //   success: function () {
            //     // 用户点击了分享后执行的回调函数
            //   }
            // });
          });
        }, false);
      },


      // 轮播 点击事件
      funSwiper(val){
        console.log(val);
        this.$router.push({
          name: "match",//跳转到新界面，路由变化
        });
      },

      /*获取屏幕宽度 然后传给swiper*/
      getClientWidth(){
        let clientWidth = document.body.clientWidth;
        let swiperWid = clientWidth /4 + clientWidth / 6;
        this.swiperWid = swiperWid;
      },


      // 轮播
      getLunboImg(){
        getLunbo().then(res=>{
          console.log(res);
          this.imgBanner = res.data
        }).catch(res=>{
          console.log(res);
        })
      },

      /*去贷款列表页*/
      goLoan(item){
        console.log(item.id);
        localStorage.setItem('loanProdType',item.id);

        this.$router.push({
          name:'loanList',
          params:{'indexLoan':item},
        })


      },

      /*去贷款列表页*/
      goMatch(){
        this.$router.push({
          path:'/match'
        })
      },

      /*去贷款详情页*/
      goLoanDetails(){
        this.$router.push({
          path:'/loanDetails'
        })
      },

    },
    created() {
      // this.getLunboImg();

    },
    mounted(){
      this.wxConfig();
      this.share();
    }
  }
</script>

<!--<style lang="scss">-->
<!--#app {-->
<!--    font-family: apple-system,  BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',  'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--}-->
<!--</style>-->
