<template>
  <v-flex class="md10 offset-md-1">
    <v-timeline class="mx-auto pa-3" dense>
      <v-timeline-item
        v-for="(item, index) in list"
        :key="index"
        color="light-blue lighten-2"
        small
      >
        <v-card class="pb-3">
          <v-card-title>
            {{ item.action }}
          </v-card-title>
          <v-card-text
            v-for="(description, key) in item.sub_action"
            :key="key"
            class="pb-0 pl-9"
          >
            {{ description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-flex>
</template>

<script>
export default {
  name: 'TimeLine',
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
