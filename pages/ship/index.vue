<template>
  <div>
    <p>This is ship page {{ status }}</p>
    <p>{{ company }}</p>
    <div>
      <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
    </div>
    <div>
      <button @click="open">open</button>
      <button @click="close">close</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {},
      ships: [],
      status: false
    }
  },
  setup() {
    console.log('setup')
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