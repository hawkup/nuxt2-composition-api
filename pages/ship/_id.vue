<template>
  <div>
    <NuxtLink :to="{ name: 'history' }">Go to History</NuxtLink>
    <p>This is ship detail page {{ status }}</p>
    <p>{{ company }}</p>
    <p>{{ ship }}</p>
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
import { defineComponent } from '@nuxtjs/composition-api'
import { useToggle } from '@vueuse/core'
import { provideToast, useToast } from 'vue-toastification/composition'

import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {},
      ship: {}
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
  async fetch() {
    this.$cache.route.setCacheable()

    const id = this.$route.params.id

    try {
      this.ship = await this.$axios.$get(`https://api.spacex.land/rest/ship/${id}`)
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
