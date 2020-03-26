<template>
    <div class="main">

        <!--银行信息-->
        <div class="detail-item detail-header">
            <div class="dHeader-img">
                <span class="dHeader-tip" v-if="detailsArr.id == 1">银行信贷</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 2">机构信贷</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 3">小额贷款</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 4">企业贷款</span>
                <span class="dHeader-tip" v-else-if="detailsArr.id == 5">抵押贷款</span>
                <span class="dHeader-tip" v-else>线上急融</span>
                <van-image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/029a2245173731f649a7fea19c7ff2f7_121_121.jpg"  fit="cover"/>
            </div>
            <div class="dHeader-info">
                <h4 class="dHeader">{{detailsArr.name}}</h4>
                <div class="dHeader-good">
                    <span v-for="(good2,index2) in detailsArr.label2List" :key="index2">
                        {{good2.name}}
                    </span>
                </div>
                <div class="dHeader-good2">
                    <span v-for="(good,index) in detailsArr.labelList" :key="index">
                        {{good.name}}
                    </span>
                </div>
            </div>
        </div>

        <!--变换-->
        <div class="detail-item detail-header">

            <div>
                 <span v-for="(qsList,index) in detailsArr.qsList" :key="index">
                        {{qsList.name}}
                    </span>
            </div>
        </div>

        <!--办理条件-->
        <div class="detail-item" v-show="detailsArr.bltjList.length > 0">
            <h4 class="Ditem-title">办理条件</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.bltjList[0].name}}</b>
                {{ detailsArr.bltjList[0].nameValue}}
            </div>
        </div>

        <!--所需资料-->
        <div class="detail-item" v-show="detailsArr.sxzlList.length > 0">
            <h4 class="Ditem-title">所需资料</h4>
            <div class="Ditem-info">
                {{detailsArr.sxzlList[0].name}}
            </div>
        </div>

        <!--办理流程-->
        <div class="detail-item" v-show="detailsArr.bllcList.length > 0">
            <h4 class="Ditem-title">办理流程</h4>
            <div class="Ditem-info">
                {{detailsArr.bllcList[0].name}}
            </div>
        </div>

        <!--其他信息-->
        <div class="detail-item" v-show="detailsArr.ohterInfoList.length > 0">
            <h4 class="Ditem-title">其他信息</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.ohterInfoList[0].name}}</b>
                {{detailsArr.ohterInfoList[0].nameValue}}
            </div>
        </div>

        <!--征信要求-->
        <div class="detail-item" v-show="detailsArr.zxyqList.length > 0">
            <h4 class="Ditem-title">征信要求</h4>
            <div class="Ditem-info">
                <b>{{detailsArr.zxyqList[0].name}}</b>
                {{detailsArr.zxyqList[0].nameValue}}
            </div>
        </div>

        <!--免责声明-->
        <div class="detail-item" v-show="detailsArr.mzsmList.length > 0">
            <h4 class="Ditem-title">免责声明</h4>
            <div class="Ditem-info">
                {{detailsArr.mzsmList[0].name}}
            </div>
        </div>
    </div>
</template>

<script>
    import {getAllType , getByProdType,getProdDetail} from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "loanList",
        data() {
            return {
                hide:false,
                show:true,
                /*分类*/
                prodArr:{
                    prodType:1,   //分类
                    prodId:1,     //id
                },

                // detailsArr:[],
                detailsArr:this.GLOBAL.LoanBankInfo.data,
            }
        },
        methods: {
            /*获取 数据 接口*/
            getProdDetail(){
                getProdDetail(this.prodArr).then(res =>{
                    console.log(res.data);
                    if(res.status == 'success'){
                        this.detailsArr = res.data;
                    }else{
                        this.loanArr= '';
                    }
                }).catch(res =>{
                    console.log(res);
                })
            },
        },
        created() {
            let prodArr = this.$route.query.prodArr;
            console.log(prodArr);
            if(!prodArr){
                this.prodArr = prodArr;
            }

            // this.getProdDetail();

            console.log(this.detailsArr);
        },
    }
</script>

