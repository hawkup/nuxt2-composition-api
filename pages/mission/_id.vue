<template>
  <div>
    This is mission detail page {{ status }}
    {{ mission }}
    <button @click="open">open</button>
    <button @click="close">close</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MissionDetail extends Vue {
  mission = {}
  status = false

  async fetch() {
    const id = this.$route.params.id
    this.mission = await this.$axios.$get(`https://api.spacex.land/rest/mission/${id}`)
  }

  open() {
    this.status = true
  }

  close() {
    this.status = false
  }
}
</script>