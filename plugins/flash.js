import Vue from 'vue'
export default ({ store }) => {
  Vue.prototype.$flash = (snack) => store.commit('snackbar/flash', snack)
}
