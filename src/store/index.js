import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChecked: {
      age: 0,          // 1、年龄
      hyzk: -1,         // 3、婚姻状况
      hj: -1           // 4、户籍
    }

  },

  getters: {
    getUserChecked(state) {
      return state.userChecked;
    }
  },

  mutations: {},
  actions: {},
  modules: {}
});
