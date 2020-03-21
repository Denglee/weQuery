<template>
    <div class="main">

        <!--银行title-->
        <div class="detail-title">
            <span class="dTitle-tip">{{dTitle.type}}</span>
            <van-row>
                <van-col span="4">
                    <img :src="dTitle.url" alt="">
                </van-col>
                <van-col span="20">
                    <h4>{{dTitle.name}}</h4>
                    <div class="dTitle-good">
                        <span v-for="(index,item) in dTitle.goods" :key="index">
                            {{item.good}}
                        </span>
                    </div>
                    <div class="dTitle-price">
                         <span v-for="(index,item) in dTitle.prices" :key="index">
                            {{item.price}}
                        </span>
                    </div>
                </van-col>
            </van-row>
        </div>

        <!--图表-->
        <div class="detail-change">
            <!--图表-->

            <van-row :getter="10">
                <van-col span="6">
                    <span class="green"></span>
                    <div>
                        <div>{{loanTotal[0].total}}</div>
                        <div>{{loanTotal[0].name}}</div>
                    </div>
                </van-col>
                <van-col span="6">
                    <span class="green"></span>
                    <div>
                        <div>{{loanTotal[1].month}}</div>
                        <div>{{loanTotal[1].name}}</div>
                    </div>
                </van-col>
                <van-col span="6">
                    <span class="green"></span>
                    <div>
                        <div>{{loanTotal[2].interest}}</div>
                        <div>{{loanTotal[2].name}}</div>
                    </div>
                </van-col>
                <van-col span="6">
                    <span class="green"></span>
                    <div>
                        <div>{{loanTotal[3].service}}</div>
                        <div>{{loanTotal[3].name}}</div>
                    </div>
                </van-col>
            </van-row>

            <!--选择期数-->
            <van-row :getter="10">
                <van-col span="6">12期</van-col>
                <van-col span="6">24期</van-col>
                <van-col span="6">36期</van-col>
                <van-col span="6">48期</van-col>
                <van-col span="6">60期</van-col>
            </van-row>

            <!--滑动条-->
            <div>
                <van-slider v-model="loanProess" :step="10" />
            </div>

            <!--change 优惠-->
            <div>
                <span v-for="(index,item) in changeGoods" :key="index">
                    {{item.good}}
                </span>
            </div>
        </div>

        <!--办理条件-->
        <div class="detail-condition">
            <h4></h4>
            <ul>
                <li>
                    <b>条件1、</b>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

    export default {
        name: "loanList",
        data() {
            return {
               
                rate:'50',

                loanProess:50,  //进度条

                /*银行信息*/
                dTitle:{
                    type:'银行贷款',
                    img:require('@/assets/img/guangfa.png'),
                    name:'广州银行-工薪贷',
                    goods:[
                        {id:1,good:'征信宽松'},
                        {id:2,good:'资料简单'},
                        {id:3,good:'超低利息'},
                        {id:4,good:'沟通尺度大'},
                    ],
                    prices:[
                        {id:1,price:'利率0.55%'},
                        {id:2,price:'5-30万'},
                        {id:3,price:'等额利息'},
                    ],
                },

                /*利息总额*/
                loanTotal:[
                    {id:1,total:5,name:'贷款总额/万'},
                    {id:2,month:0.44,name:'月供约/万'},
                    {id:3,interest:0.33,name:'总利息约/万'},
                    {id:4,service :0,name:'手续费(万)'},
                ],

                changeGoods:[
                    {id:1,good:'征信宽松'},
                    {id:2,good:'资料简单'},
                    {id:3,good:'超低利息'},
                ],

                condition:{
                    title:'办理条件',
                    item1:[
                        {subTitle:'年龄要求',}
                    ]
                },
            }
        },
        methods: {},
        created() {

        },
    }
</script>

<style lang="scss">
    /*@import '~@/assets/css/index.scss';*/
</style>