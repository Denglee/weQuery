<template>
    <div class="main">
        <!--立即配对-->
        <div class="pair">
            <div class="pair-title">贷款产品太多，不知如何选择？</div>
            <div class="pair-title">虎查查，帮您智能挑选贷款产品！</div>
            <van-button type="default"  size="small" class="btn-pair">立即配对<van-icon name="arrow" /></van-button>
        </div>

        <!--提放保-->
        <div class="swiper-container vip">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(item,index) in vipArr" :key="'vip'+index" :class="item.bgColor">
                    <div :data-href="item.url">
                        <div><van-icon :name="item.icon" />{{item.name}}</div>
                        <div>{{item.subTitle}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!--大数据-->
       <!-- <ul class="data scrollX">
            <li v-for="(item,index) in dataArr" :key="'vip'+index" class="vip-item" :class="item.bgColor">
                <div :data-href="item.url">
                    <div><van-icon :name="item.icon" />{{item.name}}</div>
                    <div>{{item.subTitle}}</div>
                </div>
            </li>
        </ul>-->
        <div class="swiper-container vip">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(item,index) in dataArr" :key="'vip'+index" :class="item.bgColor">
                    <div :data-href="item.url">
                        <div><van-icon name="" />{{item.name}}</div>
                        <div>{{item.subTitle}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!--热门贷款-->
        <div class="loan">
            <div class="flex-between">
                <div><van-icon name="fire-o" />热门贷款</div>
                <div>更多 》</div>
            </div>
<!--            url:'loanArr1',-->
<!--            img:'/assets/img/jcc.png',-->
<!--            title:'企业税贷',-->
<!--            subTitle:'随借随还',-->
<!--            monthRate:'月利率0.52%',-->
<!--            maxQuota:'额度最高200万',-->
            <van-row gutter="20">
                <van-col span="8" v-for="(item,index) in loanArr" :ket="index">
                    <img :src="item.img" alt="">
                    <div>{{item.title}}</div>
                    <div>{{item.subTitle}}</div>
                    <div>{{item.monthRate}}</div>
                    <div>{{item.maxQuota}}</div>
                    <van-button type="default" size="mini">默认按钮</van-button>
                </van-col>

            </van-row>
        </div>

        <!--热门信用卡-->
        <div class="card">

        </div>

    </div>
</template>

<script>
    import Swiper from 'swiper';
    import TweenMax from '@/assets/js/TweenMax.min.js';
    import {IndexTotal_membership,} from '@/assets/js/api'   /*引用 首页 接口*/

    export default {
        name: "Home",
        data() {
            return {
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
                        name:'g公积金查询',
                        subTitle:'缴费基数，缴费时长',
                        url:'url5',
                        bgColor:'colorYellow',
                        icon:'star-o',
                    }
                ],
                dataArr:[
                    {
                        id:'data1',
                        name:'大数据',
                        subTitle:'精准权威 信用评分',
                        url:'data1',
                        bgColor:'colorBlue',
                        icon:'like-o',
                    }, {
                        id:'data2',
                        name:'房产评估',
                        subTitle:'价格评估 可贷金额',
                        url:'data2',
                        bgColor:'colorPink',
                        icon:'fire-o',
                    }, {
                        id:'data3',
                        name:'贷款计算器',
                        subTitle:'利息、月供清清楚楚',
                        url:'data3',
                        bgColor:'colorViolet',
                        icon:'star-o',
                    }
                ],

                /*热门贷款*/
                loanArr:[
                    {
                        url:'loanArr1',
                        img:'/assets/img/jcc.png',
                        title:'企业税贷',
                        subTitle:'随借随还',
                        monthRate:'月利率0.52%',
                        maxQuota:'额度最高200万',
                    },  {
                        url:'loanArr2',
                        img:'/assets/img/jcc.png',
                        title:'工薪贷',
                        subTitle:'等额本息',
                        monthRate:'月利率0.52%',
                        maxQuota:'额度最高30万',
                    },  {
                        url:'loanArr3',
                        img:'/assets/img/jcc.png',
                        title:'月供贷',
                        subTitle:'随借随还',
                        monthRate:'月利率0.66%',
                        maxQuota:'额度最高50万',
                    },  {
                        url:'loanArr4',
                        img:'/assets/img/jcc.png',
                        title:'企业税贷',
                        subTitle:'等额本息',
                        monthRate:'月利率0.55%',
                        maxQuota:'额度最高300万',
                    },

                ]
            }
        },
        methods: {
            /*获取  现有会员 数据*/
            getTotal(){
                IndexTotal_membership().then(res => {
                    console.log(res);
                }).catch(res =>{
                    console.log(res);
                });
            },
        },
        created() {

            /*调用 现有会员 数据接口 方法*/
            this.getTotal();
        },
        mounted(){
            new Swiper ('.swiper-container', {
                width:'200',
                height:'100',
                keyboard : true,
                virtualTranslate : true,
                on:{
                    setTranslate: function(){
                        this.$wrapperEl.transition('');
                        TweenMax.to(this.$wrapperEl, 1.5, {x:this.translate, ease:Power4.easeOut})

                    }
                },
            })
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/css/index.scss';


    .swiper-container {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .my-swipe .van-swipe-item {
        width: 200px;
        color: #fff;
        border: solid 1px red;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        margin-right: 20px;
    }
</style>