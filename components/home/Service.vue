<template>
  <v-layout row wrap class="py-12 mx-auto" scrolleable>
    <v-flex class="mx-auto" lg10 md12 row wrap>
      <v-flex
        v-for="item in serviceList"
        :key="item.id"
        xs12
        sm6
        md4
        class="px-2"
      >
        <v-card
          flat
          outlined
          class="mx-auto my-3 py-4"
          height="150"
          max-width="350"
          :to="
            localePath({
              name: 'services-service',
              params: { service: `service${item.id}` }
            })
          "
        >
          <v-row align="center" justify="center" class="mx-0">
            <v-btn fab small color="blue" class="white--text" depressed>
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-row>
          <v-flex class="align-center mx-0 justify-center d-flex flex-column">
            <v-card-title id="service-title" class="pt-1 px-1 text-center">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="font-weight-medium letter-spacing-1 pb-1">
              {{ item.subtitle }}
            </v-card-subtitle>
          </v-flex>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    serviceList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
#service-title {
  letter-spacing: -1px !important;
}
</style>
