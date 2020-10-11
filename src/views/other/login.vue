<template>
    <div>
<!--        <van-overlay :show="matchShowRes.matchRightShow" >-->
<!--            <div class="wrapper-match" @click.stop>-->
<!--                <div class="wrapper-Content">-->
<!--                    <div class="wrapper-name">正在登录，请稍后……</div>-->
<!--                    <van-loading type="spinner" color="#ffa300" size = '60px'/>-->
<!--                </div>-->
<!--            </div>-->
<!--        </van-overlay>-->
    </div>
</template>

<script>
	import {getWxUserInfoApi} from "../../assets/js/api";
	// const murl = 'http://www.jierong123.com';
	// const url = localStorage.getItem("now_url");


	export default {
		name: "login",
		data() {
			return {
				matchShowRes:{
					matchRightShow:true,  //成功
				},
            };
		},

		//生命周期函数
		mounted() {

			const ls = new this.GLOBAL.FnStorage();
			const openid = ls.getItem('openid2');
			console.log(openid);
			if (!openid) {
				console.log('ls  openid');
                let nowUrl = window.location.href;
                const codeArr = this.GetRequest(nowUrl); // 截取code
                console.log(codeArr.code);
                console.log(codeArr.state);
                getWxUserInfoApi({
                    code: codeArr.code,
                    state: codeArr.state,
                }).then(res => {
                    console.log(res);
                    if(res.status = 'success'){
                        let openid = res.data.openid;
                        // let nickname = res.data.nickname;
                        let expires_in = Number(res.data.expires_in)*1000;
                        // let expires_in = 5000;
                        let oauth_token = res.data.oauth_token;
                        console.log(openid);
                        ls.setItem({
	                        name:'openid2',
                            value:openid,
	                        expires:expires_in,
                        });
	                    ls.setItem({
		                    name:'oauth_token',
		                    value:oauth_token,
		                    expires:expires_in,
	                    });
	                    console.log(oauth_token);
                        window.location.replace('http://www.jierong123.com/dist/#/index');
                        // this.$router.push({
                        //     path:'/index',
                        // })
                    }
                }).catch(res => {
                    console.log(res);
                });
			} else {
				console.log('go index');
				this.$router.push({
					path:'/index',
				});
            }
		},
		methods: {


			/**
			 * [获取URL中的参数名及参数值的集合]
			 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
			 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
			 * @return {[string]}       [参数集合]
			 */
			 GetRequest(urlStr) {
                if (typeof urlStr == "undefined") {
                    var url = decodeURI(location.search); //获取url中"?"符后的字符串
                } else {
                    var url = "?" + urlStr.split("?")[1];
                }
                var theRequest = new Object();
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1);
                    var strs = str.split("&");
                    for (var i = 0; i < strs.length; i++) {
                        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
                    }
                }
                return theRequest;
            },


		},
	}

</script>

<style lang="scss">
    //生成匹配结果
    .wrapper-match{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        .wrapper-Content{
            height: 170px;
            background-color: #fff;
            width: 70%;
            text-align: center;
            padding: 24px 40px;
            border-radius: 13px;
        }
        .wrapper-name{
            color: #ffa300;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 30px;
        }
    }
</style>