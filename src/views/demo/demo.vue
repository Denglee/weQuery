<template>
    <div>
        <div>
            <van-swipe :loop="false" :show-indicators="false" :width="swiperWid" :height="swiperHei" >
                <van-swipe-item v-for="(item,index) in dataArr" :key="index" @click="swiper(item)">
                    {{item.id}}
                </van-swipe-item>
            </van-swipe>
        </div>


        <div class="pic-content">
            <ve-ring :data="totalVipNum"
                    :legend-visible="false"
                    :colors="totalColor"
                    :style="picStyle"
                    :settings="ringSettings"></ve-ring>
        </div>

        <div style="width: 80%;margin: 40px auto;">

            {{totalVipNum.rows[0].value}}
            <van-slider v-model="totalVipNum.rows.value" @change="changeVal" :max="50"/>
        </div>

        <div v-for="(item,index) in periods" :key="index" @click="changePeriods(item)">
            {{item.period}}
        </div>

        <van-radio-group v-model="radio" @change="changeRadio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>

    </div>
</template>

<script>
    import {getAllType} from '@/assets/js/api' /*引用 会员总览 接口*/

    export default {
        name: "demo",
        data() {
            this.totalColor = ['#4CCBEB', '#005AD4','#ffa300','#ff342e']; //会员总览 潜在会员 自定义的颜色
            return {
                swiperWid:'',
                swiperHei:'50',

                radio: '1',

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


                picStyle: {
                    height: '180px',
                    width: '180px',
                },
                ringSettings : {
                    offsetY: 100,
                    offsetX: 10,
                    radius: ['55%', '75%'],
                    label: {
                        normal: {
                            position: 'inner',
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                },
                picSettings : {
                    offsetY: 100,
                    offsetX: 10,
                    radius: ['55%', '75%'],
                    label: {
                        normal: {
                            position: 'inner',
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                },

                totalVipNum: {
                    columns: ['name', 'value'],
                    rows: [
                        {name:'总',value:5},
                        {name:'月',value:0.23},
                        {name:'利',value:0.5},
                        {name:'手',value:0}],
                },

                periods:[
                    {id:1,period:'12',name:"12期"},
                    {id:2,period:'24',name:"24期"},
                    {id:3,period:'36',name:"36期"},
                    {id:4,period:'48',name:"48期"},
                ],
            }
        },
        methods: {

            changeRadio(value){
              console.log(value);
            },

            /*获取屏幕宽度 然后传给swiper*/
            getClientWidth(){
                let clientWidth = document.body.clientWidth;
                let swiperWid = clientWidth /4 + clientWidth / 6;
                this.swiperWid = swiperWid;
            },

            // 轮播点击事件
            swiper(item){
                console.log(item);
            },

            // 期数点击
            changePeriods(item){
                console.log(item);
                if( item.period == '12'){
                    console.log('12')
                    this.totalVipNum.rows[0].value = 10;
                    this.totalVipNum.rows[1].value = 0.44;
                    this.totalVipNum.rows[2].value = 0.4;
                    this.totalVipNum.rows[3].value = 0.00;
                }
                if( item.period == '24'){
                    console.log('12')
                    this.totalVipNum.rows[0].value = 20;
                    this.totalVipNum.rows[1].value = 0.55;
                    this.totalVipNum.rows[2].value = 0.4;
                    this.totalVipNum.rows[3].value = 0.00;
                }
                if( item.period == '36'){
                    console.log('12')
                    this.totalVipNum.rows[0].value = 30;
                    this.totalVipNum.rows[1].value = 0.77;
                    this.totalVipNum.rows[2].value = 0.4;
                    this.totalVipNum.rows[3].value = 0.00;
                }
                if( item.period == '48'){
                    console.log('12')
                    this.totalVipNum.rows[0].value = 40;
                    this.totalVipNum.rows[1].value = 0.99;
                    this.totalVipNum.rows[2].value = 0.4;
                    this.totalVipNum.rows[3].value = 0.00;
                }
            },

            // 滑块点击
            changeVal(val){
                console.log(val);
                this.totalVipNum.rows[0].value = val;
            },

            /*全部接口*/
            getAllType(){
                getAllType().then(res =>{
                    console.log(res);
                }).catch(res =>{
                    console.log(res);
                })
            }
        },
        created() {
            this.getClientWidth();

            this.getAllType()
        },
    }
</script>

<style lang="scss">

</style>