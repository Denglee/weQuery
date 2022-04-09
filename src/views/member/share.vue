<template>
	<div class="share-box">
		请点击右上角三个点进行分享
	</div>
</template>

<script>
import {
	getSignature
} from "@/assets/js/api"; /*引用 接口*/
export default {
	name: "share",
	data() {
		return {};
	},
	methods: {
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
	},
	created() {
		this.fnShare();
	}
};
</script>
<style>
.share-box{
	padding: 20px;
}
</style>
