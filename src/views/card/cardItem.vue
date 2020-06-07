<template>
    <div class="loan-main main">

        <!--<van-tabs  v-model="activeTab"  @click="changeTab" animated swipeable type="card" id="loanTabs">
            <van-tab  v-for="(item,index) in navArr" :key="index" :title="item.name"
                      class="loan-tab">

            </van-tab>
        </van-tabs>-->

        <div  id="loanTabs">
            <van-row  v-if="loanArr.length == 0">
                <van-col>暂无数据</van-col>
            </van-row>
            <van-row gutter="12" v-else>
                <van-col span="8" v-for="(item,index) in loanArr" :ket="index">
                    <div  class="fire-list" @click="goLoanDetails(item)">
                        <van-image :src="item.ioc" alt="" class="fire-img"></van-image>
                        <div class="fire-title">{{item.name}}</div>
                        <div class="fire-month">{{item.label}}</div>
                        <van-button type="default" size="mini" class="btnLook-fire">申请</van-button>
                    </div>
                </van-col>
        </van-row>
        </div>

    </div>
</template>

<script>

    import {getAllCard , getByProdType} from '@/assets/js/api' /*引用  接口*/
    export default {
        name: "cardItem",
        data() {
            return {
                activeTab:0,
                loanIndex : 0, //nav选中

                swiper:{
                    swiperWid:'',
                    swiperHei:'50',
                },

                /*导航*/
                navArr:[
                    // 1.银行信贷，2.机构信贷，3.小额贷款，4.企业贷款，5.抵押贷款，6.线上急融
                    {id:'1',name:'银行信贷'},
                    {id:'2',name:'机构信贷'},
                    {id:'3',name:'小额贷款'},
                    {id:'4',name:'企业贷款'},
                    {id:'5',name:'抵押贷款'},
                    {id:'6',name:'线上急融'},
                ],

                /*传详情页值*/
                prodArr:{
                    prodType:1,   //分类
                    prodId:0,     //id
                },


                /*热门贷款*/
                loanArr:[],
                // loanArr:this.GLOBAL.LoanDetailsArr.data,

            }
        },
        methods: {

            /*获取 数据 接口*/
            getByProdType(){
                getAllCard({
                    prodType:this.prodArr.prodType,
                }).then(res =>{
                    console.log(res.data);
                    if(res.status == 'success'){
                        this.loanArr = res.data;
                    }else{
                        this.loanArr= '';
                    }
                }).catch(res =>{
                    console.log(res);
                })
            },


            /*去贷款详情页*/
            goLoanDetails(val){

                let url = 'http://' + val.url;
                console.log(url);
                window.location.href = url;
                // this.$router.push({
                //     path:'/loanDetails',
                //     params: {'prodArr':this.prodArr}
                // })
            },
        },

        created() {
            // this.getClientWidth();

            this.getByProdType();  //获取分类

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

