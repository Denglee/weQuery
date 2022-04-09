<template>
	<div id="app">
		<router-view v-if="isRouterAlive"></router-view>
<!--        :style="{ 'left':left+'px','top': top+'px'}"-->
        <div class="fixed-goUrl" @click="fixedGoUrl">
<!--            {{ userPhone }}-->
            <a :href="`tel:${userPhone}`">联系专<br>属顾问</a>
<!--            <a :href="`tel:${userPhone}`">{{ userPhone }}</a>-->
        </div>
	</div>
</template>

<script>
// import Swiper from 'swiper';
// import TweenMax from '@/assets/js/TweenMax.min.js';

import { getLunbo, getSignature, getAttendantInfoApi } from "@/assets/js/api"; /*引用 首页 接口*/

export default {
	name: "Home",
	
	provide() {
		return {
			reLoad: this.reLoad
		};
	},
	
	data() {
		return {
            left: 0,
            top: 0,
            gapWidth:10, /**/
			isRouterAlive: true,

            userPhone:'',

		};
	},
	methods: {
        fixedGoUrl(){
            this.userPhone = localStorage.getItem('userPhoneIndex');
            // console.log('fixedGoUrl');
            // this.$router.push({
            //     path:'/aboutUs',
            // })
        },
		/*刷新方法*/
		reLoad() {
			this.isRouterAlive = false;
			this.$nextTick(() => {
				this.isRouterAlive = true;
			});
		},
		
		/*分享*/
		fnShare(){
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
					jsApiList: ['openLocation', 'onMenuShareTimeline', 'onMenuShareAppMessage',
						'updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
				});
				
				wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
					
					// 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
					wx.updateAppMessageShareData({
						title: '查最新银行政策；找融资方案，就上“节融”!!', // 分享标题
						desc: '注册节融会员；免费办理各大银行贷款。!!', // 分享描述
						link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						success: function () {
							// 设置成功
						}
					})
				});
				
				// 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
				wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
					wx.updateTimelineShareData({
                        title: '查最新银行政策；找融资方案，就上“节融”!!', // 分享标题
                        desc: '注册节融会员；免费办理各大银行贷款。!!', // 分享描述
						link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						success: function () {
							// 设置成功
						}
					})
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
			}).catch(res=>{});
		},

        /*获取手机号码*/
        fnGetPhone(){
            getAttendantInfoApi({
                openid:this.openid
            }).then(res => {
                if(res.status == "success"){
                    localStorage.setItem('userPhoneIndex' , res.data.phone);

                    this.userPhone = res.data.phone;
                }
            })
        },
		
	},
	created() {
		this.fnShare();
		
		// this.getLunboImg();
        //
        // this.clientWidth = document.documentElement.clientWidth;
        // this.clientHeight = document.documentElement.clientHeight;
        //
        // this.left = this.clientWidth - this.itemWidth - this.gapWidth;
        // this.top = this.clientHeight*this.coefficientHeight;


        const ls = new this.GLOBAL.FnStorage();
        const openid = ls.getItem("openid2");
        this.openid = openid || "oLbgO1Qu4uJHnyqDj245KanmDre4";

        this.fnGetPhone();
	},
	mounted() {

	}
};
</script>

<style lang="scss" scoped>
//#app {
//    font-family: apple-system,  BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',  'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//}
.fixed-goUrl{
    width: 60px;
    height: 60px;
    line-height: 1.4;
    text-align: center;
    //border: solid 1px #606266;
    background-color: #ffa300;
    color: #fff;
    font-size: 13px;
    border-radius: 50%;
    position: fixed;
    bottom: 60px;
    right: 20px;
    z-index: 111;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        color: inherit;
    }
}
</style>
