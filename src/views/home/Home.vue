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
        class="index-swiper" :show-indicators="false">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image :src="image"  fit="cover"/>
            </van-swipe-item>
        </van-swipe>

        <!--立即匹配贷款-->
        <div  class="index-nav-box">
            <div class="index-match">
                <h4 class="index-match-title">一键选贷款</h4>
                <div class="index-match-info">根据个人资质智能匹配贷款方案</div>
                <van-button size="mini" class="btn-match" @click="goMatch">智能匹配</van-button>
            </div>

            <!--四大导航-->
            <van-row gutter="14" class="index-nav-main">
                <van-col span="12" v-for="(item,index) in indexNav" :key="index">
                    <div v-if="item.id == 2" class="index-navItem" @click="goLoan(item)">
                        <h4 class="index-navTitle">{{item.name}}</h4>
                        <div class="index-navSub">{{item.sunTitle}}</div>
                        <div class="index-navSub">{{item.sunTitle2}}</div>
                    </div>
                    <div class="index-navItem"  v-else>
                        <router-link :to="item.url">
                            <h4 class="index-navTitle">{{item.name}}</h4>
                            <div class="index-navSub">{{item.sunTitle}}</div>
                            <div class="index-navSub">{{item.sunTitle2}}</div>
                        </router-link>
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

                swiper: {
                    swiperWid: '',
                    swiperHei: '150',
                },

                /*轮播图*/
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],

                /*四大导航*/
                indexNav: [
                    {id: '1', url: '/loanList', name: '银行产品', icon: '1', sunTitle: '近期最新银行政策', sunTitle2: '让您抢先一步'},
                    {id: '2', url: '/loanList', name: '在线急融', icon: '2', sunTitle: '汇集先上银行产品', sunTitle2: '线上申请'},
                    {id: '3', url: '/cardItem', name: '办卡信用', icon: '3', sunTitle: '高额度当天下午', sunTitle2: ''},
                    // {id: '3', url: '/index', name: '办卡信用', icon: '3', sunTitle: '高额度当天下午', sunTitle2: ''},
                    // {id: '4', url: '/aboutUs', name: '服务中心', icon: '4', sunTitle: '24小时客服在线', sunTitle2: '急速答疑解惑'},
                    {id: '4', url: '/index', name: '服务中心', icon: '4', sunTitle: '24小时客服在线', sunTitle2: '急速答疑解惑'},
                ],
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
            goLoan(item){
                console.log(item)
                this.$router.push({
                    name:'loanList',
                    params:{'indexLoan':item},
                })
            },

            /*去贷款列表页*/
            goMatch(){
                this.$router.push({
                    path:'/match'
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




<!--大数据-->
<!-- <ul class="data scrollX">
     <li v-for="(item,index) in dataArr" :key="'vip'+index" class="vip-item" :class="item.bgColor">
         <div :data-href="item.url">
             <div><van-icon :name="item.icon" />{{item.name}}</div>
             <div>{{item.subTitle}}</div>
         </div>
     </li>
 </ul>-->