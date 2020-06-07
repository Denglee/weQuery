<template>
    <div class="guide-box">
        <div class="guide-topBg"></div>

        <div class="guide-content">
            <img src="@/assets/img/guangfa.png" alt="" class="guide-logo">
            <div class="guide-nav">
                <span>银行产品</span>
                <span>机构产品</span>
                <span>妙处方案</span>
                <span>精确匹配</span>
            </div>
            <button @click="$emit('showMatch')" class="btnGoMatch">去匹配</button>
        </div>

        <div class="main-width">
            <div class="guide-lately">近期前三条历史匹配结果</div>
            <ul class="matchRes-ul">
               <li v-for="(item,index) in matchResArr" :key="index">
                   <router-link :to="{name: 'matchResult', params: {'prodArr':item.id }}"  :data="item.id">
                       {{item.queryTime | minuteFormat}}  |  信用贷款 | 匹配{{item.num}}个产品
                       <van-icon name="arrow" />
                   </router-link>
               </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { getHistoryList } from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchGuide",
        data() {
            return {
                matchResArr:{},
            }
        },
        methods: {
            getHisList() {
                console.log(this.matchResArr);
                getHistoryList({
                    staffNo:11,
                    staffName:'姚明',
                }).then(res => {
                    console.log(res);
                    this.matchResArr  = res.data;
                }).catch(res => {
                    console.log(res);
                })
            },
        },
        created() {
            this.getHisList();
        },
    }
</script>
