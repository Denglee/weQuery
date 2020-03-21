<template>
    <div class="main" id="home">
        <!--地址-->
        <div class="flex-between">
            <div class="address-left">
                <h4 class="address-city">所在城市</h4>
                <div class="address-info">机构仅办理当地工作认识申请</div>
            </div>
            <div><van-icon name="location-o"/>深圳</div>
        </div>

        <!--轮播图-->
        <van-swipe :autoplay="3000" :width="swiper.swiperWid" :height="swiper.swiperHei"
        class="index-swiper">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image :src="image"/>
            </van-swipe-item>
        </van-swipe>

        <!--立即匹配贷款-->
        <div  class="index-nav-box">
            <div class="index-match">
                <h4 class="index-match-title">一键选贷款</h4>
                <div class="index-match-info">根据个人资质智能匹配贷款方案</div>
                <van-button size="mini" class="btn-match">智能匹配</van-button>
            </div>

            <!--四大导航-->
            <van-row gutter="14" class="index-nav-main">
                <van-col span="12" v-for="(item,index) in indexNav" :key="index">
                    <div class="index-navItem">
                        <router-link :to="item.url"> {{item.name}}</router-link>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import TweenMax from '@/assets/js/TweenMax.min.js';
    import {IndexTotal_membership,} from '@/assets/js/api'   /*引用 首页 接口*/

    export default {
        name: "Home",
        data() {
            return {

                swiper:{
                    swiperWid:'',
                    swiperHei:'150',
                },

                /*轮播图*/
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],

                /*四大导航*/
                indexNav:[
                    {id:'1',url:'/loanList2',name:'快问',icon:'1'},
                    {id:'2',url:'/index',name:'22',icon:'2'},
                    {id:'3',url:'/index',name:'333',icon:'3'},
                    {id:'4',url:'/index',name:'444',icon:'4'},
                ],

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

                /*热门信用卡*/
                cardArr:[
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'中信信用卡',
                        maxQuota:'8倍积分回馈',
                    },
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'站上信用卡',
                        maxQuota:'首年免免费',
                    },
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'中信信用卡',
                        maxQuota:'8倍积分回馈',
                    },
                    {
                        url:'loanArr1',
                        img:require('@/assets/img/guangfa.png'),
                        title:'平安信用卡',
                        maxQuota:'各种福利卡',
                    },
                ],

                swiperOption: {
                        width:'140',
                        height:'100',
                        keyboard : true,
                        virtualTranslate : true,
                        observer:true, //修改swiper自己或子元素时，自动初始化swiper
                        observeParents:true,//修改swiper的父元素时，自动初始化swiper
                        // on:{
                        //     setTranslate: function(){
                        //         this.$wrapperEl.transition('');
                        //         TweenMax.to(this.$wrapperEl, 0.1, {x:this.translate, ease:Power4.easeOut})
                        //
                        //     }
                        // },
                },
            }
        },
        methods: {
            /*获取屏幕宽度 然后传给swiper*/
            getClientWidth(){
                let clientWidth = document.body.clientWidth;
                let swiperWid = clientWidth /4 + clientWidth / 6;
                this.swiperWid = swiperWid;
            },

            /*获取 列表 数据*/


            /*去贷款列表页*/
            goLoan(){
                this.$router.push({
                    path:'/loanList'
                })
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


        }
    }
</script>

<style lang="scss">
    @import '~@/assets/css/home.scss';

</style>



<!--大数据-->
<!-- <ul class="data scrollX">
     <li v-for="(item,index) in dataArr" :key="'vip'+index" class="vip-item" :class="item.bgColor">
         <div :data-href="item.url">
             <div><van-icon :name="item.icon" />{{item.name}}</div>
             <div>{{item.subTitle}}</div>
         </div>
     </li>
 </ul>-->