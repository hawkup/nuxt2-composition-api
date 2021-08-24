<template>
  <div>
    <h1>one</h1>
    <div>
      <p>random: {{ random }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import vue from 'vue'

export default vue.extend({
  setup() {
    const random = Math.random()
    return { random }
  }
})
</script>
