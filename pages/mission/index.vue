<template>
  <div>
    This is mission page {{ status }}
    <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
    <button @click="open">open</button>
    <button @click="close">close</button>
    {{ company }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import companyQuery from '~/graphql/queries/company.gql'

@Component
export default class MissionIndex extends Vue {
  company = {}
  missions = []
  status = false

  setup() {
    console.log('setup')
  }

  async fetch() {
    try {
      this.missions = await this.$axios.$get('https://api.spacex.land/rest/missions')
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