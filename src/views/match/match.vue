<template>
    <div>
        <matchGuide v-show="showState.guideShow" @showMatch="showMatch"></matchGuide>

        <div v-show="showState.matchShow">
            <van-grid>
                <van-grid-item text="基本信息" @click="infoState"/>
                <van-grid-item text="资产信息" />
                <van-grid-item text="征信信息" />
            </van-grid>

            <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs>

        </div>
    </div>
</template>

<script>
    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */

    import matchGuide from '@/components/matchGuide/matchGuide'
    export default {
        name: "match",
        data() {
            return {
                active:1;
                
                showState:{    //显影状态
                    guideShow:true,   //引导页
                    matchShow:false,  //帅选页
                }
            }
        },
        methods: {
            /*显影*/
            showMatch(){
                this.showState = {    //显影状态
                    guideShow:false,   //引导页
                    matchShow:true,  //帅选页
                }
            },

        },
        created() {
            console.log(this.userInfo);
        },
        components:{
            matchGuide,
        }
    }
</script>

<style lang="scss">

</style>