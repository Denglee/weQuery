<template>
    <div class="reslist-box">
        <div class="resSearch-box">

            <!--1. loan_type_detail: 1、个人信用贷款；2、企业信用贷款；3、个人抵押贷款；4、企业抵押贷款-->
            <!--<div v-if="resChecked.loan_type == 1 && resChecked.zylx == 2 ">个人信用(1)+  企业信用(2)</div>-->
            <div v-if="loanTypeHis == 1 && sbjsHis == 2 " class="btnResTop">
                <!--（比对loanTypeDetail 1） + （比对loanTypeDetail 2） -->
                <van-button @click="LTDtails(1)" size="small">个人信用</van-button>
                <van-button @click="LTDtails(2)" size="small">企业信用</van-button>
            </div>

            <!--<div v-if="resChecked.loan_type == 2 && resChecked.zylx == 2 "> 个人抵押(1) + 企业抵押(2)</div>-->
            <div v-if="loanTypeHis == 2 && sbjsHis == 2 " class="btnResTop">
                <!--（比对loanTypeDetail 3） + （比对loanTypeDetail 4）-->
                <van-button @click="LTDtails(3)" size="small">个人抵押</van-button>
                <van-button @click="LTDtails(4)" size="small">企业抵押</van-button>
            </div>

            <ul class="picker-ul">
                <li class="picker-item picker-item2">
                    <van-button @click="toggleSort('isRateUp','basicInfoList', '0','nameValue')"
                                type="default" size="small">
                        <span>利息</span>
                        <van-icon name="ascending" v-if="sortWay.isRateUp == true"/>
                        <van-icon name="descending" v-else/>
                    </van-button>
                </li>
                <li class="picker-item picker-item2">
                    <van-button @click="toggleSort('isQuotaUp','quotaDo', 'No','maxQuota')"
                                type="default" size="small">
                        <span>额度</span>
                        <van-icon name="ascending" v-if="sortWay.isQuotaUp == true"/>
                        <van-icon name="descending" v-else/>
                    </van-button>
                </li>

                <li class="picker-item picker-item3">
                    <van-field
                            readonly
                            clickable
                            name="picker"
                            :value="ModeArr.ModeName"
                            placeholder="选择还款方式"
                            @click="ModeArr.ModeShow = true"/>
                    <van-popup v-model="ModeArr.ModeShow" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="ModeData"
                                value-key="name"
                                @confirm="ModeConfirm"
                                @cancel="ModeArr.ModeShow = false"/>
                    </van-popup>
                </li>
            </ul>
        <!--<div class="btnResSerach">-->
        <!--    <van-button type="default" size="small" class="btn" @click="btnSearch" :loading = 'btnLoad' loading-text="确定...">确定</van-button>-->
        <!--</div>-->

        </div>

        <div class="detail-item detail-header" v-if="detailsArr.length == 0">
            暂无数据
        </div>

        <div v-else-if="sortListAfter.length == 0">
            <div v-if="isSelect == true" class="detail-item detail-header">暂无数据</div>
            <div v-else>
                <div class="detail-item detail-header" v-for="(itemFa,index) in detailsArr" >
                <div class="dHeader-img">
                    <span class="dHeader-tip" v-if="itemFa.prodType == 1">银行信贷</span>
                    <span class="dHeader-tip" v-else-if="itemFa.prodType == 2">机构信贷</span>
                    <span class="dHeader-tip" v-else-if="itemFa.prodType == 3">小额贷款</span>
                    <span class="dHeader-tip" v-else-if="itemFa.prodType == 4">企业贷款</span>
                    <span class="dHeader-tip" v-else-if="itemFa.prodType == 5">抵押贷款</span>
                    <span class="dHeader-tip" v-else>线上急融 </span>
                    <van-image :src="itemFa.ioc"  fit="cover"/>
                </div>
                <div class="dHeader-info" @click="goLoanD(itemFa)">
                    <h4 class="dHeader">{{itemFa.name}}</h4>
                    <div class="dHeader-good">
                        <span v-for="(good2,index2) in itemFa.labelList" :key="index2">{{good2.name}}</span>
                    </div>
                    <div class="dHeader-good2">
                        <span v-for="(basic,basicIndex) in itemFa.basicInfoList" :key="basicIndex">
                            <b v-if="basicIndex == 0">{{basic.name}}{{basic.nameValue}}</b>
                            <b v-else>{{basic.name}}</b>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div v-else>
            <div class="detail-item detail-header" v-for="(itemFa,index) in sortListAfter">
            <div class="dHeader-img">
                <span class="dHeader-tip" v-if="itemFa.prodType == 1">银行信贷</span>
                <span class="dHeader-tip" v-else-if="itemFa.prodType == 2">机构信贷</span>
                <span class="dHeader-tip" v-else-if="itemFa.prodType == 3">小额贷款</span>
                <span class="dHeader-tip" v-else-if="itemFa.prodType == 4">企业贷款</span>
                <span class="dHeader-tip" v-else-if="itemFa.prodType == 5">抵押贷款</span>
                <span class="dHeader-tip" v-else>线上急融</span>
                <van-image :src="itemFa.ioc"  fit="cover"/>
            </div>
            <div class="dHeader-info" @click="goLoanD(itemFa)">
                <h4 class="dHeader">{{itemFa.name}}</h4>
                <div class="dHeader-good">
                    <span v-for="(good2,index2) in itemFa.labelList" :key="index2">{{good2.name}}</span>
                </div>
                <div class="dHeader-good2">
                    <span v-for="(basic,basicIndex) in itemFa.basicInfoList" :key="basicIndex">
                        <b v-if="basicIndex == 0">{{basic.name}}{{basic.nameValue}}</b>
                        <b v-else>{{basic.name}}</b>
                    </span>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import {getHistoryProductList} from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchResult",
        data() {
            return {
                loanTypeHis:'',
                sbjsHis:'',

                resChecked: {},

                isSelect:false,

                sortWay: {
                    isRateUp: true,   //利息 默认排序 从大到小
                    isQuotaUp: true,  //额度 默认排序 从大到小
                },

                sortListAfter: [],  //排序后 数据

                // resArr2:[],  //父级传值数组
                detailsArr:[],  //历史列表数组

                btnLoad: false,

                /*还款方式*/
                ModeArr: {
                    ModeShow: false,
                    ModeName: '',
                },

                ModeData: [
                    {id: 0, name: '所有还款方式'},
                    {id: 1, name: '等额本息还款'},
                    {id: 2, name: '等额本金还款'},
                    {id: 3, name: '等额等息还款'},
                    {id: 4, name: '先息后本还款'},
                    {id: 5, name: '到期还本还款'},
                    {id: 6, name: '气球贷还款'},
                ],

                matchResFoam: {
                    history_id: '',
	                openid: '',
                    nickname: '',
                },

                prodArr: {
                    prodType: '',   //分类
                    prodId: '',     //id
                },
            }
        },
        methods: {

            // 还款方式
            ModeConfirm(value, index) {
                if( value.name == "所有还款方式"){
                    this.isSelect = false;
                    this.ModeArr.ModeShow = false;
                }else{
                    this.isSelect = true;
                    console.log(value);

                    this.ModeArr = {
                        ModeShow: false,
                        ModeName: value.name,
                    };
                    let hkId = value.id;
                    // console.log(hkId);
                    this.matchResFoam.loan_mode = hkId;
                    // console.log(this.matchResFoam.loan_mode);

                    let sortList = this.detailsArr;
                    let arr2 = [];
                    sortList.forEach(function (item, index) {
                        console.log(item.basicInfoList[2].nameValue);
                        if(hkId == item.basicInfoList[2].nameValue){
                            arr2.push(item);
                        }
                    });
                    console.log(arr2.length);
                    if(arr2.length > 0){
                        this.sortListAfter = arr2;
                    }else{
                        this.sortListAfter =[];
                    }
                }
            },

            //排序 点击
            toggleSort(isSortWay, sortName, numSize, valName) {
                this.sortWay[isSortWay] = !this.sortWay[isSortWay];
                let nowSortWay = this.sortWay[isSortWay];
                console.log(nowSortWay)
                this.funSort(nowSortWay, sortName, numSize, valName);
            },

            // 排序方法
            funSort(nowSortWay, name, numSize, valName) {
                let that = this;
                let listArr = [];
                if(that.sortListAfter.length == 0){
                    listArr = this.detailsArr;
                } else {
                    listArr = this.sortListAfter;
                }

                listArr.sort(function (a, b) {
                    if(numSize == 'No'){  /*额度没有[0]*/
                        if (!nowSortWay) {
                            return parseFloat(a[name][valName]) - parseFloat(b[name][valName]);
                        } else {
                            return parseFloat(b[name][valName]) - parseFloat(a[name][valName]);
                        }
                    } else {
                        if (!nowSortWay) {
                            return parseFloat(a[name][numSize][valName]) - parseFloat(b[name][numSize][valName]);
                        } else {
                            return parseFloat(b[name][numSize][valName]) - parseFloat(a[name][numSize][valName]);
                        }
                    }
                });
            },

            // loanTypeDetail 贷款类型
            LTDtails(ltd) {
                console.log(ltd);
                let sortList = this.detailsArr;
                let arr2 = [];
                sortList.forEach(function (item, index) {
                    // console.log(item.loanTypeDetail);
                    if(ltd == item.loanTypeDetail){
                        console.log(item);
                        arr2.push(item);
                    }
                });
                console.log(arr2);
                if(arr2.length > 0){
                    this.sortListAfter = arr2;
                }
            },

            /*接口获取历史信息*/
            getHistoryList() {
                let that = this;
                console.log('265'+this.matchResFoam.nickname);
                getHistoryProductList({
                    historyId: this.matchResFoam.history_id,
	                staffId: this.matchResFoam.openid,
                    staffName: this.matchResFoam.nickname,

                }).then(res => {
                    // console.log(res);
                    if(res.status == 'success'){
                        this.detailsArr  = res.data;
                        let resCheckedMatch = this.$route.params.resCheckedMatch;
                        console.log(resCheckedMatch);

                        if (resCheckedMatch == undefined) { //匹配结果跳转到这
                            console.log(that.detailsArr);
                            // setTimeout(function(){
                                console.log(that.detailsArr);
                                that.loanTypeHis = that.detailsArr[0].loanTypeHis;
                                that.sbjsHis = that.detailsArr[0].zylxHis;
                                console.log(that.loanTypeHis);
                                console.log(that.sbjsHis);
                            // },500)
                        } else {   //当前页面刷新
                            console.log(resCheckedMatch);
                            this.loanTypeHis = resCheckedMatch.loan_type;
                            let sbjsHis2 = resCheckedMatch.zylx;
                            // if(sbjsHis2 == 2 ){ 行
                            //     sbjsHis2 = -1
                            // }
                            this.sbjsHis = sbjsHis2;
                            console.log(that.loanTypeHis);
                            console.log(that.sbjsHis);
                        }
                    }else{
                        this.loanArr= [];
                    }
                }).catch(res => {
                    console.log(res);
                })
            },

            // 去详情页
            goLoanD(item) {
                console.log(item);
                this.prodArr.prodType = item.prodType;   //分类
                this.prodArr.prodId = item.id;
                this.$router.push({
                    name: 'loanDetails',
                    params: {'prodArr': this.prodArr}
                })
            },

        },
        created() {
            let resHistory = localStorage.getItem('historyId');
	         const ls = new this.GLOBAL.FnStorage();
	         const nickname = ls.getItem('nickname');
	         const openid = ls.getItem('openid2');

            // let nickname = localStorage.getItem('nickname');
            // let openid = localStorage.getItem('openid');
            console.log(resHistory);
            this.matchResFoam.history_id = resHistory;
            this.matchResFoam.openid = openid || 'oLbgO1Qu4uJHnyqDj245KanmDre4';
            this.matchResFoam.nickname = nickname || '木子';

            this.getHistoryList();

        },

    }
</script>

