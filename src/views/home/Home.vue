<template>
	<div class="main" id="home">
		<!--地址-->
		<div class="flex-between">
			<div class="address-left">
				<h4 class="address-city">所在城市</h4>
				<div class="address-info">机构仅办理当地工作认识申请</div>
			</div>
			<div>
				<van-icon name="location-o" />
				深圳
			</div>
		</div>
		
		
		<!--轮播图-->
		<van-swipe :autoplay="3000" :width="swiper.swiperWid" :height="swiper.swiperHei"
		           class="index-swiper" :show-indicators="false">
			<van-swipe-item v-for="(image, index) in imgBanner" :key="index" @click="funSwiper(image)">
				<van-image :src="image.rotationImg" fit="cover" />
			</van-swipe-item>
		</van-swipe>
		
		<!--立即匹配贷款-->
		<div class="index-nav-box">
			<div class="index-match">
				<div class="index-match-title">
					<div class="index-noteL">点击匹配</div>
					<img class="iconIndex-toLeft" src="../../assets/img/icnon_toRignt.png" alt="">
					<!--<div>汇总查看</div>-->
				</div>
				<van-button size="mini" class="btn-match" @click="goMatch"><h4>匹配</h4></van-button>
				<div class="index-match-title">
					<!--<div>点击匹配</div>-->
					<img class="iconIndex-toRight" src="../../assets/img/icnon_toRignt.png" alt="">
					<div class="index-noteR">获取方案</div>
				</div>
				<!--<div class="index-match-info">智能匹配</div>-->
			</div>
			
			<!--四大导航-->
			<van-row gutter="14" class="index-nav-main">
				<van-col span="12" v-for="(item,index) in indexNav" :key="index">
					<div v-if="item.id == '01' || item.id == '02' || item.id == '03' || item.id == '04' " class="index-navItem"
					     @click="goLoan(item)">
						<h4 class="index-navTitle">{{ item.name }}</h4>
						<div class="index-navSub">{{ item.sunTitle }}</div>
						<div class="index-navSub">{{ item.sunTitle2 }}</div>
					</div>
					<div class="index-navItem" v-else @click="fnGoMember(item)">
						<!--<router-link :to="item.url">-->
							<h4 class="index-navTitle">{{ item.name }}</h4>
							<div class="index-navSub">{{ item.sunTitle }}</div>
							<div class="index-navSub">{{ item.sunTitle2 }}</div>
						<!--</router-link>-->
					</div>
				</van-col>
				<!--<van-col span="12">-->
				<!--    <div class="index-navItem">-->
				<!--        <h4>-->
				<!--            <h4 class="index-navTitle">联系我们</h4>-->
				<!--            <div class="index-navSub">-->
				<!--                <a href="tel:15014031191" style="display: block;width: 100%;height: 46px;">-->
				<!--                    <van-icon name="phone-o" style="font-size: 20px;" />-->
				<!--                </a>-->
				<!--            </div>-->
				<!--            &lt;!&ndash;<div class="index-navSub"></div>&ndash;&gt;-->
				<!--        </h4>-->
				<!--    </div>-->
				
				<!--    &lt;!&ndash;<div class="index-navItem index-navItemTel" >-->
				<!--        <div class="index-navTitle">-->
				<!--            <h4 class="index-navTitle">联系我们</h4>-->
				<!--            &lt;!&ndash;<div class="index-navSub">联系我们</div>&ndash;&gt;-->
				<!--            <div class="index-navSub"><van-icon name="phone-o" /></div>-->
				
				<!--           &lt;!&ndash; <a href="tel:15915403745" class="flex-between">-->
				<!--                <div>联系我们</div>-->
				<!--                <van-icon name="phone-o" />-->
				
				<!--            </a>&ndash;&gt;-->
				<!--        </div>-->
				<!--    </div>&ndash;&gt;-->
				<!--</van-col>-->
			</van-row>
		
		</div>
		
		<div style="text-align: center;margin-top: 10px;">
			<a href="https://beian.miit.gov.cn/">粤ICP备20063955号</a>
		</div>
	</div>

