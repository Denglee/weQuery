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
    path: "/loanList2",
    name: "loanList2",  /*贷款列表页*/
    component: () => import(/* webpackChunkName: "loanList" */ "../views/loan/loanList2.vue")
  },
  {
    path: "/loanDetails2",
    name: "loanDetails2", /*贷款详情页*/
    component: () => import(/* webpackChunkName: "loanDetails" */ "../views/loan/loanDetails2.vue")
  },
  {
    path: "/loanDetails",
    name: "loanDetails", /*贷款详情页*/
    component: () => import(/* webpackChunkName: "loanDetails" */ "../views/loan/loanDetails.vue")
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
