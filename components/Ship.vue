<template>
  <NuxtLink :to="{ name: 'ship-id', params: { id: data.id } }">
    <div>
      <picture>
        <source media="(min-width: 800px)" :srcset="data.image">
        <img :src="data.image" :alt="data.name" loading="lazy" width="300" height="300">
      </picture>
      <span>{{ data.name }}</span>
    </div>
  </NuxtLink>
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
