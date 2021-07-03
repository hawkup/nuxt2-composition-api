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
      <button @click="showToast">show toast</button>
      <button @click="clearToasts">clear toast</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { useToggle } from '@vueuse/core'
import { provideToast, useToast } from 'vue-toastification/composition'

import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {},
      ships: []
    }
  },
  setup() {
    provideToast({ timeout: 3000 })

    const [status, toggleStatus] = useToggle()

    const toast = useToast()
    const showToast = () => toast.success("I'm a toast!")
    const clearToasts = () => toast.clear()

    return {
      status,
      toggleStatus,
      showToast,
      clearToasts
    }
  },
  async asyncData({ app }) {
    try {
      const shipsCache = await app.$cache.data.get('ship_index')
      if (shipsCache) {
        return { ships: shipsCache }
      }

      const ships = await app.$axios.$get('https://api.spacex.land/rest/ships')
      app.$cache.data.set('ship_index', ships)

      return { ships }
    } catch (e) {
      console.log(e)
    }
  },
  async fetch() {

    try {
      const response = await this.$apollo.query({ query: companyQuery })
      this.company = response.data.company
    } catch (e) {
      console.log(e)
    }
  }
})
</script>