<template>
    <div class="main">

        <!--银行信息-->
        <!--<div class="detail-item detail-header">
            <div class="dHeader-img">
                <span class="dHeader-tip" v-if="detailsArr.id == 1">银行信贷</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 2">机构信贷</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 3">小额贷款</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 4">企业贷款</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 5">抵押贷款</span>
                <span class="dHeader-tip" v-else>线上急融</span>
                <van-image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/029a2245173731f649a7fea19c7ff2f7_121_121.jpg"  fit="cover"/>
            </div>
            <div class="dHeader-info">
                <h4 class="dHeader">{{detailsArr.name}}</h4>
                <div class="dHeader-good">
                    <span v-for="(good2,index2) in detailsArr.label2List" :key="index2">
                        {{good2.name}}
                    </span>
                </div>
                <div class="dHeader-good2">
                    <span v-for="(good,index) in detailsArr.labelList" :key="index">
                        {{good.name}}
                    </span>
                </div>
            </div>
        </div>-->

        <!--变换-->
        <!--<div class="detail-item detail-header">

            <div>
                 <span v-for="(qsList,index) in detailsArr.qsList" :key="index">
                    {{qsList.name}}
                </span>
            </div>
        </div>-->

        <!--办理条件-->
        <div class="detail-item" v-show="detailsArr.bltjList.length > 0">
            <h4 class="Ditem-title">办理条件</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.bltjList[0].name}}</b>
                {{ detailsArr.bltjList[0].nameValue}}
            </div>
        </div>

        <!--所需资料-->
        <div class="detail-item" v-show="detailsArr.sxzlList.length > 0">
            <h4 class="Ditem-title">所需资料</h4>
            <div class="Ditem-info">
                {{detailsArr.sxzlList[0].name}}
            </div>
        </div>

        <!--办理流程-->
        <div class="detail-item" v-show="detailsArr.bllcList.length > 0">
            <h4 class="Ditem-title">办理流程</h4>
            <div class="Ditem-info">
                {{detailsArr.bllcList[0].name}}
            </div>
        </div>

        <!--其他信息-->
        <div class="detail-item" v-show="detailsArr.ohterInfoList.length > 0">
            <h4 class="Ditem-title">其他信息</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.ohterInfoList[0].name}}</b>
                {{detailsArr.ohterInfoList[0].nameValue}}
            </div>
        </div>

        <!--征信要求-->
        <div class="detail-item" v-show="detailsArr.zxyqList.length > 0">
            <h4 class="Ditem-title">征信要求</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.zxyqList[0].name}}</b>
                {{detailsArr.zxyqList[0].nameValue}}
            </div>
        </div>

        <!--免责声明-->
        <div class="detail-item" v-show="detailsArr.mzsmList.length > 0">
            <h4 class="Ditem-title">免责声明</h4>
            <div class="Ditem-info">
                {{detailsArr.mzsmList[0].name}}
            </div>
        </div>


        <!--图表+计算-->
        <div class="detail-item" style="display: block;">
            <ve-ring :data="chartData"
                     :colors="totalColor"
                     :extend="picExtendConfig"
                     :legend-visible="false"
                     :style="ringStyle"
            ></ve-ring>

            <ul class="">
                <li>总：{{chartsLoans.loansTotal}}</li>
                <li>月：{{chartsLoans.loansMonthTotal}}</li>
                <li>利：{{chartsLoans.loansRatesTotal}}</li>
                <li>续：{{chartsLoans.loansServiceTotal}}</li>
            </ul>

            <div class="qs-box">
        <span v-for="(qsList,index) in detailsArr.qsList" :key="index" @click="checkedQS(qsList,index)"
              :class="qsArr.qsListCurren == index ?'qsActive':'' ">
            {{qsList.name}}
        </span>
            </div>


            <div style="margin-top: 20px">
                <van-slider v-model="chartsLoans.loansTotal"  @change="changeTotal($event)"
                            :max="sliderArr.max"
                            :min="sliderArr.min"
                            :step="sliderArr.step"
                            bar-height="6px"
                            active-color="#ffa300">
                </van-slider>
            </div>

        </div>

    </div>
</template>

