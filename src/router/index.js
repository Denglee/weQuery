import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/home/Home.vue")
  },
  {
    path: "/loanList",
    name: "loanList",
    component: () => import(/* webpackChunkName: "fireList" */ "../views/loan/loanList.vue")
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
