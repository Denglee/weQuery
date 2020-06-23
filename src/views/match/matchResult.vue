<template>
    <div class="reslist-box">

        <div class="resSearch-box">

            <!--1. loan_type_detail: 1、个人信用贷款；2、企业信用贷款；3、个人抵押贷款；4、企业抵押贷款-->
            <!--<div v-if="resChecked.loan_type == 1 && resChecked.zylx == 2 ">个人信用(1)+  企业信用(2)</div>-->
            <div v-if="loanTypeHis == 1 && sbjsHis == -1 " class="btnResTop">
                <!--（比对loanTypeDetail 1） + （比对loanTypeDetail 2） -->
                <van-button @click="LTDtails(1)" size="small">个人信用</van-button>
                <van-button @click="LTDtails(2)" size="small">企业信用</van-button>

            </div>

            <!--<div v-if="resChecked.loan_type == 2 && resChecked.zylx == 2 "> 个人抵押(1) + 企业抵押(2)</div>-->
            <div v-if="loanTypeHis == 2 && sbjsHis == -1 " class="btnResTop">
                <!--（比对loanTypeDetail 3） + （比对loanTypeDetail 4）-->
                <van-button @click="LTDtails(3)" size="small">个人抵押</van-button>
                <van-button @click="LTDtails(4)" size="small">企业抵押</van-button>
            </div>

            <ul class="picker-ul">
                <li class="picker-item picker-item2">
                    <van-button @click="toggleSort('isRateUp','basicInfoList', '0','nameValue')"
                                type="default" size="small">
                        利息
                        <van-icon name="ascending" v-if="sortWay.isRateUp == true"/>
                        <van-icon name="descending" v-else/>
                    </van-button>
                </li>
                <li class="picker-item picker-item2">
                    <van-button @click="toggleSort('isQuotaUp','quotaList', '0','maxQuota')"
                                type="default" size="small">
                        额 度
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
            <!--            <div class="btnResSerach">-->
            <!--                <van-button type="default" size="small" class="btn" @click="btnSearch" :loading = 'btnLoad' loading-text="确定...">确定</van-button>-->
            <!--            </div>-->

        </div>

        <!--<div class="detail-item detail-header" v-if="detailsArr.length == 0">暂无数据</div>-->
        <div v-if="sortListAfter.length == 0">
            <div class="detail-item detail-header" v-for="(itemFa,index) in detailsArr" >
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
                    <h4 class="dHeader">{{itemFa.name}} {{itemFa.quotaList[0].maxQuota}}</h4>
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
                <h4 class="dHeader">{{itemFa.name}} {{itemFa.quotaList[0].maxQuota}}</h4>
                <div class="dHeader-good">
                    {{itemFa.quotaList[0].maxQuota}}
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

                sortWay: {
                    isRateUp: true,   //利息 默认排序 从大到小
                    isQuotaUp: true,  //额度 默认排序 从大到小
                },

                sortListAfter: [],  //排序后 数据

                // resArr2:[],  //父级传值数组
                detailsArr:[],  //历史列表数组

                /*detailsArr: [
                    {
                        "id": 31,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/77.png",
                        "name": "平安银行-金领通",
                        "prodType": 1,
                        "historyId": null,
                        "loanTypeHis": 2,
                        "sbjsHis": -1,
                        "labelList": [{"id": 40, "productId": 31, "name": "征信宽松"}, {
                            "id": 41,
                            "productId": 31,
                            "name": "无手续费"
                        }, {"id": 42, "productId": 31, "name": "随借随还"}, {"id": 43, "productId": 31, "name": "额度超高"}],
                        "basicInfoList": [{"id": 32, "productId": 31, "name": "利率", "nameValue": "0.48%"}, {
                            "id": 33,
                            "productId": 31,
                            "name": "3-100万",
                            "nameValue": null
                        }, {"id": 34, "productId": 31, "name": "随借随还", "nameValue": 1}],
                        "quotaList": [{
                            "id": 17,
                            "productId": 31,
                            "minQuota": 3,
                            "maxQuota": 100,
                            "step": 1,
                            "defaultQuota": 3
                        }],
                        "loanTypeDetail": 4
                    },
                    {
                        "id": 33,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/88.png",
                        "name": "纳鑫普惠-车主贷",
                        "prodType": 5,
                        "historyId": null,
                        "loanTypeHis": 1,
                        "sbjsHis": -1,
                        "labelList": [{"id": 48, "productId": 33, "name": "无违约金"}, {
                            "id": 49,
                            "productId": 33,
                            "name": "征信宽松"
                        }, {"id": 50, "productId": 33, "name": "资料简单"}, {"id": 51, "productId": 33, "name": "闪电放款"}],
                        "basicInfoList": [{"id": 38, "productId": 33, "name": "利率", "nameValue": "1.2%"}, {
                            "id": 39,
                            "productId": 33,
                            "name": "3-30万",
                            "nameValue": null
                        }, {"id": 40, "productId": 33, "name": "先息后本", "nameValue": 4}],
                        "quotaList": [{
                            "id": 19,
                            "productId": 33,
                            "minQuota": 3,
                            "maxQuota": 30,
                            "step": 1,
                            "defaultQuota": 3
                        }],
                        "loanTypeDetail": 1
                    },
                    {
                        "id": 24,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/11.png",
                        "name": "深圳农村商业银行-小商贷",
                        "prodType": 1,
                        "historyId": null,
                        "loanTypeHis": 1,
                        "sbjsHis": -1,
                        "labelList": [{"id": 12, "productId": 24, "name": "征信宽松"}, {
                            "id": 13,
                            "productId": 24,
                            "name": "资料简单"
                        }, {"id": 14, "productId": 24, "name": "超低利息"}, {"id": 15, "productId": 24, "name": "额度超高"}],
                        "basicInfoList": [{"id": 11, "productId": 24, "name": "利率", "nameValue": "0.55%"}, {
                            "id": 12,
                            "productId": 24,
                            "name": "10-100万",
                            "nameValue": null
                        }, {"id": 13, "productId": 24, "name": "等额本息", "nameValue": 3}],
                        "quotaList": [{
                            "id": 10,
                            "productId": 24,
                            "minQuota": 10,
                            "maxQuota": 100,
                            "step": 1,
                            "defaultQuota": 10
                        }],
                        "loanTypeDetail": 1
                    },
                    {
                        "id": 34,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/88.png",
                        "name": "中国银行-大商贷",
                        "prodType": 1,
                        "historyId": null,
                        "loanTypeHis": 1,
                        "sbjsHis": null,
                        "labelList": [{"id": 52, "productId": 34, "name": "征信宽松"}, {
                            "id": 53,
                            "productId": 34,
                            "name": "资料简单"
                        }, {"id": 54, "productId": 34, "name": "超低利息"}, {"id": 55, "productId": 34, "name": "额度超高"}],
                        "basicInfoList": [{"id": 41, "productId": 34, "name": "利率", "nameValue": "0.55%"}, {
                            "id": 42,
                            "productId": 34,
                            "name": "10-100万",
                            "nameValue": null
                        }, {
                            "id": 42,
                            "productId": 34,
                            "name": "10-100万",
                            "nameValue": 2
                        }],
                        "quotaList": [{
                            "id": 20,
                            "productId": 34,
                            "minQuota": 5,
                            "maxQuota": 100,
                            "step": 1,
                            "defaultQuota": 5
                        }],
                        "loanTypeDetail": 2
                    },
                    {
                        "id": 25,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/22.png",
                        "name": "江苏银行-金E融公基金",
                        "prodType": 1,
                        "historyId": null,
                        "loanTypeHis": 1,
                        "sbjsHis": null,
                        "labelList": [{"id": 16, "productId": 25, "name": "征信宽松"}, {
                            "id": 17,
                            "productId": 25,
                            "name": "随借随还"
                        }, {"id": 18, "productId": 25, "name": "资料简单"}, {"id": 19, "productId": 25, "name": "超低利息"}],
                        "basicInfoList": [{"id": 14, "productId": 25, "name": "利率", "nameValue": "0.45%"}, {
                            "id": 15,
                            "productId": 25,
                            "name": "5-30万",
                            "nameValue": null
                        }, {"id": 16, "productId": 25, "name": "随借随还", "nameValue": 2}],
                        "quotaList": [{
                            "id": 11,
                            "productId": 25,
                            "minQuota": 5,
                            "maxQuota": 30,
                            "step": 1,
                            "defaultQuota": 5
                        }],
                        "loanTypeDetail": 3
                    },
                    {
                        "id": 27,
                        "ioc": "http://8.129.189.135:8090/cc/uploadImg/44.png",
                        "name": "长城融通-房东信用贷",
                        "prodType": 2,
                        "historyId": null,
                        "loanTypeHis": 1,
                        "sbjsHis": -1,
                        "labelList": [{"id": 24, "productId": 27, "name": "征信宽松"}, {
                            "id": 25,
                            "productId": 27,
                            "name": "负债要求低"
                        }, {"id": 26, "productId": 27, "name": "资料简单"}, {"id": 27, "productId": 27, "name": "额度超高"}],
                        "basicInfoList": [{"id": 20, "productId": 27, "name": "利率", "nameValue": "0.99%"}, {
                            "id": 21,
                            "productId": 27,
                            "name": "5-50万",
                            "nameValue": null
                        }, {"id": 22, "productId": 27, "name": "等额本息", "nameValue": 1}],
                        "quotaList": [{
                            "id": 13,
                            "productId": 27,
                            "minQuota": 5,
                            "maxQuota": 50,
                            "step": 1,
                            "defaultQuota": 1
                        }],
                        "loanTypeDetail": 4
                    }
                ],*/

                btnLoad: false,

                /*还款方式*/
                ModeArr: {
                    ModeShow: false,
                    ModeName: '',
                },

                ModeData: [
                    {id: 1, name: '等额本息还款'},
                    {id: 2, name: '等额本金还款'},
                    {id: 3, name: '等额等息还款'},
                    {id: 4, name: '先息后本还款'},
                    {id: 5, name: '到期还本还款'},
                    {id: 6, name: '气球贷还款'},
                ],

                matchResFoam: {
                    history_id: '',
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
                console.log(value);
                this.ModeArr = {
                    ModeShow: false,
                    ModeName: value.name,
                };
                let hkId = value.id;
                this.matchResFoam.loan_mode = hkId;

                let sortList = this.detailsArr;
                let arr2 = [];
                sortList.forEach(function (item, index) {
                    console.log(item.basicInfoList[2].nameValue);
                    if(hkId == item.basicInfoList[2].nameValue){
                        arr2.push(item);
                    }
                });
                console.log(arr2);
                if(arr2.length > 0){
                    this.sortListAfter = arr2;
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
                    console.log(a[name][numSize][valName]);
                    if (!nowSortWay) {
                        return parseFloat(a[name][numSize][valName]) - parseFloat(b[name][numSize][valName]);
                    } else {
                        return parseFloat(b[name][numSize][valName]) - parseFloat(a[name][numSize][valName]);
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

            // 匹配
            getMatchList() {
                // let postRes = {};
                // postRes.history_id = this.matchResFoam.history_id;
                //
                // console.log(postRes);
                //
                // getMatchProductList(
                //     postRes
                // ).then(res => {
                //     console.log(res);
                //     if(res.status == 'success'){
                //         this.detailsArr  = res.data;
                //     }else{
                //         this.detailsArr= [];
                //     }
                // }).catch(res => {
                //     console.log(res);
                // })
            },

            getHistoryList() {
                getHistoryProductList({
                    historyId: this.matchResFoam.history_id,
                }).then(res => {
                    // console.log(res);
                    if(res.status == 'success'){
                        this.detailsArr  = res.data;
                    }else{
                        this.loanArr= [];
                    }
                }).catch(res => {
                    console.log(res);
                })
            },

            btnSearch() {
                console.log(this.matchResFoam);
                this.btnLoad = true;
                setTimeout(() => {
                    this.btnLoad = false;
                }, 1100);

                this.getMatchList();
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
            console.log(resHistory);
            this.matchResFoam.history_id = resHistory;

            this.getHistoryList();
            console.log(this.detailsArr);

            let resCheckedMatch = this.$route.params.resCheckedMatch;

            console.log(resCheckedMatch);
            if (resCheckedMatch == undefined) {
                this.loanTypeHis = this.detailsArr[0].loanTypeHis;
                this.sbjsHis=this.detailsArr[0].sbjsHis;
                console.log(this.loanTypeHis);
                console.log(this.sbjsHis);
            } else {
                console.log(resCheckedMatch);
                this.loanTypeHis = resCheckedMatch.loan_type;
                let sbjsHis2 = resCheckedMatch.zylx;
                if(sbjsHis2 == 2 ){
                    sbjsHis2 = -1
                }
                this.sbjsHis=sbjsHis2;
                console.log(this.loanTypeHis);
                console.log(this.sbjsHis);
            }

        },
    }
</script>

