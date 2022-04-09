<template>
	<div class="main">
		
		<!--银行信息-->
		<div class="detail-item detail-header">
			<div class="dHeader-img">
				<span class="dHeader-tip" v-if="detailsArr.prodType == 1">银行信贷</span>
				<span class="dHeader-tip" v-else-if="detailsArr.prodType == 2">机构信贷</span>
				<span class="dHeader-tip" v-else-if="detailsArr.prodType == 3">小额贷款</span>
				<span class="dHeader-tip" v-else-if="detailsArr.prodType == 4">企业贷款</span>
				<span class="dHeader-tip" v-else-if="detailsArr.prodType == 5">抵押贷款</span>
				<span class="dHeader-tip" v-else>线上急融</span>
				<van-image :src="detailsArr.ioc" fit="cover" />
			</div>
			<div class="dHeader-info">
				<h4 class="dHeader">{{ detailsArr.name }}</h4>
				<div class="dHeader-good">
                    <span v-for="(good2,index2) in detailsArr.labelList" :key="index2">
                        {{ good2.name }}
                    </span>
				</div>
				<div class="dHeader-good2">
                    <span v-for="(basic,basicIndex) in detailsArr.basicInfoList" :key="basicIndex">
                        {{ basic.name }}
                    </span>
				</div>
			</div>
		</div>
		
		<!--图表+计算-->
		<div class="detail-item">
			<ve-ring :data="chartData"
			         :colors="totalColor"
			         :extend="picExtendConfig"
			         :legend-visible="false"
			         :style="ringStyle"
			></ve-ring>
			
			<ul class="chart-info2">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<!--手续列表-->
			<ul class="chart-info">
				<li>
					<div class="loans-num">{{ chartsLoans.loansTotal }}</div>
					<span>贷款总额/万</span>
				</li>
				<li>
					<div class="loans-num">{{ chartsLoans.loansMonthTotal }}</div>
					<span>月供约/万</span>
				</li>
				<li>
					<div class="loans-num">{{ chartsLoans.loansRatesTotal }}</div>
					<span>总利息约/万</span>
				</li>
				<li>
					<div class="loans-num">{{ chartsLoans.loansServiceTotal }}</div>
					<span>手续费(万)</span>
				</li>
			</ul>
			
			<!--期数-->
			<div class="qs-box">
				<van-button type="default" v-for="(qsList,index) in detailsArr.qsList" :key="index"
				            @click="checkedQS(qsList,index)"
				            :class="qsArr.qsListCurren == index ?'qsActive':'' ">
					{{ qsList.name }}
				</van-button>
			</div>
			
			<!--滑块-->
			<!--{{detailsArr.quotaDo}}-->
			<div class="detail-slider">
				<van-slider v-model="chartsLoans.loansTotal" @change="changeTotal($event)"
				            :max="detailsArr.quotaDo.maxQuota"
				            :min="detailsArr.quotaDo.minQuota"
				            :step="detailsArr.quotaDo.step"
				            bar-height="6px"
				            active-color="#ffa300">
				</van-slider>
			</div>
			
			<div class="dHeader-good">
                    <span v-for="(good,index) in detailsArr.label2List" :key="index">
                        {{ good.name }}
                    </span>
			</div>
		
		</div>
		
		<!--办理条件-->
		<div class="detail-item">
			<h4 class="Ditem-title">办理条件</h4>
			<div class="Ditem-info" v-for="(item, index) in detailsArr.bltjList" :key="index">
				<b>{{ item.name }}:</b>
				{{ item.nameValue }}
			</div>
		</div>
		
		<!--所需资料-->
		<div class="detail-item">
			<h4 class="Ditem-title">所需资料</h4>
			<div class="Ditem-info" v-for="(item, index) in detailsArr.sxzlList" :key="index">
				{{ item.name }}
			</div>
		</div>
		
		<!--办理流程-->
		<div class="detail-item">
			<h4 class="Ditem-title">办理流程</h4>
			<div class="Ditem-info" v-for="(item, index) in detailsArr.bllcList" :key="index">
				{{ item.name }}
			</div>
		</div>
		
		<!--其他信息-->
		<!--<div class="detail-item">
			 <h4 class="Ditem-title">其他信息</h4>
			 <div class="Ditem-info"  v-for="(item, index) in detailsArr.ohterInfoList" :key="index">
				  <b>{{item.name}}:</b>
				  {{item.nameValue}}
			 </div>
		</div>-->
		
		<!--征信要求-->
		<!--<div class="detail-item" >
			 <h4 class="Ditem-title">征信要求</h4>
			 <div class="Ditem-info"  v-for="(item, index) in detailsArr.zxyqList" :key="index">
				  <b>{{item.name}}:</b>
				  {{item.nameValue}}
			 </div>
		</div>-->
		
		<!--免责声明-->
		<div class="detail-item">
			<h4 class="Ditem-title">免责声明</h4>
			<div class="Ditem-info" v-for="(item, index) in detailsArr.mzsmList" :key="index">
				{{ item.name }}
			</div>
		</div>
		
		<!--联系我们-->
		<div style="padding-top: 30px">
			<div class="btnFixed-tel" v-if="prodArr.prodType == 5">
				<a :href="'tel:' + contactDo.telephone" class="btnTel">电话咨询</a>
				<van-button type="primary" class="btnCode">立即申请</van-button>
			</div>
			
			<div v-else class="btn-manager">
				<div class="">
					<van-icon name="user-circle-o" class="icon-manger" />
					<!--<van-image class="icon-manger"></van-image >-->
					客户经理
				</div>
				
				<van-button type="primary" class="btnTel btnCode" @click="funCodePopup"
				            v-if="contactDo.qrimg != '' ">
					<van-icon name="coupon-o" />
					二维码
				</van-button>
				
				<a :href="'tel:' + contactDo.telephone" class="btnTel">
					<van-icon name="phone-o" />
					电话
				</a>
			
			</div>
		</div>
		
		<!--二维码弹出-->
		<van-popup v-model="ShowCodePopup"
		           position="bottom"
		           round
		           style="height: 40%;display: flex; align-items: center;justify-content: center;">
			<van-image :src="contactDo.qrimg" class="detaile-code"></van-image>
		</van-popup>
	
	</div>
