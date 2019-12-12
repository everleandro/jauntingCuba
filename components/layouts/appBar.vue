<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="d-md-none"
      disable-resize-watcher
    >
      <v-list class="mt-12">
        <v-list-item
          v-for="btn in link_button"
          :key="btn.sub_action"
          link
          nuxt
          :to="localePath(btn.to)"
          exact
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">{{ btn.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            {{ $t(btn.sub_action) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :color="transparent ? 'transparent' : 'white'"
      fixed
      dense
      app
      :flat="transparent"
    >
      <v-btn
        :class="drawer || !transparent ? 'black--text' : 'white--text'"
        class="d-md-none"
        icon
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items
        :class="transparent ? 'white--text' : 'black-text'"
        class="hidden-sm-and-down"
      >
        <v-btn
          v-for="btn in link_button"
          :key="btn.sub_action"
          nuxt
          :to="localePath(btn.to)"
          :exact="btn.exact"
          text
        >
          {{ $t(btn.sub_action) }}
        </v-btn>
        <v-btn
          v-for="locale in availableLocales"
          :key="locale.code"
          nuxt
          text
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.code }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'AppBar',
  props: {
    transparent: { type: Boolean, required: true }
  },
  data() {
    return {
      lang: 'en',
      drawer: false,
      link_button: [
        { sub_action: 'home', icon: 'mdi-home', to: 'index', exact: true },
        {
          sub_action: 'services',
          icon: 'mdi-face-agent',
          to: 'services',
          exact: true
        },
        { sub_action: 'tours', icon: 'mdi-walk', to: 'tours', exact: false },
        {
          sub_action: 'about_us',
          icon: 'mdi-account-group',
          to: 'about_us',
          exact: true
        },
        {
          sub_action: 'contact_us',
          icon: 'mdi-mailbox-open-up-outline',
          to: 'contact_us',
          exact: true
        }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>
<style scoped>
.white--text .theme--light.v-btn {
  color: white;
}
</style>
