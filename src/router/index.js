import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",  /*首页*/
    component: () => import(/* webpackChunkName: "Home" */ "../views/home/Home.vue")
  },
  {
    path: "/aboutUs",
    name: "aboutUs",  /*关于我们*/
    component: () => import(/* webpackChunkName: "aboutUs" */ "../views/other/aboutUs.vue")
  },     {
    path: "/aboutVip",
    name: "aboutVip",  /*关于会员*/
    component: () => import(/* webpackChunkName: "aboutVip" */ "../views/other/aboutVip.vue")
  },    {
    path: "/contactUs",
    name: "contactUs",  /*联系我们*/
    component: () => import(/* webpackChunkName: "contactUs" */ "../views/other/contactUs.vue")
  },  {
    path: "/aboutUsInfo",
    name: "aboutUsInfo",  /*跑腿人员详情*/
    component: () => import(/* webpackChunkName: "aboutUsInfo" */ "../views/other/aboutUsInfo.vue")
  },
  {
    path: "/loanList",
    name: "loanList",  /*贷款列表页*/
    component: () => import(/* webpackChunkName: "loanList" */ "../views/loan/loanList.vue")
  },
  {
    path: "/loanDetails",
    name: "loanDetails", /*贷款详情页*/
    component: () => import(/* webpackChunkName: "loanDetails" */ "../views/loan/loanDetails.vue")
  },
  {
    path: "/cardItem",
    name: "cardItem",  /*信用卡列表页*/
    component: () => import(/* webpackChunkName: "cardItem" */ "../views/card/cardItem.vue")
  },
  {
    path: "/cardInfo",
    name: "cardInfo", /*信用卡详情页*/
    component: () => import(/* webpackChunkName: "cardInfo" */ "../views/card/cardInfo.vue")
  },
  {
    path: "/match",
    name: "match", /*贷款匹配页*/
    component: () => import(/* webpackChunkName: "match" */ "../views/match/match.vue")
  },
  {
    path: "/matchResult",
    name: "matchResult", /*匹配详情页*/
    component: () => import(/* webpackChunkName: "match" */ "../views/match/matchResult.vue")
  },
  {
    path: "/aboutUs",
    name: "aboutUs", /*关于我们*/
    component: () => import(/* webpackChunkName: "aboutUs" */ "../views/other/aboutUs.vue")
  },
  {
    path: "/login",
    name: "login", /*登陆*/
    component: () => import(/* webpackChunkName: "login" */ "../views/other/login.vue")
  },
  {
    path: "/address",
    name: "address", /*address*/
    component: () => import(/* webpackChunkName: "logiaddressn" */ "../views/other/address.vue")
  },
  {
    path: "/demo",
    name: "demo", /*例子*/
    component: () => import(/* webpackChunkName: "demo" */ "../views/demo/demo.vue")
  },

  /*1024 注册会员*/
  {
    path: "/registerMember",
    name: "registerMember",
    component: () => import(/* webpackChunkName: "registerMember" */ "../views/member/registerMember.vue")
  },

	/*会员*/
  {
    path: "/memberInfo",
    name: "memberInfo",
    component: () => import(/* webpackChunkName: "memberInfo" */ "../views/member/memberInfo.vue")
  },  {
    path: "/mathHistory",
    name: "mathHistory",
    component: () => import(/* webpackChunkName: "memberInfo" */ "../views/member/mathHistory.vue")
  }, {
    path: "/mathHistoryInfo",
    name: "mathHistoryInfo",
    component: () => import(/* webpackChunkName: "memberInfo" */ "../views/member/mathHistoryInfo.vue")
  }, {
    path: "/myOrder",
    name: "myOrder",
    component: () => import(/* webpackChunkName: "myOrder" */ "../views/member/myOrder.vue")
  }, {
    path: "/historicalOrder",
    name: "historicalOrder",
    component: () => import(/* webpackChunkName: "historicalOrder" */ "../views/member/historicalOrder.vue")
  }, {
    path: "/myAttendant",
    name: "myAttendant",
    component: () => import(/* webpackChunkName: "myHistoryOrder" */ "../views/member/myAttendant.vue")
  }, {
    path: "/businessProcessDescription",
    name: "businessProcessDescription",
    component: () => import(/* webpackChunkName: "businessProcessDescription" */ "../views/member/businessProcessDescription.vue")
  }, {
    path: "/agentDescription",
    name: "agentDescription",
    component: () => import(/* webpackChunkName: "agentDescription" */ "../views/member/agentDescription.vue")
  }, {
    path: "/myInvitation", /*我的邀请*/
    name: "myInvitation",
    component: () => import(/* webpackChunkName: "myInvitation" */ "../views/member/myInvitation.vue")
  }, {
    path: "/share", /*我的邀请*/
    name: "share",
    component: () => import(/* webpackChunkName: "share" */ "../views/member/share.vue")
  }, {
    path: "/platformDescription", /*平台说明*/
    name: "platformDescription",
    component: () => import(/* webpackChunkName: "platformDescription" */ "../views/member/platformDescription.vue")
  }

];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// 路由跳转前验证
/*router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token');
  const openid = sessionStorage.getItem('openid');

  // console.log(token);
  alert(openid);

  if (!openid || openid != 'null') {
    if (to.path == '/login') {
      // console.log('/login');
      next();
    } else {
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fdist%2findex.html%23%2flogin&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect`;
      window.location.replace(url);

      // console.log('now_url');

      // localStorage.setItem('now_url',to.fullPath) //当前页url与参数放入缓存
      // next('/login');
    }
  } else {
    // next()
  }
})*/

export default router;
