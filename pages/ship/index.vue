<template>
  <div>
    This is ship page {{ status }}
    <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
    <button @click="open">open</button>
    <button @click="close">close</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ships: [],
      status: false
    }
  },
  async fetch() {
    this.ships = await this.$axios.$get('https://api.spacex.land/rest/ships')
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