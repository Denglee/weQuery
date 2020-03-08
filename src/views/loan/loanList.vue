<template>
    <div class="main">
        <van-row gutter="12">
            <van-col span="8" v-for="(item,index) in loanArr" :ket="index">
                <div  class="fire-list">
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
    export default {
        name: "loanList",
        data() {
            return {
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
        methods: {},
        created() {

        },
    }
</script>

<style lang="scss">
    @import '~@/assets/css/index.scss';
</style>