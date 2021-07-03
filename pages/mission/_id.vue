<template>
  <div>
    This is mission detail page
    {{ mission }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MissionDetail extends Vue {
  mission = {}

  async fetch() {
    const id = this.$route.params.id
    this.mission = await this.$axios.$get(`https://api.spacex.land/rest/mission/${id}`)
  }
}
</script>