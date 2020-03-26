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
        Axios.defaults.baseURL = 'http://spt.zmtek.net';//路径

    } else {
        //test 测试环境 测试地址 http://vikily.f3322.net:20000
        Axios.defaults.baseURL = 'http://vikily.f3322.net:20000';//路径
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
import VeLine from 'v-charts/lib/line.common'  //折线图
import bar from 'v-charts/lib/bar.common' //条形图
import histogram from 'v-charts/lib/histogram.common' //柱状图
import pie from 'v-charts/lib/pie.common' //饼图
import ring from 'v-charts/lib/ring.common' //环图
import funnel from 'v-charts/lib/funnel.common' //图

Vue.component(VeLine.name, VeLine);
Vue.component(VeLine.name, bar);
Vue.component(VeLine.name, histogram);
Vue.component(VeLine.name, pie);
Vue.component(VeLine.name, ring);
Vue.component(VeLine.name, funnel);
Vue.use(VCharts);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
