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
                <van-image :src="detailsArr.ioc"  fit="cover"/>
            </div>
            <div class="dHeader-info">
                <h4 class="dHeader">{{detailsArr.name}}</h4>
                <div class="dHeader-good">
                    <span v-for="(good2,index2) in detailsArr.labelList" :key="index2">{{good2.name}}</span>
                </div>
                <div class="dHeader-good2">
                    <span v-for="(basic,basicIndex) in detailsArr.basicInfoList" :key="basicIndex">
                        {{basic.name}}<b v-if="basicIndex == 0">{{basic.nameValue}}</b>
                    </span>
                </div>
            </div>
        </div>

        <!--图表+计算 -->
        <div class="detail-item">
            <ve-ring :data="chartData"
                     :colors="totalColor"
                     :extend="picExtendConfig"
                     :legend-visible="false"
                     :style="ringStyle"
            ></ve-ring>

            <ul class="chart-info2"><li></li><li></li><li></li><li></li></ul>
            <!--手续列表-->
            <ul class="chart-info">
                <li>
                    <div class="loans-num">{{chartsLoans.loansTotal}}</div>
                    <span>贷款总额/万</span>
                </li>
                <li>
                    <div class="loans-num">{{chartsLoans.loansMonthTotal}}</div>
                    <span>月供约/万</span>
                </li>
                <li>
                    <div class="loans-num">{{chartsLoans.loansRatesTotal}}</div>
                    <span>总利息约/万</span>
                </li>
                <li>
                    <div class="loans-num">{{chartsLoans.loansServiceTotal}}</div>
                    <span>手续费(万)</span>
                </li>
            </ul>

            <!--期数-->
            <div class="qs-box">
                <van-button type="default"  v-for="(qsList,index) in detailsArr.qsList" :key="index"
                            @click="checkedQS(qsList,index)"
                            :class="qsArr.qsListCurren == index ?'qsActive':'' ">
                    {{qsList.name}}</van-button>
            </div>

            <!--滑块-->
            <!--{{detailsArr.quotaDo}}-->
            <div  class="detail-slider">
                <van-slider v-model="chartsLoans.loansTotal"  @change="changeTotal($event)"
                            :max="detailsArr.quotaDo.maxQuota"
                            :min="detailsArr.quotaDo.minQuota"
                            :step="detailsArr.quotaDo.step"
                            bar-height="6px"
                            active-color="#ffa300">
                </van-slider>
            </div>

            <div class="dHeader-good">
                    <span v-for="(good,index) in detailsArr.label2List" :key="index">
                        {{good.name}}
                    </span>
            </div>

        </div>

        <!--办理条件-->
        <div class="detail-item">
            <h4 class="Ditem-title">办理条件</h4>
            <div class="Ditem-info" v-for="(item, index) in detailsArr.bltjList" :key="index">
                <b>{{item.name}}:</b>
                {{ item.nameValue}}
            </div>
        </div>

        <!--所需资料-->
        <div class="detail-item">
            <h4 class="Ditem-title">所需资料</h4>
            <div class="Ditem-info"  v-for="(item, index) in detailsArr.sxzlList" :key="index">
                {{item.name}}
            </div>
        </div>

        <!--办理流程-->
        <div class="detail-item">
            <h4 class="Ditem-title">办理流程</h4>
            <div class="Ditem-info"  v-for="(item, index) in detailsArr.bllcList" :key="index">
                {{item.name}}
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
            <div class="Ditem-info" >
                {{detailsArr.mzsmDo.name}}
            </div>
        </div>

        <!--联系我们-->
        <div style="padding-top: 30px">
            <div class="btnFixed-tel" v-if="prodArr.prodType == 5">
                <a :href="'tel:' + detailsArr.contactDo.telephone"  class="btnTel">电话咨询</a>
                <van-button type="primary" class="btnCode" @click="funApplyCodePopup()">立即申请</van-button>
            </div>

            <div v-else class="btn-manager">
                <div class="" >
                    <van-icon name="user-circle-o" class="icon-manger"/>
                    <!--<van-image class="icon-manger"></van-image >-->
                    客户经理
                </div>

                <van-button type="primary" class="btnTel btnCode" @click="funCodePopup()"
                            v-if ="detailsArr.contactDo.qrimg != '' " ><van-icon name="coupon-o" />二维码</van-button>

                <a :href="'tel:' + detailsArr.contactDo.telephone"  class="btnTel">
                    <van-icon name="phone-o" />电话
                </a>

            </div>
        </div>

        <!--立即申请 二维码弹出-->
        <van-popup v-model="ShowCode.ShowCodeApplyPopup"
                   position="bottom"
                   round
                   style="height: 40%;display: flex; align-items: center;justify-content: center;">
            <van-image :src="applyCode" class="detaile-code"></van-image>
        </van-popup>

        <!--二维码弹出-->
        <van-popup v-model="ShowCode.ShowCodePopup"
                   position="bottom"
                   round
                   style="height: 40%;display: flex; align-items: center;justify-content: center;">
            <van-image :src="detailsArr.contactDo.qrimg" class="detaile-code"></van-image>
        </van-popup>

    </div>

