<template>
    <div class="reslist-box">

        <div class="resSearch-box">
<!--            <div class="input_box">-->
<!--                <input type="text" v-model="matchResFoam.loan_years" placeholder="请输入贷款年限">-->
<!--                <input type="text" v-model="matchResFoam.interest" placeholder="请输入利息">-->
<!--            </div>-->

            <ul class="picker-ul">
                <li class="picker-item">
                    <van-field
                            readonly
                            clickable
                            name="picker"
                            :value="loanArr.loanName"
                            placeholder="选择贷款类型"
                            class="inp-picker"
                            @click="loanArr.showLoan = true"/>
                    <van-popup v-model="loanArr.showLoan" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="loanType"
                                value-key="name"
                                @confirm="LoanConfirm"
                                @cancel="loanArr.showLoan = false"/>
                    </van-popup>
                </li>
                <li class="picker-item">
                    <van-field
                            readonly
                            clickable
                            name="picker"
                            :value="LimitArr.LimitName"
                            placeholder="选择放款时效"
                            @click="LimitArr.LimitShow = true"/>
                    <van-popup v-model="ModeArr.ModeShow" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="ModeData"
                                value-key="name"
                                @confirm="ModeConfirm"
                                @cancel="ModeArr.ModeShow = false"/>
                    </van-popup>
                </li>
                <li class="picker-item">
                    <van-field
                            readonly
                            clickable
                            name="picker"
                            :value="ModeArr.ModeName"
                            placeholder="选择还款方式"
                            @click="ModeArr.ModeShow = true"/>
                    <van-popup v-model="LimitArr.LimitShow" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="LimitData"
                                value-key="name"
                                @confirm="LimitConfirm"
                                @cancel="LimitArr.LimitShow = false"/>
                    </van-popup>
                </li>

            </ul>

            <div class="btnResSerach">
                <van-button type="default" size="small" class="btn" @click="btnSearch" :loading = 'btnLoad' loading-text="确定...">确定</van-button>
            </div>

        </div>

        <div class="detail-item detail-header" v-if="detailsArr.length == 0">暂无数据</div>
        <div class="detail-item detail-header" v-for="(itemFa,index) in detailsArr" v-else>
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
                    <span v-for="(good2,index2) in itemFa.labelList" :key="index2">
                        {{good2.name}}
                    </span>
                </div>
                <div class="dHeader-good2">
                    <span v-for="(basic,basicIndex) in itemFa.basicInfoList" :key="basicIndex">
                        {{basic.name}}{{basic.nameValue}}
                    </span>
                </div>
            </div>
        </div>


        <!--<div v-if="resChecked.loan_type == 1 && resChecked.zylx == 1 ">
            个人信用
        </div>-->
        <div v-if="resChecked.loan_type == 1 && resChecked.zylx == 2 ">
            个人信用 + 企业信用
        </div>
        <!--<div v-if="resChecked.loan_type == 2 && resChecked.zylx == 1 ">
            个人抵押
        </div>-->
        <div v-if="resChecked.loan_type == 2 && resChecked.zylx == 2 ">
            个人抵押 + 企业抵押
        </div>

        <van-row type="flex" justify="center" gutter="10" class="resSearch-box">
            <van-col span="8">
                <van-button @click="toggleSort('isRateUp','num')" type="default" size="small">
                    利息
                    <van-icon name="ascending" v-if="sortWay.isRateUp == true"/>
                    <van-icon name="descending" v-else/>
                </van-button>
            </van-col>
            <van-col span="8">
                <van-button @click="toggleSort('isQuotaUp','num2')" type="default" size="small">
                    额度
                    <van-icon name="ascending" v-if="sortWay.isQuotaUp == true"/>
                    <van-icon name="descending" v-else/>
                </van-button>
            </van-col>
            <van-col span="8">
                <van-field
                        readonly
                        clickable
                        name="picker"
                        :value="ModeArr.ModeName"
                        placeholder="选择还款方式"
                        @click="ModeArr.ModeShow = true"/>
                <van-popup v-model="LimitArr.LimitShow" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="LimitData"
                            value-key="name"
                            @confirm="LimitConfirm"
                            @cancel="LimitArr.LimitShow = false"/>
                </van-popup>
            </van-col>
        </van-row>



        <div v-for="item in sortListAfter" class="item">
            <div>num: lx:{{ item.num }}  -----------------    edu:{{ item.num2 }}</div>
        </div>

    </div>
