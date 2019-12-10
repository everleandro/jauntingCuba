<template>
  <v-content>
    <v-container fill-height fluid class="blue-grey lighten-5 py-0">
      <v-row class="d-flex justify-center">
        <v-col cols="10" sm="6" md="5" lg="4">
          <v-img
            :src="require('assets/error/_404.png')"
            aspect-ratio="1.269"
            class="align-end"
          ></v-img>
        </v-col>
        <v-col cols="12" class="justify-center d-flex">
          <v-card-title id="not-found-title" class="headline">
            {{ $t('404Code') }}
          </v-card-title>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<!--<v-card-text>-->
<!--  {{ $t('404Code') }}-->
<!--</v-card-text>-->
<!--<h1 v-if="error.statusCode === 404">-->
<!--  {{ pageNotFound }}-->
<!--</h1>-->
<!--<h1 v-else>-->
<!--  {{ otherError }}-->
<!--</h1>-->
<!--<v-btn nuxt :to="localePath('index', 'en')" exact text>-->
<!--  {{ $t('home') }}-->
<!--</v-btn>-->
<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
#not-found-title {
  letter-spacing: -1px !important;
}
h1 {
  font-size: 20px;
}
</style>
