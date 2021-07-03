<template>
  <div>
    <p>Ship</p>
    <NuxtLink :to="{ name: 'ship-id', params: { id: data.id } }">Open</NuxtLink>
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