<template>
  <div v-if="loading" class="inset-0 fixed bg-white z-50 flex items-center">
    <p class="text-center w-full">loading</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: true,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
