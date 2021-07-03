<template>
  <div>
    This is ship page {{ status }}
    <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
    <button @click="open">open</button>
    <button @click="close">close</button>
    {{ company }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import companyQuery from '~/graphql/queries/company.gql'

export default Vue.extend({
  data() {
    return {
      company: {},
      ships: [],
      status: false
    }
  },
  async fetch() {
    try {
      this.ships = await this.$axios.$get('https://api.spacex.land/rest/ships')
    } catch (e) {
      console.log(e)
    }

    try {
      const response = await this.$apollo.query({ query: companyQuery })
      this.company = response.data.company
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    open() {
      this.status = true
    },
    close() {
      this.status = false
    }
  }
})
</script>