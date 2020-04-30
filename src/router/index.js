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
    path: "/match",
    name: "match", /*贷款详情页*/
    component: () => import(/* webpackChunkName: "match" */ "../views/match/match.vue")
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

export default router;
