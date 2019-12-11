<template>
  <v-content>
    <v-layout
      fill-height
      :class="{ 'bg-about-us': $vuetify.breakpoint.mdAndDown }"
    >
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="11" sm="10" md="8" lg="6" class="mx-0">
          <v-card flat class="transparent">
            <v-card-title
              :class="
                $vuetify.breakpoint.mdAndDown
                  ? 'text-center d-block display-1'
                  : 'display-3'
              "
              >We are JauntingCuba
            </v-card-title>
            <v-card-text
              class="subtitle-1"
              :class="{ 'text-justify': $vuetify.breakpoint.mdAndDown }"
            >
              We are JauntingCuba Tour Agency –knowledgeable team of
              professionals committed to making you feel Cuba the way Cubans do.
              We strive to make your trip the most genuine and life-changing
              experience. We tailor our services and excursions to suit your
              expectations and interests. Our culture, traditions, customs, art
              and, history are at the core of our professional and specialized
              approach to show that Cuba is more than just cigars, rum, music,
              sun and, beaches. Become an eyewitness to what Cuba really is –a
              friendly, talkative people that live at open doors.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-none d-lg-block mx-0" md="4" lg="4">
          <v-img :src="require('assets/about_us/team_spirit.svg')"></v-img>
        </v-col>
      </v-row>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: 'Index'
}
</script>
<style scoped>
.bg-about-us:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  opacity: 0.2;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('~assets/about_us/team_spirit.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
