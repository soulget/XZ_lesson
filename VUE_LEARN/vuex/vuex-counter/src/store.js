import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//CEO
const state = {
  count:0
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even': 'odd'
}
// 唯一可以修改状态
// 财务
const mutations = {
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}
// 动作 部门 不能修改 state
const actions = {
  increment:({ commit }) => commit('increment'),
  decrement:({ commit }) => commit('decrement'),
  // actions里不可以修改state,但是可以读
  incrementIfOdd ({ commit, state }) {
    if ((state.count +1 ) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync ({commit}) {
    // actions axios 异步取数据....
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
      }, 2000);
    });
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
