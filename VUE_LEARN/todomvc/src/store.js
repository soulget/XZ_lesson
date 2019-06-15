import Vue from 'Vue';
import Vuex from 'vuex';

// 启动应用状态管理
Vue.use(Vuex);

// 全局状态
const state = {
  count: 0
}
// 中央
// state 要改 actions 是交给你调用的  increment 
// 不能直接修改state.count
// 只有actions 才可以出发同mutation改变
// 只有mutation 才可以修改state
// 直接修改状态
const mutations = {
  increment (state){
    state.count++;
  }
}
const actions = {
  increment: ({ commit }) => commit('increment')
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})