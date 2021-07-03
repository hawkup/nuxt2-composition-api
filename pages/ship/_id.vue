<template>
  <div>
    This is ship detail page {{ status }}
    {{ ship }}
    <button @click="open">open</button>
    <button @click="close">close</button>
    {{ company }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import companyQuery from '~/graphql/queries/company.gql'

export default defineComponent({
  data() {
    return {
      company: {},
      ship: {},
      status: false
    }
  },
  setup() {
    console.log('setup')
  },
  async fetch() {
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