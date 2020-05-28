<template>
    <div class="reslist-box">
        <!--银行信息-->
        <div class="inp">
            <input type="text" placeholder="贷款年限">
            <input type="text"  placeholder="利息" class="inp2">
        </div>
        <div class="sel">
            <select name="" id="sd">
                <option value="">信用贷款</option>
            </select>
            <select name="" id="sds">
                <option value="">当天方框</option>
            </select>
            <select name="" id="sdsd" class="sel2">
                <option value="">等额本息还款</option>
            </select>
        </div>

        <van-button type="default" size="small" class="btn">搜索</van-button>



        

<!--        <van-field-->
<!--                v-model="matchFoam.loan_type_detail"-->
<!--                name="matchFoam.loan_type_detail"-->
<!--                placeholder="用户名"-->
<!--        />-->

<!--        <van-picker-->
<!--                title="标题"-->
<!--                show-toolbar-->
<!--                :columns="columns"-->
<!--                @confirm="onConfirm"-->
<!--                @cancel="onCancel"-->
<!--                @change="onChange"-->
<!--        />-->

    </div>
</template>

<script>
    import { getMatchProductList } from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "matchResult",
        data() {
            return {
                resArr2:[],  //父级传值数组
                detailsArr:[],  //历史列表数组
                columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],

                matchFoam:{
                    loan_type_detail:'',
                    loan_years:'',
                    loan_time_limit:'',
                    loan_mode:'',
                    interest:'',
                },

                prodArr:{
                    prodType:1,   //分类
                    prodId:0,     //id
                },
            }
        },
        methods: {
            getHistoryList() {
                getMatchProductList({
                    historyId:this.resArr2.id,
                    // historyId: 81,
                }).then(res => {
                    this.detailsArr  = res.data;
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                })
            },

            onConfirm(value, index) {
                Toast(`当前值：${value}, 当前索引：${index}`);
            },
            onChange(picker, value, index) {
                Toast(`当前值：${value}, 当前索引：${index}`);
            },
            onCancel() {
                Toast('取消');
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

<style lang="scss">
    .inp{
        input{
            width: 46%;
            margin-right: 6%;
            padding: 4px;
            border-radius: 4px;
        }
        .inp2{
            margin: 0;
        }
    }
    .sel{
        margin-top: 10px;
        select{
            width: 30%;
            margin-right:4% ;
            padding:6px 0;
            border: none;
            border-radius: 4px;
        }
        .sel2{
            margin: 0;
        }
    }

    .btn{
        width: 100%;
        margin-top: 10px!important;
        border-radius: 4px;
    }

</style>