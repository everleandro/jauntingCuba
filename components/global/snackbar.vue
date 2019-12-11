<template>
  <v-snackbar
    v-model="show"
    :bottom="position_y === 'bottom'"
    :color="color"
    :left="position_x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="position_x === 'right'"
    :timeout="timeout"
    :top="position_y === 'top'"
    :vertical="mode === 'vertical'"
  >
    {{ message }}
    <v-btn dark text @click="show = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
      position_x: '',
      position_y: '',
      mode: '',
      timeout: 2000
    }
  },
  created() {
    this.$store.watch(
      (state) => state.snackbar.snack.message,
      () => {
        const msg = this.$store.state.snackbar.snack.message
        if (msg !== '') {
          this.show = true
          const snackObject = this.$store.state.snackbar.snack
          this.message = snackObject.message
          this.color = snackObject.color || 'info'
          this.position_y = snackObject.position_y || 'top'
          this.mode = snackObject.mode || 'multi-line'
          this.timeout = snackObject.timeout || 3000
          this.$store.commit('snackbar/flash', { message: '' })
        }
      }
    )
  }
}
</script>
