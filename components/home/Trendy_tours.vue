<template>
  <v-layout wrap justify-center>
    <v-flex v-for="item in list" :key="item.id" xs12 md6 lg4>
      <v-card class="ma-3" flat outlined>
        <v-img height="250" :src="item.imgUrl"></v-img>
        <div>
          <v-card-title class="align-start blue--text">{{
            item.title
          }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

          <v-divider class="mx-4"></v-divider>

          <v-card-text class="text-justify">
            <div>{{ item.description }}</div>
          </v-card-text>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'TrendyTours',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped></style>
