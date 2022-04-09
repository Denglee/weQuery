<template>
	<div class="main-width21">
<!--		<div class="guide-lately">近期前三条历史匹配结果</div>-->
<!--        {{ matchResArr }}-->

        <ul class="matchRes-ul" name="math2" v-if="matchResArr.length > 0">
            <li v-for="(item,index) in matchResArr" :key="index" @click="goMatchRes(item)">
                <!--                   {{item.queryTime | minuteFormat}}  |  信用贷款 | 匹配{{matchResArr.length}}个产品-->
                {{ item.queryTime | minuteFormat }} | 信用贷款 | 匹配{{ item.num }}个产品
                <van-icon name="arrow" />
            </li>
        </ul>
        <div v-else class="no-data">暂无匹配数据</div>

	</div>
</template>

<script>
import {  getHistoryProductConditionListApi, getAllHistoryListApi } from "@/assets/js/api";

import { userInfo } from "@/assets/js/userInfo";
export default {
	name: "mathHistory",
	data() {
		return {
            /*匹配方案*/

            matchResArr: [],
            nickname: "",
            openid: "",

            matchRes2Arr2: [],
			userInfo:userInfo,
		};
	},
	methods: {
        /*匹配方案*/
        getHisList() {
            getAllHistoryListApi({
                staffNo: this.openid,
                // staffName: this.nickname
            }).then(res => {
                console.log(res);
                if (res.status == "success") {
                    this.matchResArr = res.data;
                }
            }).catch(res => {
                console.log(res);
            });
        },
        goMatchRes(val) {
            let historyId = val.id;
            console.log(historyId);
            this.$router.push({
                name: "mathHistoryInfo"//跳转到新界面，路由变化
            });
            localStorage.setItem("historyId", historyId);
        },


		/*去匹配结果*/
        goMatch2Res2(val) {
			let historyId = val.id;
			console.log(historyId);
			this.$router.push({
				name: "mathHistoryInfo"//跳转到新界面，路由变化
			});
			localStorage.setItem("historyId", historyId);
		},
		
		/*用户匹配清单列表*/
		fnGetHistoryList() {
			getHistoryProductConditionListApi({
				staffNo: this.openid,
			}).then(res => {
                if(res.status == 'success'){
                    this.matchRes2Arr2 = res.data;
                }
				// console.log(res);

				// const dataArr = res.data[0];
				// const dataArrParse = Object.keys(dataArr);
				// // console.log(dataArrParse);
				// dataArrParse.forEach(item=>{
				// 	console.log(item);
				// 	this.userInfo[item]?.forEach(item2 => {
				// 		if(item == this.userInfo[item]){
				// 			console.log(item2);
				// 		}
				// 	})
				// 	// console.log(dataArr[item]);
				// })
				
				
				// this.userInfo.map(item => {
				// 	console.log(item);
				// })
			});
		},

	},
	created() {

        const ls = new this.GLOBAL.FnStorage();
        const nickname = ls.getItem("nickname");
		console.log(nickname);
		
        this.nickname = nickname || "木子";



		const openid = (ls.getItem('openid2'));
		console.log(openid);
		this.openid = openid; //oLbgO1c4yIX3NGANptTR76rV8ql4 (wq), oLbgO1Qu4uJHnyqDj245KanmDre4 (ld)

        this.getHisList();
	}
};
</script>
<style scoped lang="scss">
.matchRes-ul{
    //min-height: calc(100vh - 110px);
    //overflow: auto;
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-bottom: solid 1px #ddd;
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        &:last-child{
            border: 0;
        }
    }
}
.mathRes-note{
    font-size: 12px;
    color: gray;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 10px;
}
</style>
