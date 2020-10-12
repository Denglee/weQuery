<template>
    <div class="guide-box">
        <div class="guide-topBg"></div>

        <div class="guide-content">
            <img src="@/assets/img/myCode2.png" alt="" class="guide-logo">
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
<!--            <div class="matchRes-ul" v-if="matchResArr.length == 0">-->
<!--                <li style="font-size: 12px;color: gray;text-align: center;">暂无数据</li>-->
<!--            </div>-->
            <ul class="matchRes-ul">
               <li v-for="(item,index) in matchResArr" :key="index" @click="goMatchRes(item)">
                   {{item.queryTime | minuteFormat}}  |  信用贷款 | 匹配{{item.num}}个产品
                   <van-icon name="arrow" />
               </li>
            </ul>
            <div style="font-size: 12px;color: gray;text-align: center;margin-top: 10px;">该服务由微信公众平台·节融·提供</div>
        </div>
    </div>
</template>

<script>
    import { getHistoryList } from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchGuide",
        data() {
            return {
                matchResArr:[],

                /*nickname:'木子',
                openid:'oLbgO1Qu4uJHnyqDj245KanmDre4',*/

                nickname:'',
                openid:'',
            }
        },
        methods: {
            getHisList() {
                console.log(this.matchResArr);
                getHistoryList({
                    staffNo:this.openid,
                    staffName:this.nickname,
                }).then(res => {
                    console.log(res);
                    if(res.status == 'success'){
                        this.matchResArr  = res.data;
                    }
                }).catch(res => {
                    console.log(res);
                })
            },
            goMatchRes(val){
                let historyId = val.id;
                console.log(historyId);
                this.$router.push({
                    name: "matchResult",//跳转到新界面，路由变化
                });
                localStorage.setItem('historyId',historyId);
            },


        },
        created() {

	        const ls = new this.GLOBAL.FnStorage();
	        const nickname = ls.getItem('nickname');
	        const openid = ls.getItem('openid2');

	        /*// let openid = localStorage.getItem('openid');
	        // let nickname = localStorage.getItem('nickname');*/
	        this.nickname = nickname || '姚明';
	        this.openid = openid || '11';

            this.getHisList();


        },
    }
</script>
