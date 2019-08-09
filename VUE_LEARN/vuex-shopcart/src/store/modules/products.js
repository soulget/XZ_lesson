import shop from '../../api/shop'
const state = {
 all:[]
}
const mutations = {
  setProducts ( state , products) {
    state.all = products;
    // console.log(2)
    // console.log(products);
    // state.all = products;
    // console.log(state)
  }
}
const actions = {
 getAllProducts ({ commit }) {
  //  前后端分离 actions => api

    shop.getProducts(products => {
      // console.log(products);
     commit('setProducts', products);
   });

 }

}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}