<template>
  <v-content class="white">
    <!--    HEADER-->
    <v-layout
      style="height: 80vh"
      class="d-flex flex-column justify-space-around  blue-grey lighten-5 pt-12 mx-0"
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
                Vacaciones en Cuba
              </p>
              <p
                class="subtitle-1 font-weight-regular"
                :class="{
                  'text-justify': $vuetify.breakpoint.mdAndDown
                }"
              >
                {{ tourSummary }}
              </p>
            </v-card-text>
          </v-container>
        </v-col>
        <v-col cols="6" sm="5" md="4" lg="4">
          <v-img :src="require('assets/tours/departing.svg')"></v-img>
        </v-col>
      </v-row>
      <v-row style="max-height: 4rem;" class="mx-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="svg-prop"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </v-row>
    </v-layout>

    <v-container class="mb-8" fluid>
      <v-flex class="sm8 xs11 md6 mx-auto text-justify">
        <v-card color="transparent" class="mb-10" flat>
          <v-card-title class="d-block text-center display-1">
            Tours
          </v-card-title>
        </v-card>
      </v-flex>
      <client-only>
        <Tours :list="toursList" />
      </client-only>
    </v-container>
  </v-content>
</template>

<script>
import Tours from '@/components/tours/list'
import toursListData from '@/data/tours.js'

export default {
  name: 'Index',
  components: { Tours },
  data() {
    return {
      toursList: []
    }
  },
  watch: {
    '$i18n.locale': {
      handler(locale) {
        this.getData(locale)
      }
    }
  },
  created() {
    const locale = this.$i18n.locale
    this.getData(locale)
  },
  methods: {
    getData(locale) {
      this.toursList = toursListData.getTours(locale)
      this.tourSummary = toursListData.getTourSummary(locale)
    }
  }
}
</script>

<style scoped>
.svg-prop {
  fill: #fff;
  background-color: transparent;
  display: block;
  height: 4rem;
  width: 100%;
}
</style>
