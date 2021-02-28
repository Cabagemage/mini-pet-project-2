import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  store: { myStore: { value: 0 } },
  actions: {
    ["actionName"]: function({ commit }, data) {
      commit("actionName", data);
    },
  }, // I usualy using special constant for actions/mutations names, so I can use that here in code, and also in components
  mutations: {
    ["actionName"]: function(state, data) {
      state.myStore.value = data;
    },
  },
  getters: { myStoreValue: (state) => !!state.myStore.value },
});
