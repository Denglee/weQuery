<template>
    <div class="reslist-box">
        <!--银行信息-->
        <ul  v-for="(item,index) in detailsArr" :key="index">
            <li class="detail-item detail-header" @click="goLoanD(item)">
                    <div class="dHeader-img">
                        <span class="dHeader-tip" v-if="item.id == 1">银行信贷</span>
                        <span class="dHeader-tip" v-else-if="item.id == 2">机构信贷</span>
                        <span class="dHeader-tip" v-else-if="item.id == 3">小额贷款</span>
                        <span class="dHeader-tip" v-else-if="item.id == 4">企业贷款</span>
                        <span class="dHeader-tip" v-else-if="item.id == 5">抵押贷款</span>
                        <span class="dHeader-tip" v-else>线上急融</span>
                        <van-image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/029a2245173731f649a7fea19c7ff2f7_121_121.jpg"  fit="cover"/>
                    </div>
                    <div class="dHeader-info">
                        <h4 class="dHeader">{{item.name}}</h4>
                        <div class="dHeader-good">
                        <span v-for="(good2,index2) in item.label2List" :key="index2">
                            {{good2.name}}
                        </span>
                        </div>
                        <div class="dHeader-good2">
                        <span v-for="(good,index) in item.labelList" :key="index">
                            {{good.name}}
                        </span>
                        </div>
                    </div>

            </li>
        </ul>

    </div>
</template>

<script>
    import { getHistoryProductList } from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchResult",
        data() {
            return {
                resArr2:[],  //父级传值数组
                detailsArr:[],  //历史列表数组

                prodArr:{
                    prodType:1,   //分类
                    prodId:0,     //id
                },
            }
        },
        methods: {
            getHistoryList() {
                getHistoryProductList({
                    historyId:this.resArr2.id,
                    // historyId: 81,
                }).then(res => {
                    this.detailsArr  = res.data;
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                })
            },

            goLoanD(item){
                console.log(item);
                this.prodArr.prodType = item.prodType;   //分类
                this.prodArr.prodId = item.id;
                this.$router.push({
                    name:'loanDetails',
                    params: {'prodArr':this.prodArr}
                })
            },
        },
        created() {
            let resArr  =  this.$route.params.prodArr;
            console.log(resArr);

            if(resArr){
                this.resArr2 = resArr;
            }

            this.getHistoryList();
        },
    }
</script>
