<template>
  <div v-html="contentHtml"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      contentHtml: ''
    }
  },
  mounted() {
    const worker = this.$worker.createWorker()

    const content = require('~/static/example.md').default

    worker.onmessage = ({ data }: { data: any}) => {
      this.contentHtml = data
    }

    worker.postMessage(content)
  }
})
</script>
