<template>
  <nuxt-child keep-alive />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    if (!this.$route.params.id) {
      this.$nuxt.error({ statusCode: 404, message: 'Not found' })
    }
  }
})
</script>
