<template>
    <div>
        <div class="guide-box"></div>

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


        <div class="guide-lately">近期前三条历史匹配结果</div>

        <van-cell title="2020-03-26 17:45 | 信用贷款 | 匹配4个产品" is-link/>

    </div>
</template>
import {getHistoryList} from '@/assets/js/api' /*引用 接口*/

<script>
    export default {
        name: "matchGuide",
        data() {
            return {}
        },
        methods: {
            getHistoryList() {
                getHistoryList().then(res => {
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                })
            },
        },
        created() {

        },
    }
</script>

<style lang="scss">
    .guide-box {
        width: 100%;
        margin-top: -100px;
        height: 280px;
        background: #8705f0;
        background: linear-gradient(to bottom right, #4dbef2, #4dbef2);
        border-radius: 100% / 50%;
    }

    .guide-content {
        width: 92%;
        height: 3rem;
        background-color: #fff;
        border-radius: 4px;
        margin: 0 auto;
        position: relative;
    }

    .guide-logo {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        border: solid 1px red;
        position: absolute;
        top: -.4rem;
        left: calc(50% - .4rem);
    }

    .guide-nav {
        /*display: flex;*/
        /*justify-content: space-between;*/
        width: 60%;
        margin: 1rem auto .4rem;
        /*border: solid;*/
        span {
            text-align: center;
            width: 50%;
            margin-top: .1rem;
            display: inline-block;
        }
    }

    .btnGoMatch {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        margin: .4rem auto;
        display: block;
        background-color: #ffa300;
        color: #fff;
    }

    .guide-lately {
        width: 92%;
        margin: .1rem auto;
        background-color: #fff;
        border-right: 6px;
        text-align: center;
        padding: 3px 0;
    }

</style>