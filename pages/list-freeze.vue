<template>
  <ul>
    <li v-for="item in data" :key="item.id">{{ item.id }}</li>
  </ul>
</template>

<script lang="ts">
export default {
  asyncData() {
    let response = []
    for (let i = 0; i < 100000; i++) {
      response.push({ id: i })
    }

    const data = Object.freeze(response)

    return { data }
  }
}
</script>
