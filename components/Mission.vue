<template>
  <div class="flex">
    <NuxtLink :to="{ name: 'history' }">Go to History</NuxtLink>
    <p> Mission </p>
    <NuxtLink :to="{ name: 'mission-id', params: { id: data.id } }">Open</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>
