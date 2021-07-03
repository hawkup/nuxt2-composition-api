<template>
  <div>
    This is ship page
    <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ships: []
    }
  },
  async fetch() {
    this.ships = await this.$axios.$get('https://api.spacex.land/rest/ships')
  }
})
</script>