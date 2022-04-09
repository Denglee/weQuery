<template>
<!--    <div class="history-box">-->
<!--        {{ HistoryProductObj }}-->


    <van-tabs v-model="activeName">
        <van-tab title="匹配方案" name="math1">
            <matchResult></matchResult>
        </van-tab>

        <van-tab title="匹配条件"  name="math2">
            <ul class="myhistory-ul">
                    <li v-for="item in HistoryInfoObj" :key="item.label">
                        <!--               {{ HistoryProductObj[item.value] }}-->
                        <template v-if="item.value === 'age'">
                            <span class="myhistory-label"> {{ item.label }}: </span>
                            <span> {{ HistoryProductObj.age }} </span>
                        </template>
<!--                        && HistoryProductObj[item.value] != 0"-->
                        <template v-else>
                            <span class="myhistory-label"> {{ item.label }}: </span>
                            <div v-if="HistoryProductObj[item.value] != '-1'
                            && HistoryProductObj[item.value] != ''
                            && HistoryProductObj[item.value] != null
									"
                            class="myhistory-isLabel">
                                <div v-for="item2 in  userInfo[item.value]"  :key="item2.id">
                                    <span v-if="HistoryProductObj[item.value] == item2.name">{{ item2.value }}</span>
                                </div>
                            </div>
                            <div v-else>未选</div>
                        </template>

                    </li>
                </ul>
        </van-tab>
    </van-tabs>


</template>

<script>
import {getHistoryProductConditionApi} from "../../assets/js/api";
import {userInfo} from '../../assets/js/userInfo'
import matchResult from "../match/matchResult";
export default {
    name: "mathHistoryInfo",
    components:{
        matchResult
    },
    data() {
        return {
            activeName:"math1",

            myHistoryId: '',
            HistoryProductObj: {},
            userInfo:userInfo,

            HistoryInfoObj:[
                { label:"年龄", value:'age' },
                { label:"婚姻状况", value:'hyzk' },
                { label:"职业类型", value:'zylx' },
                { label:"社保", value:'sb' },
                { label:"公积金", value:'gjj' },
                { label:"车辆归属地区", value:'clgsdq' },
                { label:"车辆状态", value:'clzt' },
                { label:"车辆状态2", value:'clzt2' },
                { label:"房产信息", value:'clzt2' },
                { label:"房产状态", value:'fczt' },
                { label:"保险保单", value:'bxbd' },
                { label:"单位性质", value:'dwxz' },
                { label:"工资发放形式", value:'gzffxs' },
                { label:"平均工资", value:'pjgz' },
                { label:"本单位工作时长", value:'bdwgzsc' },
                { label:"社保基数", value:'sbjs' },
                { label:"社保缴纳时长", value:'sb_jnsc' },
                { label:"社保现单位缴纳时长", value:'sb_xdwjnsc' },
                { label:"公积金基数", value:'gjjjs' },
                { label:"公积金缴纳时长", value:'gjj_jnsc' },
                { label:"公积金现单位缴纳时长", value:'gjj_xdwjnsc' },
                { label:"营业执照年限", value:'yyzznx' },
                { label:"单位是否考察", value:'dwsfkc' },
                { label:"对公流水", value:'dgls' },
                { label:"公司开票金额", value:'gskpje' },
                { label:"公司纳税金额", value:'gsnsje' },
                { label:"房产类型", value:'fclx' },
                { label:"按揭中（月供时间）", value:'ajz' },
                { label:"按揭结清（结清时间）", value:'ajjq' },
                { label:"全款房（过户时间）", value:'qkf' },
                { label:"房龄", value:'fl' },
                { label:"按揭车（按揭时间）", value:'ajc' },
                { label:"全款车（按揭结清或过户时间）", value:'qkc' },
                { label:"车辆所有权", value:'clsyc' },
                { label:"车辆性质", value:'clxz' },
                { label:"车辆持证时间", value:'clczsj' },
                { label:"车辆归属地", value:'clgsd' },
                { label:"车龄", value:'cl' },
                { label:"交强险剩余有效期", value:'jqxsyyxq' },
                { label:"行驶公里数", value:'xsgls' },
                { label:"商业险剩余有效期", value:'syxsyyxq' },
                { label:"保险类型", value:'bxlx' },
                { label:"保险缴纳方式", value:'bxjnfs' },
                { label:"保险缴费时间", value:'bxjfsj' },
                { label:"当前小额笔数", value:'dqxebs' },
                { label:"当前消费金融笔数", value:'dqxfjrbs' },
                { label:"贷款/信用卡是否存在止付；呆账；关注等异常", value:'sfczyc' },
                { label:"当前逾期额度", value:'dqyqed' },
                { label:"近半年内有无逾期", value:'bnn_wyq' },
                { label:"近一年内有无逾", value:'ynn_wyq' },
                { label:"近两年内有无逾", value:'lnn_wyq' },
                { label:"是否使用过微粒贷", value:'sfsygwld' },
                { label:"是否有上市企业订单", value:'sfyssqydd' },
                { label:"是否高新技术企业", value:'sfgxjsqy' },
            ],
        }
    },
    methods: {
        fnGetHistoryProduct(){
            getHistoryProductConditionApi({
                historyId: this.myHistoryId,
            }).then(res => {
                if(res.status === 'success'){
                    this.HistoryProductObj = res.data;
                }
            })
        }
    },
    created() {
        const myHistoryId = localStorage.getItem('historyId');
        this.myHistoryId = myHistoryId;
        this.fnGetHistoryProduct();
    },
}
</script>
<style scoped lang="scss">
.reslist-box{
    padding: 0;
}
/deep/ .van-tabs__content{
    height: calc(100vh - 44px);
    //border: solid 1px red;
    overflow: auto;
    padding: 4%;
}
/deep/ .van-tabs__line {
    background-color: #ffa300;
}
.myhistory-ul{
    padding: 4%;
    background-color: #fff;
    li{
        display: flex;
	    align-items: center;
	    font-size: 13px;
    }
    .myhistory-label{
        margin-right: 10px;
	    color: #606266;
	    font-size: 12px;
    }
	.myhistory-isLabel{
		color: #ffa300;
	}

}
</style>