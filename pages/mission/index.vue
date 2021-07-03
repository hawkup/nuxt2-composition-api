<template>
  <div>
    This is mission page
    <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MissionIndex extends Vue {
  missions = []

  async fetch() {
    this.missions = await this.$axios.$get('https://api.spacex.land/rest/missions')
  }
}
</script>