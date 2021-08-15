<template>
  <div>Sentry</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
     this.$sentry.captureMessage('This works!')
  }
})
</script>
