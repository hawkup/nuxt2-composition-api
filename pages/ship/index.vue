<template>
  <div>
    <p>{{ company.founder }}</p>
    <p>{{ company.name }}</p>
    <p>{{ company.summary }}</p>
    <ShipResult />
    <ShipList />
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
  fetchOnServer: true,
  async fetch() {
    try {
      const response = await this.$apollo.query({ query: companyQuery })
      this.company = response.data.company
    } catch (e) {
      console.log(e)
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  }
})
</script>
