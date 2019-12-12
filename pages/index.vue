<template>
  <v-container fluid class="blue-grey lighten-5 pa-0">
    <!--    HEADER-->
    <v-layout row class="mx-0">
      <v-img
        :src="require('assets/home/header-bg.png')"
        height="100vh"
        gradient="to bottom,  rgba(93,64,55, 0.6) 50%, transparent 80%"
      >
        <v-layout fill-height class="d-flex flex-column justify-space-around">
          <v-row align="center" class="mx-0">
            <div class="sm-10 mx-auto text-center">
              <v-card-text class="header-card white--text text-">
                <p class="display-2 mb-5 Shadows-Into-Light-font">
                  {{ HomeData.header_title }}
                </p>
                <p class="headline font-weight-thin">
                  {{ HomeData.header_subtitle_1 }}
                </p>
                <p class="headline font-weight-thin">
                  {{ HomeData.header_subtitle_2 }}
                </p>
              </v-card-text>
              <v-btn
                x-large
                icon
                class="white--text"
                @click="$vuetify.goTo('#most-visited-places', options)"
              >
                <v-icon class="ma-0">
                  mdi-chevron-triple-down
                </v-icon>
              </v-btn>
            </div>
          </v-row>
          <v-row align="end">
            <v-img contain :src="require('assets/home/olas3.png')"></v-img>
          </v-row>
        </v-layout>
      </v-img>
    </v-layout>

    <!--   HIGHLIGHTS-->
    <v-container id="most-visited-places" fluid class="my-12">
      <v-row justify="center" align="center" class="mb-8 mx-0">
        <v-card tile flat color="transparent">
          <v-card-title
            class="display-1 mb-2 flex justify-center text-uppercase"
          >
            {{ $t('high_lights') }}
          </v-card-title>
          <v-card-subtitle class="text-center">
            {{ higLightSubtitle }}
          </v-card-subtitle>
        </v-card>
      </v-row>
      <HighLights :high-light="HighLight" />
    </v-container>

    <!--SERVICES-->
    <v-container id="Why-traveling" fluid class="my-12 px-0">
      <v-card class="ma-0" :img="require('assets/home/party.jpg')" tile flat>
        <v-row justify="center" align="center" class="mb-8 mx-0">
          <v-card tile flat color="transparent">
            <v-card-title class="display-1 flex justify-center text-uppercase">
              {{ $t('services') }}
            </v-card-title>
          </v-card>
        </v-row>
        <Service :service-list="services" />
      </v-card>
    </v-container>

    <!--TRENDY TOURS-->
    <v-container id="recent-post" fluid class="my-12 px-0">
      <v-row justify="center" align="center" class="mb-8 mx-0">
        <v-card tile flat color="transparent">
          <v-card-title
            class="display-1 mb-2 flex justify-center text-uppercase"
          >
            {{ $t('trendy_tours') }}
          </v-card-title>
        </v-card>
      </v-row>
      <TrendyTours :list="trendy_ours" />
    </v-container>
  </v-container>
</template>
<script>
// Components
import TrendyTours from '@/components/home/Trendy_tours'
import HighLights from '@/components/home/HighLights'
import Service from '@/components/home/Service'

// data
import HighLight from '@/data/highlight.js'
import Tours from '@/data/tours.js'
import HomeData from '@/data/home.js'
import ServiceData from '@/data/services.js'

export default {
  components: { HighLights, Service, TrendyTours },
  data() {
    return {
      HighLight: [],
      trendy_ours: [],
      HomeData: {},
      services: [],
      higLightSubtitle: ''
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: 1,
        easing: 'easeOutQuad'
      }
    }
  },
  watch: {
    '$i18n.locale': {
      handler(locale) {
        this.getData(locale)
      }
    }
  },
  mounted() {
    const locale = this.$i18n.locale
    this.getData(locale)
  },
  methods: {
    getData(locale) {
      this.HighLight = HighLight.getHighLight(locale)
      this.higLightSubtitle = HighLight.getSubtitle(locale)
      this.trendy_ours = Tours.getTrendy(locale)
      this.HomeData = HomeData.getHeaderInfo(locale)
      this.services = ServiceData.getServices(locale)
    }
  }
}
</script>
<style scoped>
.header-card .display-2,
.header-card .headline {
  text-align: center;
}
.svg-property {
  fill: #eceff1;
  background-color: transparent;
  display: block;
  height: 2rem;
  width: 100%;
}
</style>
