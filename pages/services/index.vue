<template>
  <v-content :class="$vuetify.breakpoint.mdAndUp ? 'pt-0' : 'pt-12'">
    <!--    HEADER-->
    <v-layout
      style="height: 80vh"
      class="d-flex flex-column justify-space-around blue-grey lighten-5 pt-12 mx-0"
    >
      <v-row align="center" justify="center" class="mx-0">
        <v-col md="6" cols="12" class="mx-0">
          <v-container>
            <v-card-text class="header-card">
              <p
                class="mb-5 text-center text-md-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'
                "
              >
                services tailored to your needs
              </p>
              <p
                class="subtitle-1 font-weight-regular"
                :class="{
                  'text-justify': $vuetify.breakpoint.mdAndDown
                }"
              >
                We are committed to making your Cuba experience a genuine and
                life-changing adventure. Specialized tailored programs with
                personalized and flexible guiding services will give you the
                opportunity to feel Cuba in a more authentic way.
              </p>
            </v-card-text>
          </v-container>
        </v-col>
        <v-col cols="6" sm="5" md="4" lg="4">
          <v-img :src="require('assets/services/travel_plans.svg')"></v-img>
        </v-col>
      </v-row>
      <v-row style="max-height: 4rem;" class="mx-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="svg-property"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </v-row>
    </v-layout>

    <v-layout class="justify-center">
      <v-card color="transparent" class="mb-10" flat>
        <v-card-title class="d-block text-center display-1">
          All our services
        </v-card-title>
      </v-card>
    </v-layout>
    <Services :list="serviceList" />
  </v-content>
</template>

<script>
// component
import Services from '@/components/services/Services'

// data
import ServiceData from '@/data/services.js'
export default {
  name: 'Index',
  components: { Services },
  data() {
    return {
      serviceList: []
    }
  },
  watch: {
    '$i18n.locale': {
      handler(locale) {
        this.loadData(locale)
      }
    }
  },
  mounted() {
    const locale = this.$i18n.locale
    this.loadData(locale)
  },
  methods: {
    loadData(locale) {
      this.serviceList = ServiceData.getServices(locale)
    }
  }
}
</script>

<style scoped>
.svg-property {
  fill: rgb(250, 250, 250);
  background-color: transparent;
  display: block;
  height: 4rem;
  width: 100%;
}
</style>
