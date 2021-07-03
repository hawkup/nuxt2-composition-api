<template>
  <div>
    This is mission page {{ status }}
    <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
    <button @click="open">open</button>
    <button @click="close">close</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MissionIndex extends Vue {
  missions = []
  status = false

  async fetch() {
    this.missions = await this.$axios.$get('https://api.spacex.land/rest/missions')
  }

  open() {
    this.status = true
  }

  close() {
    this.status = false
  }
}
</script>