</template>

<script>
// import Swiper from 'swiper';
// import TweenMax from '@/assets/js/TweenMax.min.js';

// import wx from 'weixin-js-sdk'
import { IndexTotal_membership, getLunbo, getSignature, getMemberDetailApi , getAttendantInfoApi} from "@/assets/js/api";


export default {
	name: "Home",
	data() {
		return {
			openid:'',
			swiper: {
				swiperWid: "",
				swiperHei: "150"
			},
			
			/*轮播图*/
			imgBanner: [],
			
			/*四大导航*/
			indexNav: [
				{ id: "01", url: "/loanList", name: "个人信用贷", icon: "1", sunTitle: "保单贷 工薪贷", sunTitle2: "月供贷 汇总" },
				{ id: "03", url: "/loanList", name: "个人抵押贷", icon: "2", sunTitle: "消费抵押", sunTitle2: "车贷汇总" },
				{ id: "02", url: "/cardItem", name: "企业信用贷", icon: "3", sunTitle: "企业票贷", sunTitle2: "税贷汇总" },
				{ id: "04", url: "/loanList", name: "企业抵押贷", icon: "4", sunTitle: "经营抵押贷", sunTitle2: "汇总" },
				{ id: "7", url: "/registerMember", name: "会员中心", icon: "5", sunTitle: "登入/注册", sunTitle2: "" },
				{ id: "7", url: "/contactUs", name: "联系我们", icon: "5", sunTitle: "顾问中心", sunTitle2: "" }
			]
		};
	},
	methods: {
		/*获取会员信息*/
		fnGetMemberDetailApi() {
			getMemberDetailApi({ openid: this.openid }).then(res => {
				console.log(res);
				if(res.status == 'success'){
                    const  proxyOpenid = res.data.businessAttendantId;
                    console.log(proxyOpenid)
                    localStorage.setItem('proxyOpenid',proxyOpenid)
					let url = '';
					if(res.data.memberType == 2 || res.data.proxy == 1){
						url = '/memberInfo'  /*会员信息页面*/
						this.$router.push({
							path:url,
							query:{
								proxyOpenid: proxyOpenid,
							}
						})
					} else {
						url = '/registerMember'  /*会员注册页面*/
						this.$router.push({
							path:url,
						})
					}

				}
			});
		},
		
		
		/*会员判断*/
		fnGoMember(item){
			console.log(item);
			if(item.name === '联系我们'){
				this.$router.push({
					path:item.url,
				})
			}
			if(item.name === '会员中心'){
				this.fnGetMemberDetailApi();
			}
		},
		
/*		wxConfig() {
			getSignature({
				// url:location.href.split('#')[0],
				url: "http://www.jierong123.com/dist/#/index"
			}).then(res => {
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: "wxdcf6df398c3ce766", // 必填，公众号的唯一标识
					timestamp: res.data.timestamp, // 必填，生成签名的时间戳
					nonceStr: res.data.noncestr, // 必填，生成签名的随机串
					signature: res.data.signature,
					jsApiList: ["openLocation", "onMenuShareTimeline", "onMenuShareAppMessage", "updateTimelineShareData","updateAppMessageShareData"] // 必填，需要使用的JS接口列表
				});
				wx.error(function(res) {
					// 注册失败
					console.log("注册失败");
					console.log(res);
				});
				/!*wx.ready(function () {
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
					  });*!/
			}).catch(res => {
			
			});
		},
		
		share() {
			window.addEventListener("pageshow", function(e) {
				wx.ready(function() {
					//朋友圈
					// wx.updateTimelineShareData({
					wx.onMenuShareTimeline({
						title: "节融：打造顶级融资算法，助力企业解决融资难题!!", // 分享标题
						// link: "http://www.jierong123.com/dist/#/index", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						link:window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: "http://www.jierong123.com/dist/other/myCode2.png", // 分享图标
						success: function() {
							// 设置成功
						}
					});
					//朋友
					wx.onMenuShareAppMessage({
						title: "节融：打造顶级融资算法，助力企业解决融资难题!!", // 分享标题
						desc: "节融：打造顶级融资算法，助力企业解决融资难题!!", // 分享描述
						// link: "http://www.jierong123.com/dist/#/index", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						link:window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						
						imgUrl: "http://www.jierong123.com/dist/other/myCode2.png", // 分享图标
						type: "link", // 分享类型,music、video或link，不填默认为link
						dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
						success: function() {
							// 用户点击了分享后执行的回调函数
						}
					});
				});
			}, false);
		},*/
		
		// wxConfig(){
		
		// },
		
/*		share(){
			window.addEventListener("pageshow", function (e) {
				wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
					
					// 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
					wx.updateAppMessageShareData({
						title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
						desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
						link: 'http://www.jierong123.com/dist/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						success: function () {
							// 设置成功
						}
					})
				});
				
				// 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
				wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
					wx.updateTimelineShareData({
						title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
						link: 'http://www.jierong123.com/dist/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						success: function () {
							// 设置成功
						}
					})
				});
				
			}, false);
		},*/
		
		// 轮播 点击事件
		funSwiper(val) {
			console.log(val);
			this.$router.push({
				name: "match"//跳转到新界面，路由变化
			});
		},
		
		/*获取屏幕宽度 然后传给swiper*/
		getClientWidth() {
			let clientWidth = document.body.clientWidth;
			let swiperWid = clientWidth / 4 + clientWidth / 6;
			this.swiperWid = swiperWid;
		},
		
		
		// 轮播
		getLunboImg() {
			getLunbo().then(res => {
				console.log(res);
				this.imgBanner = res.data;
			}).catch(res => {
				console.log(res);
			});
		},
		
		/*去贷款列表页*/
		goLoan(item) {
			console.log(item.id);
			localStorage.setItem("loanProdType", item.id);
			
			this.$router.push({
				name: "loanList",
				params: { "indexLoan": item }
			});
		},
		
		/*去贷款列表页*/
		goMatch() {
			this.$router.push({
				path: "/match"
			});
		},
		
		/*去贷款详情页*/
		goLoanDetails() {
			this.$router.push({
				path: "/loanDetails"
			});
		},

        /*获取手机号码*/
        fnGetPhone(){
            getAttendantInfoApi({
                openid:this.openid
            }).then(res => {
                if(res.status == "success"){
                    localStorage.setItem('userPhoneIndex' , res.data.phone)
                }
            })
        },

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
		this.getLunboImg();


		
		const ls = new this.GLOBAL.FnStorage();
		const openid = ls.getItem("openid2");
		this.openid = openid || "oLbgO1Qu4uJHnyqDj245KanmDre4";
		
		this.fnShare();

        this.fnGetPhone();
	},
	mounted() {
		// this.wxConfig();
		// this.share();
	}
};
</script>
<style lang="scss" scoped>
.index-match{
	position: relative;
}
.iconIndex-toLeft{
	width: .6rem;
	position: absolute;
	top: 0;
	left: 20.2%;
	transform: rotate(70deg);
	//border: solid 1px red;
}
.iconIndex-toRight{
	width: .6rem;
	//height: 80px;
	position: absolute;
	top: 0;
	right: 20%;
	transform: rotate(200deg);
	//border: solid 1px red;
	
}
.index-noteL{
	text-align: left;
	padding-top: 14px;
}
.index-noteR{
	text-align: right;
	padding-top: 14px;
}
</style>

<!--大数据-->
<!-- <ul class="data scrollX">
     <li v-for="(item,index) in dataArr" :key="'vip'+index" class="vip-item" :class="item.bgColor">
         <div :data-href="item.url">
             <div><van-icon :name="item.icon" />{{item.name}}</div>
             <div>{{item.subTitle}}</div>
         </div>
     </li>
 </ul>-->