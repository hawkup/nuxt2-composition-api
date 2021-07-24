<template>
  <div>
    <button v-if="stackLength > 1" @click="goBack">Go back</button>
    <p>stack length: {{ stackLength }}</p>
    <pre>
      {{ $historyState }}
    </pre>
  </div>
</template>

<script>
export default {
  computed: {
    stackLength: function () {
      if (this.$isServer) return 0
      return this.$historyState.length
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
