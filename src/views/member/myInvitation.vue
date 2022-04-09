<template>
    <div class="">
<!--        {{ myMemberObj }}-->

        <ul class="about-box" v-if="myMemberObj.length >> 0">
            <li class="about-list" v-for="(item, index) in myMemberObj" :key="index"
                @click="fnGoAboutUserInfo(item)">
                <div style="display: flex;justify-content:space-between;align-items: center;">
                    <div class="userHeader-box">
                        <img :src="item.headimgurl" alt="" class="img-userHeader">
                        <div>
                            <div class="user-name">{{ item.nickname }}</div>
                            <div class="user-info ">
                                <span v-if="item.sex == 0 ">性别：女</span>
                                <span v-if="item.sex == 1 ">性别：男</span>
                                <span>城市：{{ item.city }}</span>
                            </div>
<!--                            <div class="color-Gray2 user-work">城市：{{ item.city }}</div>-->
                        </div>
                    </div>
<!--                    <van-button class="btn-info" size="mini" >查看详情</van-button>-->
                </div>

            </li>

        </ul>

        <div v-else class="no-data">暂无邀请</div>

    </div>
</template>

<script>
import { getMemberListApi,
} from "@/assets/js/api"; /*引用 接口*/
export default {
    name: "myInvitation",
    data() {
        return {
            myMemberObj:[], /*我的邀请*/
            openid:'',
        }
    },
    methods: {
        fnGoAboutUserInfo(){

        },

        /*获取我的邀请*/
        fnGetMyInvitation() {
            getMemberListApi({ openid: this.openid }).then(res => {
                console.log(res);
                if(res.status == 'success'){
                    this.myMemberObj = res.data || [];
                }
            });
        },
    },
    created() {
	    const ls = new this.GLOBAL.FnStorage();
        this.openid = ls.getItem('openid2') || "oLbgO1Qu4uJHnyqDj245KanmDre4";
	    console.log(this.openid);
        this.fnGetMyInvitation();
    },
}
</script>

<style lang="scss" scoped>
/*1121*/
.about-box{
    //border-radius: 4px;
    background: #fff;
    //width: 92%;
    margin: 0 auto;
    .about-list{
        width: 100%;
        padding: 12px;
        border-bottom: solid 1px #DDDFE3;
        &:last-child{
            border-bottom: 0;
        }
    }
    .img-userHeader{
        height: .5rem;
        width: .5rem;
        border-radius: 50%;
        margin-right: .1rem;
    }
    .user-name{
        margin-bottom: 4px;
        font-size: 16px;
        color: #333;
    }
    .user-info{
        height: 16px;
        line-height: 16px;
        span:first-child{
            border-right: 1px solid #ddd;
            padding-right: 8px;
            margin-right: 10px;
            height: 16px;
        }
    }
    .user-work{
        font-size: 12px;
        margin-top: 2px;
    }
    .userHeader-box{
        //background: #fff;
        //color: #000;
        display: flex;
        align-items: center;
    }

    .btn-info{
        border: solid 1px #ffa300;
        border-radius: 20px;
        color: #ffa300;
        padding: 0 10px;
    }
}
</style>