<template>
    <div class="main">

        22222
    </div>
</template>

<script>
    import {getAllType , getByProdType} from '@/assets/js/api' /*引用 接口*/
    export default {
        name: "loanList",
        data() {
            return {
                /*分类*/
                prodArr:{
                    prodType:1,   //分类
                    prodId:0,     //id
                },
            }
        },
        methods: {
            /*获取 数据 接口*/
            getByProdType(){
                getByProdType(this.prodArr).then(res =>{
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
        },
        created() {
            let prodArr = this.$route.query.prodArr;
            if(prodArr){
                this.prodArr = prodArr;
            }


            this.getByProdType();
        },
    }
</script>

<style lang="scss">
    @import '~@/assets/css/home.scss';
</style>