<template>
  <v-layout fluid row wrap class="mx-0" justify-space-around align-stretch>
    <v-flex v-for="item in list" :key="item.id" lg10 md12>
      <v-card class="my-4 mx-2" tile flat outlined>
        <v-row no-gutters wrap class="mx-0">
          <v-col md="4" cols="12" class="mx-0 d-flex">
            <v-img
              :aspect-ratio="$vuetify.breakpoint.mdAndUp ? '1.5' : '3'"
              :src="item.imgUrl"
            ></v-img>
          </v-col>
          <v-col
            md="6"
            cols="12"
            class="d-flex xs-12 flex-column justify-space-between"
          >
            <div>
              <v-card-title>
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle color="blue-grey lighten-5">
                {{ item.subtitle }}
              </v-card-subtitle>
              <v-card-text class="text-justify">{{ item.summary }}</v-card-text>
            </div>
            <v-card-actions class="d-flex justify-start">
              <v-tooltip
                v-for="service in item.services"
                :key="service.tooltip_text"
                top
              >
                <template v-slot:activator="{ on }">
                  <v-btn class="mx-2" icon large v-on="on">
                    <v-icon color="grey lighten-1">{{ service.icon }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ service.tooltip_text }}</span>
              </v-tooltip>
            </v-card-actions>
            <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
          </v-col>
          <v-col
            class="mx-0 d-flex wrap pa-2"
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-row justify-end pt-4'
                : 'flex-column justify-center align-center border-dashed'
            "
            md="2"
            cols="12"
          >
            <v-btn
              :outlined="$vuetify.breakpoint.mdAndUp"
              :text="$vuetify.breakpoint.smAndDown"
              color="light-blue darken-1"
              rounded
              nuxt
              :to="
                localePath({
                  name: 'tours-id',
                  params: { id: item.id }
                })
              "
            >
              more
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Offers',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: () => {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.border-dashed {
  position: relative;
  border-left: 2px dashed #e0e0e0;
}
/*.border-dashed:before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  width: 20px;*/
/*  height: 20px;*/
/*  border-bottom: thin solid rgba(0, 0, 0, 0.1);*/
/*  background: #eceff1;*/
/*  margin-left: -11px;*/
/*  border-radius: 50%;*/
/*  margin-top: -10px;*/
/*  top: 0;*/
/*  left: 0;*/
/*}*/
/*.border-dashed:after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  width: 20px;*/
/*  height: 20px;*/
/*  border-top: thin solid rgba(0, 0, 0, 0.1);*/
/*  background: #eceff1;*/
/*  margin-left: -11px;*/
/*  border-radius: 50%;*/
/*  margin-bottom: -10px;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*}*/
</style>
