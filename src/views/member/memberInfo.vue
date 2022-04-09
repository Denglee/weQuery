<template>
    <div class="user-box">
        <div class="userHeader-box2">
            <div class="userHeader-box-top">
                <img :src="memberInfoObj.headimgurl || userHeader" alt="" class="img-userHeader">
                <div>
                    <div class="user-name">{{ memberInfoObj.nickname }}</div>
                    <div class="user-tel">{{ memberInfoObj.phone }}</div>
                    <div class="user-bank" v-if="memberInfoObj.isBlank == 1 ">银行信息：{{ memberInfoObj.bankRegion }} - {{ memberInfoObj.bankName }}</div>
                    <div>生日：{{ memberInfoObj.birthday }}</div>
                </div>
            </div>
        </div>

        <div class="user-nav-box">
            <van-row gutter="14" class="user-navUl">
                <van-col span="8" v-for="(item,index) in userNav" :key="index"
                         @click="fnGoPath(item)">
                    <div v-if=" item.name == '我的邀请' || item.name == '一键分享' ">
                        <div v-if="memberInfoObj.proxy === 1" class="user-navUl-li">
                            <van-icon :name="item.icon" class="icon-user" :style="{color: item.color}"  />
                            <h4 class="user-navTitle">{{ item.name }}</h4>
                        </div>
                    </div>

                    <div v-else class="user-navUl-li">
                        <van-icon :name="item.icon" class="icon-user" :style="{color: item.color}"/>
                        <h4 class="user-navTitle">{{ item.name }}</h4>
                    </div>
                </van-col>
            </van-row>

            <ul class="user-subNav">