</template>

<script>
    import { getHistoryProductList, getMatchProductList } from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchResult",
        data() {
            return {
                resChecked:{

                },
                sortList:[
                    { num:'5',  num2:'84', value:'开始 111 num2 222 num 777 '},
                    { num:'88', num2:'78', value:'开始 222 num2 333 num 111 '},
                    { num:'43', num2:'16', value:'开始 333 num2 775 num 444 '},
                    { num:'56', num2:'85', value:'开始 444 num2 111 num 333 '},
                    { num:'28', num2:'47', value:'开始 555 num2 555 num 555 '},
                    { num:'61', num2:'45', value:'开始 666 num2 666 num 222 '},
                    { num:'9',  num2:'54', value:'开始 777 num2 444 num 666 '},
                ],

                sortWay:{
                    isRateUp : true,   //利息 默认排序 从大到小
                    isQuotaUp : true,  //额度 默认排序 从大到小
                },

                sortListAfter:[],  //排序后 数据


                // resArr2:[],  //父级传值数组
                // detailsArr:[],  //历史列表数组

                detailsArr:[

                    {
                        "id":1,
                        "ioc":"d://user",
                        "name":"中国银行-优客分期卡",
                        "prodType":1,
                        "historyId":null,
                        "loanTypeHis":1,
                        "sbjsHis":1,
                        "labelList":[
                            {
                                "id":2343,
                                "productId":1,
                                "name":"放贷快"
                            },
                            {
                                "id":456456,
                                "productId":1,
                                "name":"利率0.5"
                            }
                        ],
                        "basicInfoList":[
                            {
                                "id":12,
                                "productId":1,
                                "name":"20-300万",
                                "nameValue":null
                            },
                            {
                                "id":13,
                                "productId":1,
                                "name":"等额等息",
                                "nameValue":null
                            },
                            {
                                "id":6798345,
                                "productId":1,
                                "name":"利率0.99%",
                                "nameValue":"0.99%"
                            }
                        ],
                        "quotaList":[
                            {
                                "id":1,
                                "productId":1,
                                "minQuota":0,
                                "maxQuota":300,
                                "step":10,
                                "defaultQuota":10
                            }
                        ],
                        "loanTypeDetail":1
                    },
                    {
                        "id":1,
                        "ioc":"d://user",
                        "name":"中国银行-优客分期卡",
                        "prodType":1,
                        "historyId":null,
                        "loanTypeHis":1,
                        "sbjsHis":1,
                        "labelList":[
                            {
                                "id":2343,
                                "productId":1,
                                "name":"放贷快"
                            },
                            {
                                "id":456456,
                                "productId":1,
                                "name":"利率0.5"
                            }
                        ],
                        "basicInfoList":[
                            {
                                "id":12,
                                "productId":1,
                                "name":"20-300万",
                                "nameValue":null
                            },
                            {
                                "id":13,
                                "productId":1,
                                "name":"等额等息",
                                "nameValue":null
                            },
                            {
                                "id":6798345,
                                "productId":1,
                                "name":"利率0.99%",
                                "nameValue":"0.99%"
                            }
                        ],
                        "quotaList":[
                            {
                                "id":1,
                                "productId":1,
                                "minQuota":0,
                                "maxQuota":300,
                                "step":10,
                                "defaultQuota":10
                            }
                        ],
                        "loanTypeDetail":1
                    },
                ],

                btnLoad:false,

                /*贷款类型*/
                loanArr:{
                    showLoan:false,
                    loanName:'',
                },

                loanType:[
                    {id:1,name:'信用贷款'},
                    {id:2,name:'企业信用贷款'},
                    {id:3,name:'抵押贷款'},
                    {id:4,name:'对公抵押贷款'},
                ],

                /*放款时效*/
                LimitArr:{
                    LimitShow:false,
                    LimitName:'',
                },
                LimitData:[
                    {id:1,name:'当天放款'},
                    {id:2,name:'1~3天内'},
                    {id:3,name:'7天内'},
                ],

                /*还款方式*/
                ModeArr:{
                    ModeShow:false,
                    ModeName:'',
                },
                ModeData:[
                    {id:1,name:'等额本息还款'},
                    {id:2,name:'等额本金还款'},
                    {id:3,name:'等额等息还款'},
                    {id:4,name:'先息后本还款'},
                    {id:5,name:'到期还本还款'},
                    {id:6,name:'气球贷还款'},
                ],



                matchResFoam:{
                    loan_type:'',  //类型
                    loan_years:'',   // 年限
                    loan_time_limit:'',   // 时效
                    loan_mode:'',   // 方式
                    interest:'',   // 利息
                    history_id:'',
                },

                prodArr:{
                    prodType:'',   //分类
                    prodId:'',     //id
                },
            }
        },
        methods: {

            //排序 点击
            toggleSort(isSortWay,sortName){
                this.sortWay[isSortWay] =  !this.sortWay[isSortWay];

                let isSortWay2 = this.sortWay[isSortWay];
                this.funSort(  isSortWay2,sortName);
            },

            //排序方法
            funSort(isSortState,sortName){
                let that = this;
                that.sortList.sort(function( a , b){
                    if(isSortState){
                        return b[sortName] - a[sortName];
                    }else{
                        return a[sortName] - b[sortName];
                    }
                });
                that.sortListAfter = that.sortList;
            },

            // 匹配
            getMatchList() {
                let postRes = {};
                if(this.matchResFoam.loan_type == ''){
                    postRes.loan_type = '-1';
                }else{
                    postRes.loan_type = this.matchResFoam.loan_type;
                }

                if(this.matchResFoam.loan_years == ''){
                    postRes.loan_years = '-1';
                }else{
                    postRes.loan_years = this.matchResFoam.loan_years;
                }

                if(this.matchResFoam.loan_time_limit == ''){
                    postRes.loan_time_limit = '-1';
                }else{
                    postRes.loan_time_limit = this.matchResFoam.loan_time_limit;
                }

                if(this.matchResFoam.loan_mode == ''){
                    postRes.loan_mode = '-1';
                }else{
                    postRes.loan_mode = this.matchResFoam.loan_mode;
                }

                if(this.matchResFoam.interest == ''){
                    postRes.interest = '-1';
                }else{
                    postRes.interest = this.matchResFoam.interest;
                }
                postRes.history_id = this.matchResFoam.history_id;

                console.log(postRes);

                getMatchProductList(
                    postRes
                ).then(res => {
                    console.log(res);
                    if(res.status == 'success'){
                        this.detailsArr  = res.data;
                    }else{
                        this.detailsArr= [];
                    }
                }).catch(res => {
                    console.log(res);
                })
            },

            getHistoryList() {
                getHistoryProductList({
                    historyId:this.matchResFoam.history_id,
                }).then(res => {
                    console.log(res);
                    if(res.status == 'success'){
                        this.detailsArr  = res.data;
                    }else{
                        this.loanArr= [];
                    }
                }).catch(res => {
                    console.log(res);
                })
            },

            // 类型
            LoanConfirm(value, index) {
                console.log(value);
                this.loanArr={
                    showLoan :false,
                    loanName:value.name,
                };
                this.matchResFoam.loan_type = ''+value.id+'';
            },

            // 时效
            LimitConfirm(value, index) {
                console.log(value);
                this.LimitArr={
                    LimitShow :false,
                    LimitName:value.name,
                };
                this.matchResFoam.loan_time_limit = ''+value.id+'';
            },

            // 还款方式
            ModeConfirm(value, index) {
                console.log(value);
                this.ModeArr={
                    ModeShow :false,
                    ModeName:value.name,
                };
                this.matchResFoam.loan_mode = ''+value.id+'';
            },

            btnSearch(){
              console.log(this.matchResFoam);
              this.btnLoad = true;
              setTimeout(()=>{
                  this.btnLoad = false;
              },1100);

              this.getMatchList();
            },


            // 去详情页
            goLoanD(item){
                console.log(item);
                this.prodArr.prodType = item.prodType;   //分类
                this.prodArr.prodId = item.id;
                this.$router.push({
                    name:'loanDetails',
                    params: {'prodArr':this.prodArr}
                })
            },
        },
        created() {

            this.funSort(true,'num');

            let resHistory =localStorage.getItem('historyId');
            console.log(resHistory);
            this.matchResFoam.history_id = resHistory;



            let resCheckedMatch = this.$route.params.resCheckedMatch;

            if( resCheckedMatch  == undefined){
                console.log(resCheckedMatch);
                this.resChecked ={
                    loan_type :1,
                    zylx:1,
                }
            }else{
                this.resChecked = resCheckedMatch;
            }



            // this.getHistoryList();
            console.log(this.detailsArr)
        },
    }
</script>

