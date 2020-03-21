<template>
    <div class="main">
        <!--导航-->
        <!--<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide loan-item"  v-for="(item,index) in vipArr" :key="'vip'+index"
                     @click="tabLoan($event,index)"  :class="loanIndex ==index ? 'loanActive':''">
                        {{item.name}}
                </div>
            </div>
        </div>-->

        <!--列表-->
        <van-row gutter="12">
            <van-col span="8" v-for="(item,index) in loanArr" :ket="index">
                <div  class="fire-list" @click="goLoanDetails">
                    <van-image :src="item.img" alt="" class="fire-img"></van-image>
                    <div class="fire-title">{{item.title}}</div>
                    <div class="fire-month fire-subtitle">{{item.subTitle}}</div>
                    <div class="fire-month">{{item.monthRate}}</div>
                    <div class="fire-month fire-quoto">{{item.maxQuota}}</div>
                    <van-button type="default" size="mini" class="btnLook-fire">查看</van-button>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>

    // import Swiper from 'swiper';
    // import TweenMax from '@/assets/js/TweenMax.min.js';

    export default {
        name: "loanList",
        data() {
            return {
                loanIndex : 0,
                /*导航*/
                vipArr:[
                    {
                        id:'vip1',
                        name:'提放保',
                        subTitle:'先放款，后抵押',
                        url:'url1',
                        bgColor:'colorGreen',
                        icon:'like-o',
                    }, {
                        id:'vip2',
                        name:'征信打印',
                        subTitle:'周边征信打印点',
                        url:'url2',
                        bgColor:'colorYellow',
                        icon:'fire-o',
                    }, {
                        id:'vip1',
                        name:'vip服务',
                        subTitle:'金牌顾问一对一服务',
                        url:'url3',
                        bgColor:'colorBlue',
                        icon:'star-o',
                    },{
                        id:'vip4',
                        name:'社保查询',
                        subTitle:'缴费基数，缴费时长',
                        url:'url4',
                        bgColor:'colorPink',
                        icon:'star-o',
                    },{
                        id:'vip5',
                        name:'公积金查询',
                        subTitle:'缴费基数，缴费时长',
                        url:'url5',
                        bgColor:'colorYellow',
                        icon:'star-o',
                    }
                ],

                /*热门贷款*/
                loanArr:[
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'企业税贷',
                        subTitle:'随借随还',
                        monthRate:'月利率0.52%',
                        maxQuota:'额度最高200万',
                    },  {
                        url:'loanArr2',
                        img:require('@/assets/img/guangfa.png'),
                        title:'工薪贷',
                        subTitle:'等额本息',
                        monthRate:'月利率0.52%',
                        maxQuota:'额度最高30万',
                    },  {
                        url:'loanArr3',
                        img:require('@/assets/img/guangfa.png'),
                        title:'月供贷',
                        subTitle:'随借随还',
                        monthRate:'月利率0.66%',
                        maxQuota:'额度最高50万',
                    },  {
                        url:'loanArr4',
                        img:require('@/assets/img/guangfa.png'),
                        title:'企业税贷',
                        subTitle:'等额本息',
                        monthRate:'月利率0.55%',
                        maxQuota:'额度最高300万',
                    },

                ],
            }
        },
        methods: {
            /*切换 点击*/
            tabLoan(e,index){
                console.log(e);
                console.log(index);
                this.loanIndex =index;
                this.loanArr=[
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'企业税贷',
                        subTitle:'随借随还',
                        monthRate:'月利率0.52%',
                        maxQuota:'额度最高200万',
                    },
                ]
            },

            /*去贷款详情页*/
            goLoanDetails(){
                this.$router.push({
                    path:'/loanDetails'
                })
            },
        },

        created() {

        },
        mounted(){
            // new Swiper ('.swiper-container', {
            //     width:'90',
            //     height:'100',
            //     keyboard : true,
            //     virtualTranslate : true,
            //     on:{
            //         setTranslate: function(){
            //             this.$wrapperEl.transition('');
            //             TweenMax.to(this.$wrapperEl, 0.1, {x:this.translate, ease:Power4.easeOut})
            //
            //         }
            //     },
            // })
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/css/index.scss';
</style>