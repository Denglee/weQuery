import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import Axios from 'axios'
/*引用axios*/
Vue.prototype.$axios = Axios;

/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境发布 地址
        Axios.defaults.baseURL = 'http://www.jierong123.com';//路径
    } else {
        //test 测试环境 测试地址 http://vikily.f3322.net:20000
        // Axios.defaults.baseURL = 'http://nhgdgc.natappfree.cc';//路径
        Axios.defaults.baseURL = 'http://www.jierong123.com';//路径
        // config.optimization.minimize(false)
    }
} else {
    // dev 开发环境 本地 /api
    Axios.defaults.baseURL = '/api';
    // Axios.defaults.baseURL = 'http://vikily.f3322.net:10007';
}


/*引入自己的全局的css*/
import '@/assets/css/global.scss'
import '@/assets/css/home.scss'

/* 6、 引入 moment 时间转换 */
/*凡是用的prototype 使用都要this.继承 console.log(this.$moment().format("YYYY-MM"));*/
import moment from 'moment'  //引用moment js
Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化

Vue.filter('minuteFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
    return moment(dataStr).format(pattern);
})

Vue.filter('cutOutStr', (name, type='-') =>{
    let str = name.indexOf(type);
    let strName = name.substring(str + 1);
    return strName
})


/*引用全局js*/
import global from '@/assets/js/global.js'
Vue.prototype.GLOBAL = global

/*全局引入vant*/
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// import 'swiper/css/swiper.css';

// import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
// import 'swiper/css/swiper.css'  //引入样式
// Vue.use(vueSwiper)  //使用插件


/*8、引入v-charts 官网：https://v-charts.js.org/#/histogram*/
import VCharts from 'v-charts'
// import VeLine from 'v-charts/lib/line.common'  //折线图
// import VeBar from 'v-charts/lib/bar.common' //条形图
// import VeHistogram from 'v-charts/lib/histogram.common' //柱状图
// import VePie from 'v-charts/lib/pie.common' //饼图
import VeRing from 'v-charts/lib/ring.common' //环图
import VeFunnel from 'v-charts/lib/funnel.common' //图

// Vue.component(VeLine.name, VeLine);
// Vue.component(VeBar.name, VeBar);
// Vue.component(VeHistogram.name, VeHistogram);
// Vue.component(VePie.name, VePie);
Vue.component(VeRing.name, VeRing);
// Vue.component(VeLine.name, VeLine);
Vue.use(VCharts);

// 路由跳转前验证
// router.beforeEach((to, from, next) => {
//     /*console.log(to);
//     console.log(from);*/
//
//     const ls = new global.FnStorage();
//     const openid = ls.getItem('openid2');
//     console.log(openid);
//     console.log(typeof (openid));
//     const oauth_token = ls.getItem('oauth_token');
//     console.log(oauth_token);
//     // let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fdist%2findex.html%23%2flogin&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect`;
//     let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcf6df398c3ce766&redirect_uri=http%3a%2f%2fwww.jierong123.com%2fdist%2f%23%2flogin&response_type=code&scope=snsapi_userinfo&state=jierong#wechat_redirect`;
//
//     if (!openid) {  //openid 为空
//
//         // window.location.replace(url);
//         if (to.path === '/login') {
//             console.log('/login');
//             next();
//         } else {
//             window.location.replace(url);
//         }
//     } else { //openid 不为空
//         if(!oauth_token){ //如果oauth_token为空
//             console.log('no oauth_token');
//             window.location.replace(url);
//         }else{
//             console.log('go  next');
//             next()
//         }
//     }
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