</template>

<script>
import { getAllType, getByProdType, getProdDetail } from "@/assets/js/api";
import { totalMember_number } from "../../../../insist/src/assets/js/api"; /*引用 接口*/
export default {
	name: "loanList",
	data() {
		/*图标设置*/
		this.totalColor = ["#1EAAA1", "#FF8A7E", "#4CCBEB", "#ffa300"];//会员总览 潜在会员 自定义的颜色
		this.picExtendConfig = {
			series: {
				radius: ["80%", "50%"],  //大小
				center: ["50%", "40%"], // 位置
				label: {   //去掉指引线
					normal: {
						position: "inner",
						show: false
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				}
			}
		};
		
		return {
			ShowCodePopup: false,
			// 联系方式
			contactDo: [
				{
					id: "",
					productId: "",
					qrimg: "",
					telephone: "1768882946xx"
				}
			],
			
			/*分类*/
			prodArr: {
				prodType: "",   //分类
				prodId: ""     //id
			},
			
			/*图表样式*/
			ringStyle: {
				height: "140px",
				width: "220px"
			},
			
			/*详情arr*/
			detailsArr: [],
			// detailsArr:this.GLOBAL.LoanBankInfo.data,
			
			
			/*期数数组*/
			qsArr: {
				qsListCurren: 0,
				qsNum: 0
			},
			
			/*图表*/
			chartData: {
				columns: ["name", "value"],
				rows: []
			},
			
			/*图表数据*/
			chartsLoans: {
				loansTotal: 0,  //总金额
				loansMonthTotal: 0,  //月供  总金额/期数
				loansRatesTotal: 0,  //总利息  金额*利率*期数
				loansServiceTotal: 0  //手续费
			}
			
			
		};
	},
	methods: {
		
		funCodePopup() {
			this.ShowCodePopup = true;
		},
		
		/*获取 数据 接口*/
		getProdDetail() {
			getProdDetail(this.prodArr).then(res => {
				console.log(res.data);
				if (res.status == "success") {
					this.detailsArr = res.data;
					let totalNum = res.data.quotaDo.defaultQuota;
					this.qsArr.qsNum = this.detailsArr.qsList[0].nameValue;  //获取期数
					this.chartsLoans.loansTotal = totalNum;
					
					
					/*联系方式*/
					let contactDo = res.data.contactDo;
					if (!contactDo && typeof (contactDo) != "undefined" && contactDo != 0) {
						/*alert("null");*/
					} else {
						this.contactDo = contactDo;
					}
					
					this.getChartVal();
				} else {
					this.detailsArr = "";
				}
			}).catch(res => {
				console.log(res);
			});
		},
		
		
		/*值 计算 并 渲染 图表*/
		getChartVal() {
			
			let loansTotal = Number(this.chartsLoans.loansTotal);     //++ 获取总金额
			let totalQs = Number(this.qsArr.qsNum);                       //获取总期数
			
			if (totalQs == NaN) {
				totalQs = 0;
				console.log(totalQs());
			}
			let interestRate = parseFloat(this.detailsArr.basicInfoList[0].nameValue);  //获取利率
			
			let loansMonthTotal = 0;
			if (loansTotal == 0 && totalQs == 0) {
				loansMonthTotal = 0;
			} else if (totalQs == 0) {
				loansMonthTotal = 0;
			} else {
				loansMonthTotal = this.toDecimal2(Number(loansTotal / totalQs));     //++ 获取月供 = 总金额/期数
			}
			
			let loansRatesTotal = this.toDecimal2(Number(loansTotal * (interestRate / 100) * totalQs));  //++ 获取总利息 = 金额*利率*期数
			let loansServiceTotal = this.toDecimal2(Number(this.chartsLoans.loansServiceTotal));      //++ 获取 手续费
			console.log("loansTotal 获取总金额:" + loansTotal);
			console.log("totalQs：获取总期数:" + totalQs);
			console.log("interestRate 获取利率:" + interestRate);
			console.log("loansMonthTotal 获取月供:" + loansMonthTotal);
			console.log("loansRatesTotal 获取总利息:" + loansRatesTotal);
			this.chartsLoans = {
				loansTotal: loansTotal,  //总金额
				loansMonthTotal: loansMonthTotal,  //月供  总金额/期数
				loansRatesTotal: loansRatesTotal,  //总利息  金额*利率*期数
				loansServiceTotal: loansServiceTotal  //手续费
			};
		},
		
		/*图表 渲染*/
		setChartData() {
			let loansTotal = this.chartsLoans.loansTotal;
			let loansMonthTotal = this.chartsLoans.loansMonthTotal;
			let loansRatesTotal = this.chartsLoans.loansRatesTotal;
			let loansServiceTotal = this.chartsLoans.loansServiceTotal;
			this.chartData.rows = [
				{ name: "月供", value: loansMonthTotal },
				{ name: "总利息", value: loansRatesTotal },
				{ name: "手续费", value: loansServiceTotal },
				{ name: "贷款总额", value: loansTotal }
			];
		},
		
		/*期数选择*/
		checkedQS(val, index) {
			this.qsArr.qsListCurren = index;
			this.qsArr.qsNum = val.nameValue;
			
			this.setChartData();
			this.getChartVal();
		},
		
		/*修改总金额 步进器*/
		changeTotal(val) {
			console.log("changeTotal: " + val);
			this.chartsLoans.loansTotal = val;
			
			this.setChartData();
			this.getChartVal();
		},
		
		/*转小数点后两位*/
		toDecimal2(x) {
			var f = parseFloat(x);
			if (isNaN(f)) {
				return false;
			}
			var f = Math.round(x * 100) / 100;
			var s = f.toString();
			var rs = s.indexOf(".");
			if (rs < 0) {
				rs = s.length;
				s += ".";
			}
			while (s.length <= rs + 2) {
				s += "0";
			}
			return s;
		}
	},
	created() {
		
		let prodParms = this.$route.params.prodArr;
		console.log(prodParms);
		if (prodParms) {
			let prodArrData = {
				prodType: prodParms.prodType,   //分类
				prodId: prodParms.prodId     //id
			};
			this.prodArr = prodArrData;
			localStorage.setItem("sessionDetail", JSON.stringify(prodArrData));
		} else {
			let sessionDetail = JSON.parse(localStorage.getItem("sessionDetail"));
			this.prodArr = sessionDetail;
		}
		
		this.getProdDetail();
		
		this.setChartData();
	}
};
</script>
