<template>
  <div>
    <NuxtLink :to="{ name: 'history' }">Go to History</NuxtLink>
    <ShipList />
    <feature-toggle name="company" :value="true">
      <p>{{ company.founder }}</p>
      <p>{{ company.name }}</p>
      <p>{{ company.summary }}</p>
    </feature-toggle>
    <ShipResult />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {}
    }
  },
  backupData() {
    return this.$data
  },
  fetchOnServer: true,
  async fetch() {
    try {
      const response = await this.$apollo.query({ query: companyQuery })
      this.company = response.data.company
    } catch (e) {
      console.log(e)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 10000)
    })
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  }
})
</script>
