<template>
	<div>
		<!--{{ aboutUsArr }}-->
		<ul class="about-box">
			<li class="about-list" v-for="(item, index) in aboutUsArr" :key="index"
                @click="fnGoAboutUserInfo(item)">
				<div style="display: flex;justify-content:space-between;align-items: center;">
					<div class="userHeader-box">
						<img :src="item.headUrl" alt="" class="img-userHeader">
						<div>
							<div class="user-name">{{ item.accountName }}</div>
							<div class="user-info ">
								<span>{{ item.label }}</span>
								<!--<span>年利率：3.9%</span>-->
							</div>
							<div class="color-Gray2 user-work">{{ item.motto }}</div>
						</div>
					</div>
					<van-button class="btn-info" size="mini" >查看详情</van-button>
				</div>
				
			</li>
	
		</ul>

	
	</div>
</template>

<script>
import { customerVisit,getAttendantForPageApi } from "@/assets/js/api";   /*引用 首页 接口*/
export default {
	name: "aboutUs", //关于我们
	data() {
		return {
			userHeader: require("@/assets/img/userHeader.jpg"),
			attendantForm:{
				pageNum:1 ,
				pageSize:10,
				accountName:"" ,//(账号名称)，
				name:"", //(姓名)
				phone:"", //(手机号码)
			},
			aboutUsArr:[]
		};
	},
	methods: {
        /*进入关于详情*/
        fnGoAboutUserInfo(row){
            console.log(row);
            // return
            // this.$router.push({
            //     name: "loanDetails",
            //     params: { "prodArr": this.prodArr }
            // });
            this.$router.push({
                path:'/aboutUsInfo',
                query:{
                    businessAttendantId:row.id,
                    // userInfoObj: JSON.stringify(row),
                }
            })
        },
		/*联系我们*/
		fnGetAttendantForPage(){
			getAttendantForPageApi(this.attendantForm).then(res => {
				console.log(res);
				this.aboutUsArr = res.data.employees;
			}).catch(res => {
				console.log(res);
			});
		},
		
		/*进入以后*/
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


/*1121*/
.about-box{
	//border-radius: 4px;
	background: #fff;
	//width: 92%;
	margin: 0 auto;
	.about-list{
		width: 100%;
		padding: 12px;
		border-bottom: solid 1px #DDDFE3;
		&:last-child{
			border-bottom: 0;
		}
	}
	.img-userHeader{
		height: .5rem;
		width: .5rem;
		border-radius: 50%;
		margin-right: .1rem;
	}
	.user-name{
		margin-bottom: 4px;
		font-size: 16px;
		color: #333;
	}
	.user-info{
		height: 16px;
		line-height: 16px;
		span:first-child{
			border-right: 1px solid #ddd;
			padding-right: 8px;
			margin-right: 10px;
			height: 16px;
		}
	}
	.user-work{
		font-size: 12px;
		margin-top: 2px;
	}
	.userHeader-box{
		//background: #fff;
		//color: #000;
		display: flex;
		align-items: center;
	}
	
	.btn-info{
		border: solid 1px #ffa300;
		border-radius: 20px;
		color: #ffa300;
		padding: 0 10px;
	}
}

</style>