</template>

<script>
    import {getAllType , getByProdType,getProdDetail} from '@/assets/js/api'
    import {totalMember_number} from "../../../../insist/src/assets/js/api"; /*引用 接口*/
    export default {
        name: "loanList",
        data() {
            /*图标设置*/
            this.totalColor = ['#1EAAA1','#FF8A7E','#4CCBEB','#ffa300'];//会员总览 潜在会员 自定义的颜色
            this.picExtendConfig = {
                series:{
                    radius: ['80%','50%'],  //大小
                    center: ['50%', '40%'], // 位置
                    label: {   //去掉指引线
                        normal: {
                            position: 'inner',
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                }
            };

            return {
                applyCode:require('@/assets/img/code_apply.jpg'),
                ShowCode:{
                    ShowCodeApplyPopup:false,
                    ShowCodePopup:false,
                },

                /*分类*/
                prodArr:{
                    prodType:'',   //分类
                    prodId:'',     //id
                },

                /*图表样式*/
                ringStyle:{
                    height: '140px',
                    width: '220px',
                },

                /*详情arr*/
                detailsArr:{
                    quotaDo: {
                        maxQuota:'',
                        minQuota:'',
                        step:'',
                    },
                    contactDo:{
                        id:'1',
                        productId:'',
                        qrimg:'',
                        telephone:'',
                    },
	                mzsmDo:{
                    	name:'',
	                },

                },
                // detailsArr:this.GLOBAL.LoanBankInfo.data,

                /*期数数组*/
                qsArr:{
                    qsListCurren:0,
                    qsNum:0,
                },

                /*图表*/
                chartData: {
                    columns: ['name', 'value'],
                    rows: []
                },

                /*图表数据*/
                chartsLoans: {
                    loansTotal:0,  //总金额
                    loansMonthTotal:0,  //月供  总金额/期数
                    loansRatesTotal:0,  //总利息  金额*利率*期数
                    loansServiceTotal:0,  //手续费
                },

            }
        },
        methods: {

            funCodePopup(){
                this.ShowCode.ShowCodePopup = true;
            },

            funApplyCodePopup(){
                this.ShowCode.ShowCodeApplyPopup = true;
            },

            /*获取 数据 接口*/
            getProdDetail(){
                getProdDetail(this.prodArr).then(res =>{
                    console.log(res.data);
                    if(res.status == 'success'){
                        this.detailsArr = res.data;
                        let totalNum = res.data.quotaDo.defaultQuota;
                        console.log(totalNum);
                        console.log(this.detailsArr.qsList[0].nameValue);

                        this.qsArr.qsNum = this.detailsArr.qsList[0].nameValue;  //获取期数

                        this.chartsLoans.loansTotal = totalNum;


                        /*联系方式*/
                        let contactDo = res.data.contactDo;
                        if (!contactDo && typeof(contactDo)!="undefined" && contactDo!=0){
                            /*alert("null");*/
                        }else{
                            this.contactDo = contactDo;
                        }


                        this.getChartVal();
                        this.setChartData();
                    }else{
                        this.detailsArr= '';
                    }
                }).catch(res =>{
                    console.log(res);
                })
            },




            /*值 计算 并 渲染 图表*/
            getChartVal(){
                let loansTotal     = Number(this.chartsLoans.loansTotal)*10000;     //++ 获取总金额
	            let totalQs     = Number(this.qsArr.qsNum);                       //获取总期数 贷款期限
	            let monthRate  = parseFloat(this.detailsArr.basicInfoList[0].nameValue)/100;  //获取利率 贷款利率
	            let loansServiceTotal = this.fomatFloat (Number(this.chartsLoans.loansServiceTotal),2);      //++ 获取 手续费
                console.log(loansServiceTotal);
                let type  = this.detailsArr.basicInfoList[2].nameValue;  //分类


	            console.log(`type：  ${type}`);
	            console.log(`loansTotal：  ${loansTotal}`);
	            console.log(`totalQs：  ${totalQs}`);

                /*1是等额本息还款：*/
                let monthPreLoan = '';     //每月还款金额 月供
                let totalMoney = '';  //还款总额
                let TotalInterest = '';    //还款总利息
                let monthPreLoanEnd = '';   // 除以 10000 以后 返回给图标的 每月还款
                let TotalInterestEnd = '';   // 除以 10000 以后 返回给图标的  总利息

                let that =this;

	            function endNum(monthPreLoan, TotalInterest){
		            monthPreLoanEnd = that.fomatFloat( (monthPreLoan /10000),2 );
		            TotalInterestEnd = that.fomatFloat( (TotalInterest /10000),2);
	            }

                if(type == 1){
                    //每月还款 = (总金额   *  贷款利率  *  Math.pow((1 + 贷款利率), 贷款总期数)) / (Math.pow((1 + 贷款利率), 贷款总期数) - 1);
                    monthPreLoan = (loansTotal * monthRate * Math.pow((1 + monthRate), totalQs))
                        / (Math.pow((1 + monthRate), totalQs) - 1); //每月还款金额
                    totalMoney = monthPreLoan * totalQs;//还款总额
                    TotalInterest = (totalMoney - loansTotal );//还款总利息
                }

	            /*2是等额本金还款*/
	            if(type == 2){
                    monthPreLoan = (loansTotal * monthRate * Math.pow((1 + monthRate), totalQs)) / (Math.pow((1 + monthRate), totalQs) - 1);//每月还款金额
                    totalMoney = monthPreLoan * totalQs;//还款总额
                    TotalInterest = totalMoney - loansTotal;//还款总利息
	            }

	            /*3是等额等息还款：月供=总金额/期数+总金额*利率   ；总利息=总金额*利率*期数*/
	            if(type == 3){
	                console.log(loansTotal);
	                console.log(totalQs);
	                console.log(monthRate);
		            monthPreLoan = loansTotal / totalQs  + loansTotal * monthRate;
		            TotalInterest = loansTotal * monthRate * totalQs;

		            console.log(loansTotal);
		            console.log(monthPreLoan);
		            console.log(TotalInterest);

		            /*endNum(monthPreLoan, TotalInterest);*/
	            }

	            /*4是先息后本还款：月供=总金额*利率  ;总利息=总金额*利率*期数*/
	            if(type == 4){
		            monthPreLoan = loansTotal * monthRate;
		            TotalInterest = loansTotal * monthRate * totalQs;

		            /*endNum(monthPreLoan, TotalInterest);*/
	            }

	            /*5是到期还本还款：月供和总利息显示为0*/
	            if(type == 5){
		            monthPreLoan = 0;
		            TotalInterest = 0;

		            /*endNum(monthPreLoan, TotalInterest);*/
	            }


	            /*6是气球贷还款 */
	            if(type == 6){

                    monthPreLoan = (loansTotal * monthRate * Math.pow((1 + monthRate), totalQs)) / (Math.pow((1 + monthRate), totalQs) - 1);//每月还款金额
		            totalMoney = monthPreLoan * totalQs;//还款总额
		            TotalInterest = totalMoney - loansTotal;//还款总利息
	            }

	            endNum(monthPreLoan, TotalInterest);

	            console.log(`monthPreLoan 每月还款金额：  ${monthPreLoan}`);
	            console.log(`totalMoney 还款总额： ${totalMoney}`);
	            console.log(`TotalInterest还款总利息： ${TotalInterest}`);
	            console.log('monthPreLoanEnd' + monthPreLoanEnd);
	            console.log('TotalInterestEnd'+ TotalInterestEnd);

	            let endTotal = loansTotal/10000;

                this.chartsLoans = {
                    loansTotal:endTotal,  //总金额
                    loansMonthTotal:monthPreLoanEnd,  //月供  总金额/期数
                    loansRatesTotal:TotalInterestEnd,  //总利息  金额*利率*期数
                    loansServiceTotal:loansServiceTotal,  //手续费
                };

            },

            /*图表 渲染*/
            setChartData(){
                let monthPreLoanEnd =  this.chartsLoans.loansMonthTotal;  // 月供
                let TotalInterestEnd =  this.chartsLoans.loansRatesTotal;  //总利息
                let loansServiceTotal =  this.chartsLoans.loansServiceTotal;  //手续费
	            let loansTotal =  this.chartsLoans.loansTotal;  //贷款总额

                 this.chartData.rows = [
                    { name:"月供",value:monthPreLoanEnd },
                    { name:"总利息",value:TotalInterestEnd },
                    { name:"手续费",value:loansServiceTotal },
                    { name:"贷款总额",value:loansTotal },
                ]
            },

            /*期数选择*/
            checkedQS(val,index){
                this.qsArr.qsListCurren = index;
                this.qsArr.qsNum = val.nameValue;

                this.getChartVal();
	            this.setChartData();
            },

            /*修改总金额 步进器*/
            changeTotal(val){
                console.log('changeTotal: '+val);
                this.chartsLoans.loansTotal = val;

	            this.setChartData();
	            this.getChartVal();
            },

	        /*四舍五入保留两位小数*/
	        fomatFloat(x,pos){
		        var f = parseFloat(x);
		        if(isNaN(f)){
			        return false;
		        }
		        f = Math.round(x*Math.pow(10, pos))/Math.pow(10, pos); // pow 幂
		        var s = f.toString();
		        var rs = s.indexOf('.');
		        if(rs < 0){
			        rs = s.length;
			        s += '.';
		        }
		        while(s.length <= rs + pos){
			        s += '0';
		        }
		        return s;
	        },


	        /*四舍五入保留2位小数（若第二位小数为0，则保留一位小数）*/
            /*FnkeepTwoNo(num){
                let res =parseFloat(num);
                if(isNaN(res)){
                	console.log('传递参数错误，请检查');
                	return false
                }
                res = Math.round(num*100) / 100;
                return  res;
            },*/

	        /*保留 小数点后两位*/
	        /*toDecimal2(x) {
		        var f = parseFloat(x);
		        if (isNaN(f)) {
			        return false;
		        }
		        var f = Math.round(x*100)/100;
		        var s = f.toString();
		        var rs = s.indexOf('.');
		        if (rs < 0) {
			        rs = s.length;
			        s += '.';
		        }
		        while (s.length <= rs + 2) {
			        s += '0';
		        }
		        return s;
	        },*/

        },
        created() {

            let prodParms = this.$route.params.prodArr;
            console.log(prodParms);
            if(prodParms){
                let prodArrData = {
                    prodType:prodParms.prodType,   //分类
                    prodId:prodParms.prodId,     //id
                };
                this.prodArr = prodArrData;
                localStorage.setItem('sessionDetail',JSON.stringify(prodArrData));
            }else{
                let sessionDetail =JSON.parse(localStorage.getItem('sessionDetail'));
                this.prodArr = sessionDetail;
            }


            this.getProdDetail();
        },
    }
</script>
