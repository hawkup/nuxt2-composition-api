<template>
  <div>
    <h1>index</h1>
    {{ key }}
    <div>
      <p>random: {{ random }}</p>
      <p>info: {{ info }}</p>
      <input type="text" class="border" v-model="info" />
    </div>
    <div :key="key">
      <random />
    </div>
    <br />

    <NuxtLink to="/keep-alive/one">
      go to one
    </NuxtLink>
    <br />
    <NuxtLink to="/keep-alive/two">
      go to two
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import { ref, onActivated } from '@nuxtjs/composition-api'

export default vue.extend({
  setup() {
    const random = Math.random()
    const info = ref()
    const key = ref()

    onActivated(() => {
      key.value = Math.random()
    })

    return { random, info, key }
  }
})
</script>
