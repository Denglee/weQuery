import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: "/index",
    name: "index",  /*首页*/
    component: () => import(/* webpackChunkName: "index" */ "../views/home/Home.vue")
  },
  {
    path: "/aboutUs",
    name: "aboutUs",  /*关于我们*/
    component: () => import(/* webpackChunkName: "index" */ "../views/other/aboutUs.vue")
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
