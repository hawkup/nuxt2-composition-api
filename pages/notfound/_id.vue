<template>
  <nuxt-child keep-alive />
</template>

<script lang="ts">
export default {
  mounted() {
    if (!this.$route.params.id) {
      this.$nuxt.error({ statusCode: 404, message: 'Not found' })
    }
  }
}
</script>
