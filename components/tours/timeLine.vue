<template>
  <v-flex class="md10 offset-md-1 pb-12 pt-6">
    <v-expansion-panels multiple :value="value">
      <v-expansion-panel v-for="(item, index) in list" :key="index">
        <v-expansion-panel-header class="blue--text">
          {{ item.action }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-text
            v-for="(description, key) in item.sub_action"
            :key="key"
            class="pb-0"
          >
            {{ description }}
          </v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
  },
  data: () => {
    return { value: [] }
  },
  mounted() {
    this.list.forEach((item, i) => {
      if (item.sub_action.length > 0) this.value.push(i)
    })
  }
}
</script>

<style scoped></style>
