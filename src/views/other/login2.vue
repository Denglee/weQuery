<template>
    
</template>

<script>
    import {getWxUserInfoApi} from "../../assets/js/api";
    const murl = 'http://www.jierong123.com';
    const url = localStorage.getItem("now_url");


    export default {
        name: "login",
        data() {
            return {};
        },

        //生命周期函数
        created() {

            this.getCode()

            // window.location.href  = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fwx%2fgetWxUserInfo&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect';
            // window.location.href('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fwx%2fgetWxUserInfo&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect');

            return false

            let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fdist%2findex.html%23%2flogin&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect`;
            window.location.href = url;

            setTimeout(function(){
                console.log(url);
            },1000)



            const code = this.getUrlCode().code() // 截取code
            console.log(code);
            if (!code) {
                let domine = window.location.href.split("#")[0]; // 微信会自动识别#    并且清除#后面的内容
                console.log(domine);
                //这里的axios是已封装过的

                getWxUserInfoApi({
                    url: domine,
                }).then(res => {
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                })

                /*     this.http
                    .get("/set_wxcode_url?url=" + domine) // 如果没有code，说明用户还没授权   将当前地址传递给后台
                    .then(res => {
                        window.location.href = res.data;
                    });*/
            } else {
                console.log(code);
                getWxUserInfoApi({code: code}).then(res => {
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                    console.log(res.data);
                    if (res.data.token) {
                        localStorage.setItem("token", res.data.token);
                    }
                    if (res.data.openid) {
                        localStorage.setItem("openid", res.data.openid);
                    }
                    window.location.replace(murl + '/#' + url);
                })
                /*
                this.http.get("/gzh_token?code=",{code:code}) //如果有code，说明用户点击了授权  将获取到的code传递给后台
                    .then(res => {
                        // 返回状态和UId
                        console.log(res.data);
                        if (res.data.token) {
                            localStorage.setItem("token", res.data.token);
                        }
                        if (res.data.openid) {
                            localStorage.setItem("openid", res.data.openid);
                        }
                        window.location.replace(murl+'/#' + url);
                    });*/
            }
        },
        methods: {

            getCode () { // 非静默授权，第一次有弹框
                console.log('sd');
                const code = this.GetUrlParame('code') // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
                const local = window.location.href;
                if (code == null || code === '') {
                    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fdist%2findex.html%23%2flogin&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect'
                } else {
                    this.getOpenId(code) //把code传给后台获取用户信息
                }
            },

            getOpenId (code) { // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
                let _this = this
                this.$http.post('/api/user/wechat/login', {code: code}).then((res) => {
                    let datas = res.data
                    if (datas.code === 0 ) {
                        console.log('成功')
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },


            // 截取code
            GetUrlParame(parameName) {

                /// 获取地址栏指定参数的值
                /// <param name="parameName">参数名</param>
                // 获取url中跟在问号后面的部分
                var parames = window.location.search;
                console.log(parameValue);
                // 检测参数是否存在
                if (parames.indexOf(parameName) > -1) {
                    var parameValue = ''
                    parameValue = parames.substring(parames.indexOf(parameName), parames.length)
                    // 检测后面是否还有参数
                    if (parameValue.indexOf('&') > -1) {
                        // 去除后面多余的参数, 得到最终 parameName=parameValue 形式的值
                        parameValue = parameValue.substring(0, parameValue.indexOf('&'))
                        // 去掉参数名, 得到最终纯值字符串
                        parameValue = parameValue.replace(parameName + '=', '');
                        console.log(parameValue);
                        return parameValue
                    }
                    return ''
                }
            }
        },
    }
        // toGetWXCode() {
        //     let redirectUrl = encodeURIComponent('你的域名')
        //     let oAuthUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${WX_APPID}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=bc17befd6d5060f16de95e38f6eaf69c&connect_redirect=1#wechat_redirect`
        //     window.location.href = oAuthUrl
        // },
        //
        // },
</script>

<style scoped>

</style>