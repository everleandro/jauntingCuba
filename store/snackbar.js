export const state = () => ({
  snack: {
    message: '',
    color: '',
    position_x: '',
    position_y: '',
    mode: '',
    timeout: 2000
  }
})
// this.$store.state.snackbar.snack

export const mutations = {
  flash(state, snack) {
    state.snack = snack
  }
}
