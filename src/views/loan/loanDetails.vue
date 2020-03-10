<template>
    <div class="main">

        <van-slider v-model="loanProess" :step="10" />
{{loanProess}}


        <div style="height: 100px;"></div>

        <van-circle
                v-model="loanProess"
                :rate="rate"
                :stroke-width="60"
                text="宽度定制"
        />
    </div>
</template>

<script>
    export default {
        name: "loanList",
        data() {
            return {
               
                rate:'50',

                loanProess:50,  //进度条
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