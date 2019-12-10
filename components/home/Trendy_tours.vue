<template>
  <v-layout wrap justify-center>
    <v-flex v-for="item in list" :key="item.id" xs10 md4>
      <v-card class="ma-3" flat outlined>
        <v-img height="250" :src="item.imgUrl"></v-img>

        <div
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'height: auto'
              : 'height: 294px;overflow: hidden;'
          "
        >
          <v-card-title class="align-start ">{{ item.title }}</v-card-title>

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
