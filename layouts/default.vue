<template>
  <v-app id="app" v-scroll="onScroll">
    <Snackbar />
    <appBar :transparent="transparent" />
    <nuxt />
    <v-btn
      v-show="goTopShow"
      class="go-top"
      color="blue-grey"
      :midle="$vuetify.breakpoint.smAndUp"
      :small="$vuetify.breakpoint.xs"
      fab
      @click="$vuetify.goTo('#app', options)"
    >
      <v-icon class="white--text">mdi-chevron-up</v-icon>
    </v-btn>
    <Footer />
  </v-app>
</template>

<script>
import appBar from '~/components/layouts/appBar'
import Footer from '~/components/layouts/footer'
import Snackbar from '~/components/global/snackbar'
export default {
  components: { appBar, Footer, Snackbar },
  data() {
    return {
      transparent: false,
      drawer: false,
      currentPath: undefined,
      goTopShow: false
    }
  },
  computed: {
    options() {
      return {
        duration: 500,
        offset: 1,
        easing: 'easeOutQuad'
      }
    }
  },
  watch: {
    $route(to) {
      this.currentPath = to.path
      this.canByTransparent()
    }
  },
  mounted() {
    this.currentPath = this.$router.currentRoute.fullPath
    this.canByTransparent()
  },
  methods: {
    canByTransparent() {
      const path = this.currentPath
      const offers = path.includes('/offers') && path.split('/').length === 3
      const index = path === '/en' || path === '/es'
      this.transparent = (offers || index) && window.pageYOffset < 200
      this.goTopShow = window.pageYOffset > 200
    },
    onScroll() {
      this.canByTransparent()
    }
  }
}
</script>
<style scoped>
.go-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1;
}
</style>
