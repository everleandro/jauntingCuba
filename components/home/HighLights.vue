<template>
  <v-flex class="lg10 md12 mx-auto" row wrap>
    <v-flex v-for="item in highLight" :key="item.id" xs12 sm6 md3>
      <v-card class="ma-3" flat outlined>
        <v-img :src="item.imgUrl" height="130px"> </v-img>
        <v-card-title class="pt-1">
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle
          class="letter-spacing-1 pb-1"
          style="min-height: 70px;"
        >
          {{ item.subtitle }}
        </v-card-subtitle>
      </v-card>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: 'HighLight',
  props: {
    highLight: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: () => {
    return {}
  }
}
</script>

<style scoped></style>
