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

            <h3 class="title">节融会员服务介绍</h3>

            <h4><span class="li"></span>个人会员享受权益（收费5999元/年）</h4>
            <div>一、以家庭为主。根据会员情况，定制融资方案。
                <div style="margin-left: 16px;">（信用；抵押皆可，可为家庭做负债重组方案）</div></div>
            <div>二、推荐认识对应方案的银行客户经理。</div>
            <div>三、享受“万4/天”的赎楼配套服务（具体以客户情况为准）。</div>
            <div>四、推荐办理5—50万信用卡；送POS机。</div>
            <div>五、融资跑腿服务/笔（抵押类为一笔，信用类不限制笔数）。</div>

            <h4><span class="li"></span>企业会员享受权益（收费19999元/2年）</h4>
            <div>一、以企业为主。根据会员情况，定制融资方案。
                <div  style="margin-left: 16px;">（个人授信和对公授信皆可，可为企业做负债重组方案）</div>
            </div>
            <div>二、推荐认识对应方案的银行客户经理。</div>
            <div>三、享受“万4/天”的赎楼过桥配套服务（具体以客户情况为准）。</div>
            <div>四、推荐办理5—100万信用卡；送POS机。</div>
            <div>五、融资跑腿服务不限制笔数。</div>

            <h4><span class="li"></span>普通会员享受权益（免费）</h4>
            <div>一、推荐办理5—50万信用卡；送POS机。</div>
            <div>二、对接办理部分银行贷款（带黄色图标的）。</div>

            <div class="thanks">
                <div>鸣谢：赎楼合作资方：深圳市企联小额贷款有限公司</div>
                <div>深圳中诚金服信息科技管理有限公司</div>
                <div>诚邀深圳市正规资方；产品方合作</div>
            </div>


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
	padding: 0 .1rem .1rem;
	background: #fff;
	width: 92%;
	margin: 0 auto;
	border-radius: 6px;
	.title{
        padding-top: 40px;
        text-align: center;
    }
	h4 {
		padding-top: .2rem;
        display: flex;
        align-items: center;
	}

    .li{
        width: 10px;
        height: 10px;
        margin-right: 8px;
        border-radius: 50%;
        background-color: #000000;
        display: block;
    }
	div {
		font-size: 12px;
		margin-top: 2px;
		text-indent: .2rem;
	}
;
}
.thanks{
    text-align: right;
    padding-top: 0.2rem;
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