<template>
	<div class="loan-main main">
<!--		{{ navArr }}-->
		<van-tabs v-model="activeTab" @click="changeTab" animated type="card" id="loanTabs">
			<van-tab v-for="(item,index) in navArr" :key="index" :title="item.label" class="loan-tab" :name="item.value">
				
				<van-row v-if="loanArr.length == 0">
					<van-col>暂无数据</van-col>
				</van-row>
				<!--                <van-row gutter="12" v-else>-->
				<van-row gutter="12">
					<van-col span="8" v-for="(item,index) in loanArr" :key="index">
						<div class="fire-list" @click="goLoanDetails(item)">
							<van-image :src="item.ioc" alt="" class="fire-img"></van-image>
							<div class="fire-title">{{ item.name | cutOutStr }}</div>
							<div class="fire-month fire-subtitle">{{ item.label2List[0].name || "" }}</div>
							<div class="fire-month">月利息{{ item.basicInfoList[0].nameValue || "" }}</div>
							<div class="fire-month fire-quoto">额度最高{{ item.quotaDo.maxQuota || "" }}万</div>
							<van-button type="default" size="mini" class="btnLook-fire">查看</van-button>
						</div>
					</van-col>
				</van-row>
			
			</van-tab>
		</van-tabs>
	
	</div>
</template>

<script>

import { getAllType, getByProdType, getModelTypeApi } from "@/assets/js/api"; /*引用  接口*/
export default {
	name: "loanList",
	data() {
		return {
			activeTab: "1",
			
			/*swiper:{
				 swiperWid:'',
				 swiperHei:'50',
			},*/
			
			/*导航*/
			navArr: [
				// 1.银行信贷，2.机构信贷，3.小额贷款，4.企业贷款，5.抵押贷款，6.线上急融
				// { id: "1", name: "银行信贷" },
				// { id: "2", name: "机构信贷" },
				// { id: "4", name: "企业贷款" },
				// { id: "5", name: "抵押贷款" },
				// { id: "6", name: "线上急融" }
			],
			
			/*传详情页值*/
			prodArr: {
				prodType: 1,   //分类
				prodId: 0     //id
			},
			
			
			/*热门贷款*/
			loanArr: []
			// loanArr:this.GLOBAL.LoanDetailsArr.data,
			
		};
	},
	methods: {
        fnGetModelType(){
            getModelTypeApi({
                model:'loanType'
            }).then( res => {
                console.log(res);
                if(res.status === 'success'){
                    this.navArr = res.data;
                }
            })
        },
		/*获取 数据 接口*/
		getByProdType() {
			getByProdType({
				prodType: this.prodArr.prodType
			}).then(res => {
				// console.log(res.data[0]);
				if (res.status == "success") {
					this.loanArr = res.data;
				} else {
					this.loanArr = "";
				}
			}).catch(res => {
				console.log(res);
			});
		},
		
		
		/*tab 切换*/
		changeTab(index) {
			console.log(index);
			
			this.prodArr.prodType = index;
			this.loanArr = [];
			this.getByProdType();
		},
		
		/*获取屏幕宽度 然后传给swiper*/
		/*getClientWidth(){
			 let clientWidth = document.body.clientWidth;
			 let swiperWid = clientWidth /4 + clientWidth / 6;
			 this.swiper.swiperWid = swiperWid;
		},*/
		
		/*去贷款详情页*/
		goLoanDetails(item) {
			let prodId = item.basicInfoList[0].productId;
			this.prodArr.prodId = prodId;
			
			console.log(this.prodArr);
			
			// return false
			
			this.$router.push({
				name: "loanDetails",
				params: { "prodArr": this.prodArr }
			});
		}
	},
	
	mounted() {
		this.$router.afterEach((to, from, next) => {
			window.scrollTo(0, 0);
		});
	},
	
	created() {
        this.fnGetModelType();
		// this.getClientWidth();
		// let indexLoan = this.$route.params.indexLoan;
		// console.log(indexLoan);
		
		// if(indexLoan){
		//     this.activeTab = 5;
		//     this.prodArr.prodType = 6;
		//     console.log( this.prodArr.prodType)
		// }
		
		let loanProdType = localStorage.getItem("loanProdType");
		
		if (loanProdType) {
			console.log(loanProdType);
			this.activeTab = loanProdType;
			this.prodArr.prodType = loanProdType;
		}
		
		this.getByProdType();  //获取分类
	},
	
	
	/* beforeRouteEnter (to, from, next) {
		  // 导航离开该组件的对应路由时调用
		  // 可以访问组件实例 `this`
		  console.log(to);
		  console.log(from);

		  next(vm=>{
				if(from.fullPath == '/index'){
					 vm.prodArr = {
						  prodType : 6
					 };
					 vm.activeTab = 5;
					 console.log(vm.prodArr.prodType);
				}

		  })

	 },*/
	watch: {
		"$route"(to, from) {
			// do your want
			console.log(to);
		},
		immediate: true
	}
};
</script>

