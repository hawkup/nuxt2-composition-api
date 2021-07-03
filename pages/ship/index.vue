<template>
  <div>
    <p>This is ship page {{ status }}</p>
    <p>{{ company }}</p>
    <div>
      <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
    </div>
    <div>
      <button @click="toggleStatus(true)">open</button>
      <button @click="toggleStatus(false)">close</button>
      <button @click="toggleStatus">toggle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useToggle } from '@vueuse/core'

import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {},
      ships: []
    }
  },
  setup() {
    const [status, toggleStatus] = useToggle()

    return {
      status,
      toggleStatus
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
  }
})
</script>