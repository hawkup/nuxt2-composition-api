<template>
  <div>
    This is ship detail page {{ status }}
    {{ ship }}
    <button @click="open">open</button>
    <button @click="close">close</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ship: {},
      status: false
    }
  },
  async fetch() {
    const id = this.$route.params.id
    this.ship = await this.$axios.$get(`https://api.spacex.land/rest/ship/${id}`)
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