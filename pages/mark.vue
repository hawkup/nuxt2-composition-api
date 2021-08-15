<template>
  <div>
    <NuxtLink :to="{ name: 'history' }">Go to History</NuxtLink>
    <div v-html="contentHtml"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import content from 'raw-loader!~/static/example.md'

export default Vue.extend({
  data() {
    return {
      contentHtml: ''
    }
  },
  mounted() {
    const worker = this.$worker.createWorker()

    worker.onmessage = ({ data }: { data: any}) => {
      this.contentHtml = data
    }

    worker.postMessage(content)
  }
})
</script>
