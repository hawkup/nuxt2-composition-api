<template>
  <div>
    <p>This is mission page {{ status }}</p>
    <p>{{ company }}</p>
    <div>
      <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
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
import { Component, Vue } from 'nuxt-property-decorator'
import { useToggle } from '@vueuse/core'
import { provideToast, useToast } from 'vue-toastification/composition'

import companyQuery from '~/graphql/queries/company.gql'

@Component({
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
  }
})
export default class MissionIndex extends Vue {
  company = {}
  missions = []

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
}
</script>