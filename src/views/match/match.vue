<template>
	<div class="match-box">
		<matchGuide v-if="showState.guideShow" @showMatch="showMatch"></matchGuide>
		
		<div v-if="showState.matchShow">
			
			<!--顶部三大步骤导航-->
			<van-row class="headerInfo-nav">
				<van-col span="8" v-for="(item,index) in btnCreditArr" :key="item.id">
					<van-button :disabled="item.disabled" @click="btnShowCredit(item)"
					            :class="item.id == headerInfoIndex ? 'activeInfoNav' : ' ' ">{{ item.name }}
					</van-button>
				</van-col>
			</van-row>
			
			
			<!-- 一、 基本信息-->
			<div v-if="showStatePage.basicShow">
				<!--基本信息里 信用贷款 放低贷款 车抵贷款等三大按钮-->
				<div class="info-item basic-nav">
					<van-button @click="btnTabBasic(item)" v-for="(item,index) in BasicTabArr" :key="item.id"
					            :class="item.id == tabBasicIndex ? 'activeTabBasic' : ' ' ">{{ item.name }}
					</van-button>
				</div>
				
				<basicInfo :userChecked="userChecked" :userChecked2="userChecked2"
				           @faMethods="faMethods(arguments)"
				           :tabBasicIndex="tabBasicIndex"></basicInfo>
			</div>
			
			<!--二、 资产信息 -->
			<div v-else-if="showStatePage.assetsShow">
				<assetsInfo :userChecked="userChecked" :userChecked2="userChecked2"
				            @faMethods="faMethods(arguments)"
				            :tabBasicIndex="tabBasicIndex"></assetsInfo>
			</div>
			
			<!--三、征信信息-->
			<div v-else>
				<creditInfo :userChecked="userChecked" :userChecked2="userChecked2"
				            @faMethods="faMethods(arguments)"
				            :tabBasicIndex="tabBasicIndex"></creditInfo>
			</div>
		
		</div>
		
		<van-overlay :show="matchShowRes.matchRightShow">
			<div class="wrapper-match" @click.stop>
				<div class="wrapper-Content">
					<div class="wrapper-name">正在生成匹配报告</div>
					<van-loading type="spinner" color="#ffa300" size="60px" />
				</div>
			</div>
		</van-overlay>
		
		<van-popup v-model="matchShowRes.matchErrShow"
		           position="bottom"
		           class="match-errBox"
		           :style="{ height: '70%' }"
		           :close-on-click-overlay="false">
			<div class="match-errTip">没有符合您的匹配结果</div>
			<van-button type="default" class="btn-matchErr" @click="resStartMatch">重新匹配</van-button>
		</van-popup>
	
	</div>
</template>

<script>
import { userInfo } from "@/assets/js/userInfo"; /*引用 用户信息 */
import { getCondiProductList } from "@/assets/js/api"; /*引用 接口*/
import { getAllType } from "@/assets/js/api"; /*引用 接口*/

import matchGuide from "@/components/matchGuide/matchGuide";  //匹配进入页
import basicInfo from "@/views/match/basicInfo"; //基本信息
import assetsInfo from "@/views/match/assetsInfo"; //资产信息
import creditInfo from "@/views/match/creditInfo"; //征信信息

// import matchResult from '@/views/match/matchResult' //征信信息
// import matchSon from '@/views/match/matchSon'

