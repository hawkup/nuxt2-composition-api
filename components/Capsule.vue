<template>
  <div class="w-full">
    <div v-if="fetchState.pending" class="w-full text-center py-8">Loading...</div>
    <div v-else v-for="capsule in capsules" :key="capsule.id" class="mb-4">
      <p>{{ capsule.id }} {{ capsule.type }} {{ capsule.status }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup() {
    const capsules = ref()

    const { fetch, fetchState } = useFetch(async () => {
      const response = await axios.get('https://api.spacex.land/rest/capsules')
      capsules.value = response?.data
    })

    // Manually trigger a refetch
    fetch()

    return { capsules, fetchState }
  }
})
</script>