<!--                proxy是否是代理人，1是代理人-->
                <li v-for="(item,index) in userSubNav" :key="index" @click="fnGoPath(item)">
                    <div   v-if="item.name == '代理人说明'" >
                        <div v-if="memberInfoObj.proxy == 1" class="user-subNav-item">
                            <van-icon :name="item.icon" class="icon-user"/>
                            <div class="user-note">{{ item.name }}</div>
                        </div>
                    </div>
                    <div v-else class="user-subNav-item">
                        <van-icon :name="item.icon" class="icon-user"/>
                        <div class="user-note">{{ item.name }}</div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {
    getHistoryProductConditionApi, getHistoryProductConditionListApim,getMemberDetailApi,getSignature
} from "@/assets/js/api"; /*引用 接口*/
export default {
    name: "memberInfo",
    data() {
        return {
            formGetMember: {
                pageNum: 10, //页码
                pageSize: 1, // 页数
                nickName: "木子",//微信昵称（可以为空，用作条件查询用）
                memberType: 1 //  会员类型（传类型编码）  1、一般会员2、青铜会员3、白金会员4、钻石会员
            },
            openid:"" ,
            userNav:[
                { name: "匹配记录", icon: "todo-list-o", color:"#e5ae6c" , url:'mathHistory'},
                { name: "我的订单", icon: "coupon-o", color:"#21bcfb", url:'myOrder' },
                { name: "我的专员", icon: "user-o", color:"#ffa300", url:'aboutUsInfo' },
                { name: "我的邀请", icon: "user-o", color:"#ffa300", url:'myInvitation' },
                { name: "历史订单", icon: "notes-o", color:"#005ad4", url:'historicalOrder' },
                { name: "一键分享", icon: "shop-collect-o", color:"#fa4f4d",url:'share' },
            ],
            userSubNav:[
                { name: "抵押业务流程", icon: "records", color:"#e5ae6c", url:'businessProcessDescription' },
                { name: "征信查询指引", icon: "comment-o", color:"#e5ae6c", url:'businessProcessDescription1' },
                { name: "评估价查询", icon: "notes-o", color:"#e5ae6c", url:'businessProcessDescription2' },
                { name: "代理人说明", icon: "user-o", color:"#e5ae6c", url:'agentDescription' },
	            { name: "节融平台申明", icon: "newspaper-o", color:"#e5ae6c", url:'platformDescription' },
            ],
            userHeader: require("@/assets/img/userHeader2.svg"),
            memberInfoObj: {},

        };
    },
    methods: {

	    /*页面跳转*/
        fnGoPath(item){
            console.log(item);
            if(item.name =='一键分享'){
	            console.log(this.$route.query.proxyOpenid);
					// return
	            this.$router.push({
		            path: '/' + item.url,
		            query:{
			            proxyOpenid: this.$route.query.proxyOpenid,
		            }
	            })
            }
            else if(item.name =='征信查询指引'){
	            window.location.href = "http://www.jierong123.com/dist/other/creditAddress.html"
            }
            else if(item.name =='评估价查询'){
	            window.location.href = "http://m.bendibao.com/mtools/search/?id=563"
            }
            else if(item.name =='我的专员'){
                console.log(this.memberInfoObj);
                if(this.memberInfoObj.businessAttendantId){
                    this.$router.push({
                        path:'/aboutUsInfo',
                        query:{
                            businessAttendantId: this.memberInfoObj.businessAttendantId,
                            // userInfoObj: JSON.stringify(row),
                        }
                    })
                } else {
                    this.$router.push({
                        path: '/contactUs',
                    })
                }
            }
            else{
                const isNextPar = ['myOrder', 'historicalOrder', 'agentDescription'];
                if(isNextPar.includes(item.url)){
                    const val = this.memberInfoObj[item.url];
	                console.log(val);
                    if(val){
                        localStorage.setItem(item.url, val)
                    } else{
                        localStorage.setItem(item.url, '')
                    }

                }
                // return
                this.$router.push({
                    path: '/' + item.url,
                })
            }
        },

        /*获取会员信息*/
        fnGetMemberDetailApi() {
            getMemberDetailApi({ openid: this.openid }).then(res => {
                console.log(res);
                if(res.status == 'success'){
                    this.memberInfoObj = res.data;
                    localStorage.setItem("proxyOpenid",res.data.businessAttendantId);
	
						  /* memberType =》 2 =》 vip; 1的时候 跳转到 注册页面*/
	                if(res.data.memberType == 2 || res.data.proxy == 1){
							 
	                } else {
		                this.$router.push({
			                path: '/registerMember',
		                })
	                }
                }
            });
        },
	
	    /*分享*/
	    fnShare(){
		    getSignature({
			    // url:location.href.split('#')[0],
			    url:'http://www.jierong123.com/dist/#/index',
		    }).then(res=>{
			    wx.config({
				    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				    appId: 'wxdcf6df398c3ce766', // 必填，公众号的唯一标识
				    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
				    nonceStr:res.data.noncestr, // 必填，生成签名的随机串
				    signature: res.data.signature,
				    jsApiList: ['openLocation', 'onMenuShareTimeline', 'onMenuShareAppMessage',
					    'updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
			    });
			
			    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
				
				    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
				    wx.updateAppMessageShareData({
                        title: '查最新银行政策；找融资方案，就上“节融”!!', // 分享标题
                        desc: '注册节融会员；免费办理各大银行贷款。!!', // 分享描述
					    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
					    success: function () {
						    // 设置成功
					    }
				    })
			    });
			
			    // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
			    wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
				    wx.updateTimelineShareData({
                        title: '查最新银行政策；找融资方案，就上“节融”!!', // 分享标题
                        desc: '注册节融会员；免费办理各大银行贷款。!!', // 分享描述
					    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
					    success: function () {
						    // 设置成功
					    }
				    })
			    });
			
			    wx.error(function (res) {
				    // 注册失败
				    console.log('注册失败');
				    console.log(res);
			    });
			    /*wx.ready(function () {
					 //朋友圈
					 wx.onMenuShareTimeline({
						 title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
						 link: 'http://www.jierong123.com/dist/other/creditAddress.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						 imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						 success: function () {
							 // 设置成功
						 }
					 });
					 //朋友
					 wx.onMenuShareAppMessage({
						 title: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享标题
						 desc: '节融：打造顶级融资算法，助力企业解决融资难题!!', // 分享描述
						 link: 'http://www.jierong123.com/dist/other/creditAddress.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						 imgUrl: 'http://www.jierong123.com/dist/other/myCode2.png', // 分享图标
						 type: 'link', // 分享类型,music、video或link，不填默认为link
						 dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						 success: function () {
							 // 用户点击了分享后执行的回调函数
						 }
					 });
				 });*/
		    }).catch(res=>{});
	    },

    },
    created() {
	    
        // this.fnGetHistoryList();
        // this.fnGetHistoryInfo();
	    this.$router.push({
		    query:{
			    proxyOpenid: this.$route.query.proxyOpenid || localStorage.getItem("proxyOpenid"),
		    }
	    })
        const ls = new this.GLOBAL.FnStorage();
        const userInfoObj = ls.getItem('userInfoObj');
        console.log(userInfoObj);

        const openid = ls.getItem('openid2');
        this.openid = openid || "oLbgO1c4yIX3NGANptTR76rV8ql4";

        this.fnGetMemberDetailApi();
	
	    this.fnShare();
    }
};
</script>
<style lang="scss" scoped>
.user-box{
    width: 100%;
    margin: 0 auto;
    background: #ffa300;
    //padding-top: 14px;
    height: 100%;
    min-height: 100vh;
    .user-nav-box{
        width: 100%;
        //margin-left: 0 !important;
        //margin-right: 0 !important;
        margin: 0 !important;
        background: #fff;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: calc(100vh - 130px);
        padding-top: 20px;
    }
    .user-navUl{
        margin: 0 !important;
        > li{
            display: flex;
            justify-content: space-between;
        }
        .user-navUl-li{
            text-align: center;
            margin-top: 8px;
            width: 33.33vw;
        }
        /deep/ .van-col{
            padding: 0 !important;
            width: auto !important;
        }

        .icon-user{
            display: block;
            margin: 8px auto;
            font-size: .4rem;
        }
        .user-navTitle{
            margin: 8px 0 8px;
        }
    }
    .user-subNav{
        margin-top: 20px;
        padding: 0 4%;
        .user-subNav-item{
            border-bottom: solid 1px #ddd;
            height: 60px;
            display: flex;
            align-items: center;
            .van-icon{
                font-size: 18px;
            }
            .user-note{
                margin-left: 14px;
                font-size: 16px;
            }
        }
    }
}
.userHeader-box2{
    width: 100%;
    color: #fff;
    padding: 25px 6% 40px;
    height: 130px;
    //background: #fff;
    //border-radius: 4px;
    .userHeader-box-top{
        display: flex;
        align-items: center;
    }
    .userHeader-box-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
    }
    .img-userHeader{
        height: .6rem;
        width: .6rem;
        border-radius: 50%;
        margin-right: .1rem;
    }
    .user-name{
        font-weight: 500;
        margin-bottom: 6px;
        font-size: 16px;
    }
    .user-tel{
        font-size: 16px;
        margin-bottom: 6px;
    }
    .user-bank{
        margin-bottom: 6px;
    }
}

</style>