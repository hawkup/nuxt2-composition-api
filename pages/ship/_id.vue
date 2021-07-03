<template>
  <div>
    This is ship detail page
    {{ ship }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ship: {}
    }
  },
  async fetch() {
    const id = this.$route.params.id
    this.ship = await this.$axios.$get(`https://api.spacex.land/rest/ship/${id}`)
  }
})
</script>