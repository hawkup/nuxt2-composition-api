<template>
  <div>
    <p>random: {{ random }}</p>
    <p>info: {{ info }}</p>
    <input type="text" class="border" v-model="info" />
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import { ref } from '@nuxtjs/composition-api'

export default vue.extend({
  setup() {
    const random = Math.random()
    const info = ref()
    return { random, info }
  }
})
</script>
