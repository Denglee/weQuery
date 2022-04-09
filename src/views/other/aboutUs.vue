<template>
	<div style="padding-top: .2rem;">
		<!--        <h4 class="about-question">xxxx,是一款什么类型平台？</h4>-->
		<!--        <div class="about-answer">xxxx,是深圳市鲸研科技有限公司旗下的一款贷款智能匹配平台。</div>-->
		
		
		<!--        <h4 class="about-question">xxxx的产品匹配精准度如何？</h4>-->
		<!--        <div  class="about-answer">xxxx的产品团队、IT团队均来自金融行业领域,行业经验均5年以上,平台与各大银行、消费金融、小额公司等机构有着多年合作经验,使匹配精准度可高达98%。</div>-->
		
		<!--        <h4 class="about-question">xxxx是如何得到市场的认可?</h4>-->
		<!--        <div  class="about-answer">xxxx平台通过大数据，为用户匹配最合适的贷款产品，产品的利息、还款方式、还款周期、办理流程、所需资料等统统一目了然。-->
		<!--            用户可根据贷款产品的办理教程进行自行办理,而做到无居间/中介、无套路、无高利息。</div>-->
		<!--        <div  class="about-answer">xxxx致力于打造一个有效、全方位、高效率的贷款匹配平台。</div>-->
		
		
		<div class="about-ul">
			<h4>节融，是一款什么类型平台？</h4>
			<div>融资一定要先找银行。节融汇集了深圳大部分银行贷款产品信息，是一个信息平台。</div>
			<div>融资一定要找对银行。节融独有的匹配逻辑帮助用户筛选银行方案，是一个科技平台。</div>
			<div>此外，节融还邀请了行业专家为企业一对一提供融资资讯服务，是一个服务平台。</div>
			<h4>什么是融资跑腿服务？</h4>
			<div>融资跑腿服务，很多用户在自行办理融资过程当中对银行流程，细节，审批要求不熟悉不顺畅，节融邀请了行业专家来为用户跑腿，协助用户走顺流程的服务叫融资跑腿服务。</div>
			<h4>节融是如何得到市场的认可?</h4>
			<div>节融定期更新银行产品信息，并且让银行产品的利息、还款方式、还款周期、办理流程、所需资料等统统一目了然。用户可根据贷款产品的信息自行办理,而做到无居间/中介、无套路、无高利息，同时公司邀请行业专家提供咨询服务。融资跑腿以及一对一咨询服务。</div>
			<h4>打造顶级融资算法，助力企业解决融资难题。</h4>
		</div>
		
		<div class="mycode">
			<img :src="imgCode" alt="">
			<a href="tel:15014031191" class="btn-tel">
				<span style="font-size: 18px;">联系我们<van-icon name="phone-o" class="icon-tel" />：</span>
				
				<span style="margin-left: 1px;font-size: 17px;">15014031191</span>
			</a>
		
		</div>
	
	</div>
</template>

<script>
import { customerVisit,getAttendantForPageApi } from "@/assets/js/api";   /*引用 首页 接口*/
export default {
	name: "aboutUs", //关于我们
	data() {
		return {
			imgCode: require("@/assets/img/myCode.png"),
			attendantForm:{
				pageNum:1 ,
				pageSize:10,
				accountName:"" ,//(账号名称)，
				name:"", //(姓名)
				phone:"", //(手机号码)
			}
		};
	},
	methods: {
		/*联系我们*/
		fnGetAttendantForPage(){
			getAttendantForPageApi(this.attendantForm).then(res => {
				console.log(res);
			}).catch(res => {
				console.log(res);
			});
		},
		getCustomerVisit() {
			customerVisit().then(res => {
				console.log(res);
			}).catch(res => {
				console.log(res);
			});
		}
	},
	created() {
		this.getCustomerVisit();
		
		this.fnGetAttendantForPage();
	}
};
</script>
<style lang="scss">
.icon-tel {
	font-size: 19px !important;
	vertical-align: middle;
	margin: -3px 2px 0 3px;
}

.mycode {
	padding-top: .4rem;
	text-align: center;
	
	img {
		width: 40%;
		margin: .1rem auto 0;
	}
}

.about-ul {
	padding: 0 .2rem .2rem;
	background: #fff;
	width: 94%;
	margin: 0 auto;
	border-radius: 6px;
	
	h4 {
		padding-top: .2rem;
	}
	
	div {
		font-size: 12px;
		margin-top: 2px;
		/*text-indent: .2rem;*/
	}
;
}

.btn-tel {
	display: block;
	width: 100%;
	position: fixed;
	background: #ffa300;
	padding: 12px 0;
	color: #fff;
	/* left: 4%; */
	bottom: 0;
	/*font-size: 20px;*/
}
</style>