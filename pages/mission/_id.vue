<template>
  <div>
    This is mission detail page {{ status }}
    {{ mission }}
    <button @click="open">open</button>
    <button @click="close">close</button>
    {{ company }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import companyQuery from '~/graphql/queries/company.gql'

@Component
export default class MissionDetail extends Vue {
  company = {}
  mission = {}
  status = false

  setup() {
    console.log('setup')
  }

  async fetch() {
    const id = this.$route.params.id

    try {
      this.mission = await this.$axios.$get(`https://api.spacex.land/rest/mission/${id}`)
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

  open() {
    this.status = true
  }

  close() {
    this.status = false
  }
}
</script>