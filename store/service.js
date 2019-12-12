export const state = () => ({
  service: ''
})
// this.$store.state.snackbar.snack

export const mutations = {
  flash(state, service) {
    state.service = service
  }
}
