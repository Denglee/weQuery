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
            <van-swipe-item v-for="(image, index) in imgBanner" :key="index" @click="funSwiper(image)">
                <van-image :src="image.rotationImg"  fit="cover"/>
            </van-swipe-item>
        </van-swipe>

        <!--立即匹配贷款-->
        <div  class="index-nav-box">
            <div class="index-match">
                <div class="index-match-title">银行产品 </div>
                <van-button size="mini" class="btn-match" @click="goMatch"><h4>匹配</h4></van-button>
                <div class="index-match-title">智能匹配</div>
                <!--<div class="index-match-info">智能匹配</div>-->
            </div>

            <!--四大导航-->
            <!--四大导航-->
            <van-row gutter="14" class="index-nav-main">
                <van-col span="12" v-for="(item,index) in indexNav" :key="index">
                    <div v-if="item.id == 1 || item.id == 4 || item.id == 6" class="index-navItem" @click="goLoan(item)">
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
                <van-col span="12">
                    <div class="index-navItem">
                        <h4>
                            <h4 class="index-navTitle">联系我们</h4>
                            <div class="index-navSub"><van-icon name="phone-o" style="font-size: 20px;" /></div>
<!--                            <div class="index-navSub"></div>-->
                        </h4>
                    </div>

                    <!--<div class="index-navItem index-navItemTel" >
                        <div class="index-navTitle">
                            <h4 class="index-navTitle">联系我们</h4>
                            &lt;!&ndash;<div class="index-navSub">联系我们</div>&ndash;&gt;
                            <div class="index-navSub"><van-icon name="phone-o" /></div>

                           &lt;!&ndash; <a href="tel:15915403745" class="flex-between">
                                <div>联系我们</div>
                                <van-icon name="phone-o" />

                            </a>&ndash;&gt;
                        </div>
                    </div>-->
                </van-col>
            </van-row>

        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import TweenMax from '@/assets/js/TweenMax.min.js';
    import {IndexTotal_membership,getLunbo} from '@/assets/js/api'   /*引用 首页 接口*/

    export default {
        name: "Home",
        data() {
            return {

                swiper: {
                    swiperWid: '',
                    swiperHei: '150',
                },

                /*轮播图*/
                imgBanner: [],

                /*四大导航*/
                indexNav: [
                    {id: '1', url: '/loanList', name: '银行产品', icon: '1', sunTitle: '汇集热门银行产品', sunTitle2: ''},
                    {id: '4', url: '/loanList', name: '企业融资', icon: '2', sunTitle: '当下企业融资产品', sunTitle2: ''},
                    {id: '2', url: '/cardItem', name: '信用卡办理', icon: '3', sunTitle: '申请快人一步', sunTitle2: ''},
                    {id: '6', url: '/loanList', name: '在线急融', icon: '4', sunTitle: '最快当天放款', sunTitle2: ''},
                    {id: '7', url: '/aboutUs', name: '服务中心', icon: '5', sunTitle: '急速答疑解惑', sunTitle2: ''},
                ],
            }
        },
        methods: {
            // 轮播 点击事件
            funSwiper(val){
                console.log(val);
                this.$router.push({
                    name: "match",//跳转到新界面，路由变化
                });
            },

            /*获取屏幕宽度 然后传给swiper*/
            getClientWidth(){
                let clientWidth = document.body.clientWidth;
                let swiperWid = clientWidth /4 + clientWidth / 6;
                this.swiperWid = swiperWid;
            },


            // 轮播
            getLunboImg(){
                getLunbo().then(res=>{
                    console.log(res);
                    this.imgBanner = res.data
                }).catch(res=>{
                    console.log(res);
                })
            },

            /*去贷款列表页*/
            goLoan(item){
                console.log(item.id);
                localStorage.setItem('loanProdType',item.id);

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
            this.getLunboImg()
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