export default {
	inject: ["reLoad"],
	name: "match",
	data() {
		return {
			matchShowRes: {
				matchErrShow: false,  //失败
				matchRightShow: false  //成功
			},
			// matchResArr:[],  //匹配历史记录 数组
			showState: {    //显影状态
				guideShow: true,   //匹配进入 引导页
				matchShow: false,  //匹配筛选页
				matchResult: false  //匹配结果筛选页
			},
			
			minNum: "1",
			loadingShow: false,
			headerInfoIndex: 1,  //头部 当前
			// basicTabActive: 0, //第一部分 tab显隐
			tabBasicIndex: 1, //基本信息 三大导航  tab显隐
			activeRadio: "activeRadio",  //选中的radio样式
			
			/*三大步骤导航 按钮*/
			btnCreditArr: [
				{ id: 1, name: "基本信息", disabled: true, type: "basicInfo" },
				{ id: 2, name: "资产信息", disabled: true, type: "assetsInfo" },
				{ id: 3, name: "征信信息", disabled: true, type: "creditInfo" }
			],
			
			/*三大步骤导航页面 对应显隐*/
			showStatePage: {
				basicShow: true,
				assetsShow: false,
				creditShow: false
			},
			
			/*基本信息 tab*/
			BasicTabArr: [
				{ id: 1, name: "信用贷款", type: "tabCredit" },
				{ id: 2, name: "抵押贷款", type: "tabHouse" },
				// { id: 3, name: "车抵贷款", type: "tabCar" }
			],
			
			/*三大 next 下一步 导航 按钮 对应显影*/
			showNextBtn: {
				basicNext: false,
				assetsNext: false,
				creditNext: false
			},
			
			/*所有单选 数组*/
			userInfo: userInfo,
			
			userChecked2: {
				sb: -1,  //有无社保
				gjj: -1,  //有无公积金
				clgsdq: -1,  //车辆归属地区
				fcxx: -1,  //房产信息
				fczt: -1,  //房产状态
				clzt: -1,  //车辆状态
				bxbd: -1  //保险保单
			},
			
			/*用户选中*/
			userChecked: {
				zylx: -1,  //职业类型
				
				// zonge:0,         //总额
				total_financing: 0,  //总额
				sfyssqydd: -1,         //是否有上市企业订单
				sfgxjsqy: -1,         //是否高新技术企业
				age: 18,          // 1、年龄
				hyzk: -1,         // 3、婚姻状况
				hj: -1,           // 4、户籍
				dwxz: -1,         // 5、单位性质
				gzffxs: -1,       // 6、工资发放形式
				pjgz: -1,         // 7、平均工资
				bdwgzsc: -1,      // 8、本单位工作时长
				sbjs: -1,         // 9、社保基数
				sb_jnsc: -1,      // 10、社保缴纳时长
				sb_xdwjnsc: -1,   // 11、社保现单位缴纳时长
				gjjjs: -1,        // 12、公积金基数
				gjj_jnsc: -1,     // 13、公积金缴纳时长
				gjj_xdwjnsc: -1,  // 14、公积金现单位缴纳时长
				yyzznx: -1,       // 15、营业执照年限
				dwsfkc: -1,       // 16、单位是否考察
				dgls: -1,         // 17、对公流水
				gskpje: -1,       // 18、公司开票金额
				gsnsje: -1,       // 19、公司纳税金额
				fclx: -1,         // 20、房产类型
				ajz: -1,          // 21、按揭中（月供时间）
				ajjq: -1,         // 22、按揭结清（结清时间）
				qkf: -1,          // 23、全款房（过户时间）
				fl: -1,           // 24、房龄
                zzdycs: -1,           // 24、深圳住宅抵押成数
				ajc: -1,          // 25、按揭车（按揭时间）
				qkc: -1,          // 26、全款车（按揭结清或过户时间）
				clsyc: -1,        // 27、车辆所有权
				clxz: -1,         // 28、车辆性质
				clczsj: -1,       // 29、车辆持证时间
				clgsd: -1,        // 30、车辆归属地
				cl: -1,           // 31、车龄
				jqxsyyxq: -1,     // 32、交强险剩余有效期
				xsgls: -1,        // 33、行驶公里数
				syxsyyxq: -1,     // 34、商业险剩余有效期
				bxlx: -1,         // 35、保险类型
				bxjnfs: -1,       // 36、保险缴纳方式
				bxjfsj: -1,       // 37、保险缴费时间
				ygyncxcs: -1,     // 38、一个月内查询次数
				lgyncxcs: -1,     // 39、两个月内查询次数
				sgyncxcs: -1,     // 40、三个月内查询次数
				liugyncxcs: -1,   // 41、六个月内查询次数
				segyncxcs: -1,    // 42、十二个月内查询次数
				dqxebs: -1,       // 43、当前小额笔数
				dqxfjrbs: -1,     // 44、当前消费金融笔数
				sfczyc: -1,       // 45、贷款/信用卡是否存在止付；呆账；关注等异常
				dqyqed: -1,       // 46、当前逾期额度
				bnn_wyq: -1,      // 47、近半年内有无逾期
				bnn_yqygycs: -1,  // 48、近半年内逾期一个月次数
				bnn_yqlgycs: -1,  // 49、近半年内逾期两个月次数
				bnn_yqsgycs: -1,  // 50、近半年内逾期三个月次数
				bnn_yqsigycs: -1, // 51、近半年内逾期四个月次数
				ynn_wyq: -1,      // 52、近一年内有无逾期
				ynn_yqygycs: -1,  // 53、近一年内逾期一个月次数
				ynn_yqlgycs: -1,  // 54、近一年内逾期二个月次数
				ynn_yqsgycs: -1,  // 55、近一年内逾期三个月次数
				ynn_yqsigycs: -1, // 56、近一年内逾期四个月次数
				lnn_wyq: -1,      // 57、近两年内有无逾期
				lnn_yqygycs: -1,  // 58、近两年内逾期一个月次数
				lnn_yqlgycs: -1,  // 59、近两年内逾期二个月次数
				lnn_yqsgycs: -1,  // 60、近两年内逾期三个月次数
				lnn_yqsigycs: -1, // 61、近两年内逾期四个月次数
				sfsygwld: -1,     // 62、是否使用过微粒贷
				loan_type: 1,     //63、信用三大分类
				
				staffNo: "",
				staffName: ""
			}
		};
	},
	methods: {
		// 失败后去重新匹配
		resStartMatch() {
			this.reLoad();
			// window.location.reload();
			// this.showStatePage = {
			//     basicShow: true,
			//     assetsShow: false,
			//     creditShow: false,
			// };
			//
			// this.matchShowRes.matchErrShow = false;
			// this.showState = {    //显影状态
			//     guideShow: true,   //匹配进入 引导页
			//     matchShow: false,  //匹配筛选页
			// };
		},
		
		faMethods(val) {
			console.log(val);
			console.log(val[1]);
			this.changeShowState(val[1]);
		},
		
		/*显影*/
		showMatch() {
			this.showState = {    //显影状态
				guideShow: false,   //引导页
				matchShow: true,  //帅选页
				matchResult: false   //引导页
			};
		},
		
		/*获取 数据 接口 匹配结果  提交 */
		getCondiProductList2() {
			console.log(this.userChecked.fl);
			if (this.userChecked.fl == 0) {
				this.userChecked.fl = -1;
			}
			console.log(this.userChecked.fl);
			this.matchShowRes.matchRightShow = true;
			getCondiProductList(this.userChecked).then(res => {
				this.matchShowRes.matchRightShow = false;
				
				// 选中的状态
				let resCheckedMatch = {
					loan_type: this.userChecked.loan_type,
					zylx: this.userChecked.zylx
				};
				console.log(resCheckedMatch);
				if (res.status == "success") {
					this.matchShowRes.matchErrShow = true;
					console.log(res.data[0]);
					let historyId = res.data[0].historyId;
					console.log(historyId);
					localStorage.setItem("historyId", historyId);
					this.$router.push({
						name: "matchResult",//跳转到新界面，路由变化
						params: { "resCheckedMatch": resCheckedMatch }
					});
				}
				if (res.status == "fail") {
					this.matchShowRes.matchErrShow = true;
				}
				
			}).catch(res => {
				console.log(res);
			});
		},
		
		/*三大信用状态 点击显隐*/
		btnShowCredit(val) {
			console.log(val);
			this.headerInfoIndex = val.id;
			this.changeShowState(val.type);
		},
		
		/* 基本信息 三大导航 tab */
		btnTabBasic(val) {
			console.log(val);
			console.log(this.userChecked.zylx);
			this.userChecked.zylx = -1;
			this.userChecked2.sb = -1;
			this.userChecked2.gjj = -1;
			
			this.tabBasicIndex = val.id;
			this.userChecked.loan_type = val.id;
		},
		
		/*顶部 导航  显隐状态 */
		changeShowState(type) {
			// basicInfo,assetsInfo,creditInfo
			if (type == "basicInfo") {   //基本信息
				this.showStatePage = {
					basicShow: true,
					assetsShow: false,
					creditShow: false
				};
				this.headerInfoIndex = 1;
				this.btnCreditArr[0].disabled = true;
			}
			
			if (type == "assetsInfo") {   //资产信息
				
				/*let resCheckedMatch={
					 loan_type :this.userChecked.loan_type,
					 zylx:this.userChecked2.zylx,
				}
				this.$router.push({
					 name: "matchResult",//跳转到新界面，路由变化
					 params:{'resCheckedMatch':resCheckedMatch},
				});

				return false*/
				
				if (this.userChecked.zylx == -1) {
					this.$toast("职业类型必选！");
				} else {
					this.showStatePage = {
						basicShow: false,
						assetsShow: true,
						creditShow: false
					};
					this.headerInfoIndex = 2;
					this.showStatePage.assetsShow = true;
					this.btnCreditArr[0].disabled = false;
					this.btnCreditArr[1].disabled = true;
				}
			}
			
			if (type == "creditInfo") {   /*征信信息*/
				this.showStatePage = {
					basicShow: false,
					assetsShow: false,
					creditShow: true
				};
				this.headerInfoIndex = 3;
				this.showStatePage.assetsShow = false;
				this.showStatePage.creditShow = true;
				this.btnCreditArr[0].disabled = false;
				this.btnCreditArr[1].disabled = false;
				this.btnCreditArr[2].disabled = true;
			}
			
			if (type == "submit") {
				// console.log(this.userChecked);
				this.getCondiProductList2();
			}
			
		}
		
	},
	
	
	created() {
		/*console.log(this.userInfo);*/
		//1、选中后又取消 怎么清空
		//2、没选与选 怎么下一步按钮
		const ls = new this.GLOBAL.FnStorage();
		const nickname = ls.getItem("nickname");
		const openid = ls.getItem("openid2");
		
		// let nickname = localStorage.getItem('nickname');
		// let openid = localStorage.getItem('openid');
		
		this.userChecked.staffNo = openid || "oLbgO1Qu4uJHnyqDj245KanmDre4";
		this.userChecked.staffName = nickname || "木子";
		
	},
	
	components: {
		matchGuide,
		assetsInfo,
		creditInfo,
		basicInfo
		
		// matchResult,
		// matchSon,
	}
};
</script>

<style lang="scss">
@import "@/assets/css/match.scss";
</style>