<script>
    import {getAllType , getByProdType,getProdDetail} from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "loanList",
        data() {
            /*图标设置*/
            this.totalColor = ['#1EAAA1','#FF8A7E','#ffa300','#4CCBEB'];//会员总览 潜在会员 自定义的颜色
            this.picExtendConfig = {
                series:{
                    radius: ['70%','50%'],  //大小
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

                /*分类*/
                prodArr:{
                    prodType:0,   //分类
                    prodId:1,     //id
                },

                /*图表样式*/
                ringStyle:{
                    height: '220px',
                    width: '240px',
                },

                /*详情arr*/
                // detailsArr:[],
                detailsArr:this.GLOBAL.LoanBankInfo.data,

                /*滑块*/
                sliderArr:{
                    min:1,
                    max:200,
                    step:1,
                },

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
            /*获取 数据 接口*/
            getProdDetail(){
                getProdDetail(this.prodArr).then(res =>{
                    console.log(res.data);
                    if(res.status == 'success'){
                        this.detailsArr = res.data;
                    }else{
                        this.loanArr= '';
                    }
                }).catch(res =>{
                    console.log(res);
                })
            },

            /*详情赋值  后续接口正常 要删 并且使用上面的方法*/
            getProdDetail2(){
                // this.detailsArr = detailsArr;
                console.log(this.detailsArr.qsList[0].value);
                this.qsArr.qsNum = this.detailsArr.qsList[0].value;
                this.chartsLoans.loansTotal = 20;
            },

            /*值 计算 并 渲染 图表*/
            getChartVal(){
                let loansTotal        = Number(this.chartsLoans.loansTotal);     //++ 获取总金额
                let totalQs           = Number(this.qsArr.qsNum);                       //获取总期数
                let interestRate      = Number(this.detailsArr.basicInfoList[0].value);  //获取利率
                let loansMonthTotal   = this.toDecimal2(Number( loansTotal / totalQs ));                 //++ 获取月供 = 总金额/期数
                let loansRatesTotal   = this.toDecimal2(Number(loansTotal * (interestRate /100) * totalQs));  //++ 获取总利息 = 金额*利率*期数
                let loansServiceTotal = this.toDecimal2(Number(this.chartsLoans.loansServiceTotal));      //++ 获取 手续费
                console.log('getChartVal: '+loansTotal);
                console.log('getChartVal: '+totalQs);
                console.log('getChartVal: '+interestRate);
                console.log('getChartVal: '+loansMonthTotal);
                console.log('getChartVal: '+loansRatesTotal);
                this.chartsLoans = {
                    loansTotal:loansTotal,  //总金额
                    loansMonthTotal:loansMonthTotal,  //月供  总金额/期数
                    loansRatesTotal:loansRatesTotal,  //总利息  金额*利率*期数
                    loansServiceTotal:loansServiceTotal,  //手续费
                };
            },

            /*图表 渲染*/
            setChartData(){
                let loansTotal =  this.chartsLoans.loansTotal;
                let loansMonthTotal =  this.chartsLoans.loansMonthTotal;
                let loansRatesTotal =  this.chartsLoans.loansRatesTotal;
                let loansServiceTotal =  this.chartsLoans.loansServiceTotal;
                this.chartData.rows = [
                    {name:"6期",value:loansTotal },
                    {name:"12期",value:loansMonthTotal },
                    {name:"18月份",value:loansRatesTotal },
                    {name:"24月份",value:loansServiceTotal },
                ]
            },

            /*期数选择*/
            checkedQS(val,index){
                this.qsArr.qsListCurren = index;
                this.qsArr.qsNum = val.value;

                this.setChartData();
                this.getChartVal();
            },

            /*修改总金额 步进器*/
            changeTotal(val){
                console.log('changeTotal: '+val);
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
            },
        },
        created() {
            let prodArr = this.$route.query.prodArr;
            // console.log(prodArr);
            if(!prodArr){
                this.prodArr = prodArr;
            }
            // this.getProdDetail();

            console.log(this.detailsArr);

            //调用详情赋值 待删除
            this.getProdDetail2();

            this.getChartVal();
            this.setChartData();
        },
    }
</script>

<style>
    .detail-item{
        display: none;
    }
</style>