<template>
  <NuxtLink :to="{ name: 'ship-id', params: { id: data.id } }">
    <div>
      <img :src="data.image" width="300" />
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
