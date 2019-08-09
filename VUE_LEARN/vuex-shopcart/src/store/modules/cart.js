
const state = {
  items:[]
}
const mutations = {
  pushProductToCart(state, {id}){
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {id}){
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  }
}
const actions = {
    addProductToCart({ state, commit }, product){
      if( product.inventory > 0 ){
        // 把商品添加进 inventory 要什么逻辑
        // 检查items里面有没有    有 +1  / 没有 push 
        const cartItem = state.items.find(item => item.id === product.id)
        if(!cartItem) {
          commit('pushProductToCart', { id: product.id})
        } else {
          commit ('incrementItemQuantity', cartItem);
        }
      }
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