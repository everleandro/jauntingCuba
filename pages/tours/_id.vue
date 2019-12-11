<template>
  <v-content class="pt-0 white">
    <!--HEADER-->
    <v-layout
      :style="$vuetify.breakpoint.mdAndUp ? 'height: 100vh' : 'auto'"
      class="pt-12 mx-0 white pb-0"
      justify="space-around"
      column
      md-12
      md="12"
    >
      <!--BUTTON BACK-->
      <v-row align="end" justify="start" style="max-height: 70px" class="mx-0">
        <v-col cols="10" offset-md="1">
          <v-btn
            color="light-blue darken-1"
            tile
            nuxt
            text
            @click="$router.go(-1)"
          >
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            {{ $t('back') }}
          </v-btn>
        </v-col>
      </v-row>

      <!--INFO+IMAGE-->
      <v-row
        align="center"
        justify="center"
        class="mx-0"
        :class="{ 'mb-12': $breakpoint.is.smAndDown }"
        wrap
      >
        <v-col cols="10" md="5" align="center" justify="center">
          <v-flex class="md11 lg9 xs12">
            <v-img
              :src="tour.imgUrl"
              class="md-10 br-5"
              :class="{ shadow: $vuetify.breakpoint.mdAndUp }"
              :aspect-ratio="$vuetify.breakpoint.mdAndUp ? '1.333' : '2'"
              @click="dialog_img = true"
            ></v-img>
          </v-flex>
        </v-col>
        <v-col cols="12" md="5">
          <v-card tile flat class="transparent">
            <v-card-title
              class="blue--text d-block text-center text-md-left text-uppercase display-1"
            >
              {{ tour.title }}
            </v-card-title>
            <v-card-text class="text-justify">
              {{ tour.description }}
            </v-card-text>
            <v-card-actions>
              <v-flex class="d-flex d-md-block justify-end">
                <v-btn
                  rounded
                  outlined
                  color="blue"
                  @click="dialog_form = true"
                >
                  me interesa
                </v-btn></v-flex
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!--BUTTON PROGRAM-->
      <v-row
        style="max-height:73px;"
        class="light-blue lighten-4 mx-0"
        justify="center"
      >
        <v-btn text color="blue" class="btn-tour-program">program</v-btn>
        <v-btn
          icon
          color="blue"
          class="btn-tour-arrow"
          @click="$vuetify.goTo('#program-content', options)"
        >
          <v-icon x-large class="font-weight-thin">mdi-chevron-down</v-icon>
        </v-btn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-button"
          viewBox="0 0 1606 421"
          preserveAspectRatio="none"
        >
          <path
            d="M799.2-6c425,0,1105.512,9.851,777.132,7.481C1267.33-.75,1231.8,418,806.793,418S318.815,3.5,37.256,1.481C-326.36-1.133,374.2-6,799.2-6Z"
          ></path>
        </svg>
      </v-row>
    </v-layout>

    <!--PROGRAM CONTENT-->
    <v-layout id="program-content" class="light-blue lighten-4">
      <TimeLine :list="tour.program" />
    </v-layout>
    <DialogForm :dialog.sync="dialog_form" :tour="tour.title" />
  </v-content>
</template>
<script>
import ToursObject from '@/data/tours.js'
import TimeLine from '@/components/tours/timeLine'
import DialogForm from '@/components/tours/dialog_form'
export default {
  name: 'Id',
  components: { TimeLine, DialogForm },
  data() {
    return {
      dialog_form: false
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
  created() {
    const id = this.$route.params.id
    const locale = this.$i18n.locale
    this.$vuetify.clientWidth--
    this.$vuetify.clientHeight++
    this.tour = ToursObject.tourById(id, locale)
  },
  mounted() {}
}
</script>

<style scoped>
.svg-button {
  fill: white;
  background-color: transparent;
  height: 68px;
  width: 300px;
}
.btn-tour-program {
  position: absolute;
  left: 50%;
  margin-left: -49px;
  margin-top: -14px;
}
.btn-tour-arrow {
  position: absolute;
  left: 50%;
  margin-left: -15px;
  margin-top: 14px;
}
.shadow {
  -webkit-box-shadow: 0 45px 33px -25px rgba(13, 71, 161, 0.57);
  -moz-box-shadow: 0 45px 33px -25px rgba(13, 71, 161, 0.57);
  box-shadow: 0 45px 33px -25px rgba(13, 71, 161, 0.57);
}
.br-5 {
  border-radius: 5px;
}
</style>
