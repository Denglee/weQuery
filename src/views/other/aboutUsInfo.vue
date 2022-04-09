<template>
<!--        {{ userInfoObj }}-->
<!--        <div class="userHeader-box">-->
<!--            <img :src="userInfoObj.headimgurl || userHeader" alt="" class="img-userHeader">-->
<!--            <div>-->
<!--                <div class="user-name">{{ userInfoObj.accountName }}</div>-->
<!--                <div class="user-tel">{{ userInfoObj.label }}</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="userinfo-motto">-->
<!--            <h4>专员简介</h4>-->
<!--            <div>{{ userInfoObj.motto }}</div>-->
<!--        </div>-->
<!--    </div>-->

    <div class="user-box">
        <div class="userHeader-box">
            <img :src="userInfoObj.imageUrl || userHeader" alt="" class="img-userHeader">
            <div>
                <div class="user-name">{{ userInfoObj.accountName }}</div>
                <div class="user-tel">{{ userInfoObj.label }}</div>
                <div class="user-tel">{{ userInfoObj.motto }}</div>
            </div>
        </div>

        <div class="user-nav-box">
            <h4>专员简介</h4>
            <div>{{ userInfoObj.personalProfile }}</div>

            <div class="user-wxQrUrl" v-if="userInfoObj.wxQrUrl">
                <img :src="userInfoObj.wxQrUrl" alt="" class="img-userHeader">
            </div>
        </div>

        <div class="btn-manager">
            <input id="copy" :value="wxNumber" style="display: none;"></input>
            <van-button @click="fnGetWxNo(userInfoObj)" class="btn-wxno" size="mini">微信号</van-button>

	        <div v-if="userInfoObj.showBindingBtn" style="width: 33.33%;margin:0 2px;">
		        <van-button @click="fnBind(userInfoObj)" class="btn-bind" size="mini"
                            style="width: 100%; border: solid 1px #ffa300;">绑定专员</van-button>
	        </div>
           
            <div class="btn-request">
                <a :href="`tel:${userInfoObj.phone}`" >
                    <i class="van-icon van-icon-phone-o" />
                    联系专员</a>
            </div>

        </div>
    </div>
</template>

<script>
import {getAttendantDetailApi,  registerMemberApi, getAttendantInfoApi} from "../../assets/js/api";

export default {
    name: "aboutUsInfo",
    data() {
        return {
            userHeader: require("@/assets/img/userHeader2.svg"),
            userInfoObj: {
                "id": 23,
                "accountName": "test1214",
                "accountPassword": "123456",
                "name": "测试1214",
                "phone": "",
                "wxNumber": "微信号",
                "wxQrUrl": "http://8.129.189.135:8090/cc/uploadImg/8776cc18726d209bdfb811dbac124bcc.jpeg",
                "headUrl": "http://8.129.189.135:8090/cc/uploadImg/8776cc18726d209bdfb811dbac124bcc.jpeg",
                "imageUrl": "http://8.129.189.135:8090/cc/uploadImg/8776cc18726d209bdfb811dbac124bcc.jpeg",
                "label": "个人标签",
                "motto": "个人座右铭",
                "accountType": "2",
                "createTime": "2021-12-14T15:23:25.000+0000",
                "updateTime": "2021-12-14T15:23:25.000+0000",
                "personalProfile": "个人简介"
            } ,

            wxNumber:"",
	        openid:"",
        }
    },
    methods: {
        copyLink(){
            // var e = document.getElementById("copy");
            // console.log(e)
            // e.select(); // 选择对象
            //
            // document.execCommand("Copy"); // 执行浏览器复制命令
            // alert("内容复制成功！");

            var textArea = document.createElement("textarea");
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';

            textArea.style.opacity = '0';

            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
            textArea.value = this.wxNumber;
            document.body.appendChild(textArea);
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
                // alert(msg);
                this.$toast(msg);
            } catch (err) {
                this.$toast("该浏览器不支持点击复制到剪贴板");
                // alert('该浏览器不支持点击复制到剪贴板');
            }

        },
        fnGetWxNo(item){
            console.log(item.wxNumber);

            this.wxNumber = item.wxNumber;

            this.copyLink();
            // this.$toast(item.wxNumber);
        },
	    /*绑定*/
	    fnBind(item){
            console.log(item)
            if(item.binding){
                registerMemberApi({
                    businessAttendantId:this.businessAttendantId,
                    openid: this.openid,
                }).then(res => {
                    console.log(res);
                    if(res.status ==='success'){
                        if(res.status ==='success'){
                            this.$toast("绑定成功!");
                            this.userInfoObj.showBindingBtn = false;

                            this.fnGetPhone();
                        }
                    }
                })
            } else {
                this.$router.push({
                    path:'/registerMember',
                })
            }
	    },

        /*获取手机号码*/
        fnGetPhone(){
            getAttendantInfoApi({
                openid:this.openid,
            }).then(res => {
                if(res.status == "success"){
                    localStorage.setItem('userPhoneIndex' , res.data.phone);
                }
            })
        },

        /*获取专员信息*/
        fnGetAttendant(){
            getAttendantDetailApi({
                id: this.businessAttendantId,
                openid: this.openid,
            }).then(res => {
                console.log(res);
                if(res.status ==='success'){
                    this.userInfoObj = res.data;
                }
            })
        },
    },
    created() {
	    const ls = new this.GLOBAL.FnStorage();
	    const openid = ls.getItem("openid2");
	    this.openid = openid || "oLbgO1Qu4uJHnyqDj245KanmDre4";
		 
        const businessAttendantId = this.$route.query.businessAttendantId;
        console.log(businessAttendantId);
        this.businessAttendantId = businessAttendantId || 24;
        this.fnGetAttendant();
    },
}
</script>
<style lang="scss" scoped>
.btn-manager{
    //padding: 0 10px;

    color: #fff;
    text-align: center;
	display: flex;
}
.btn-wxno,
.btn-bind,
.btn-request{
	flex: 1;
    //width: 50%;
    height: 42px;
    line-height: 42px;
    color: #fff;
    background-color: #ffa300;

    font-size: 14px;
    display: inline-block;
}
//.btn-bind{
//	border:0;
//	//margin-left: 0 !important;
//	margin: 0 4px !important;
//}
.btn-wxno{
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border:0;
}
.btn-request{
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        .van-icon {
            font-size: 14px;
            margin-right: 4px;
        }
    }
}
.user-box {
    width: 100%;
    margin: 0 auto;
    background: #ffa300;
    //padding-top: 14px;
    height: 100%;
    min-height: 100vh;

    .user-nav-box {
        width: 100%;
        //margin-left: 0 !important;
        //margin-right: 0 !important;
        margin: 0 !important;
        background: #fff;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: calc(100vh - 194px);
        padding: 20px;
    }
    .user-wxQrUrl{
        width: 50%;
        margin:0 auto;
        padding: 10px 10px 70px;
        text-align: center;
        img{
            width: 100%;
        }
    }
}
.userHeader-box{
    display: flex;
    align-items: center;
    width: 100%;
    color: #fff;
    padding: 20px 6% 20px;
    //height: 130px;
    //background: #fff;
    //border-radius: 4px;
    .img-userHeader{
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 2px;
        margin-right: .3rem;
    }
    .user-name{
        font-weight: 500;
        margin-bottom: 6px;
        font-size: 16px;
    }
    .user-tel{
        font-size: 12px;
        margin-top: 4px;
    }
}
</style>