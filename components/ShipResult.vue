<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { AxiosRequestConfig } from 'axios'

import useRequest from '~/composables/useRequest'

export default defineComponent({
  setup() {
    const request = computed(() => {
      const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: 'https://api.spacex.land/rest/ships-result'
      }
      return requestConfig
    })

    const { data, error } = useRequest(request)

    return { data , error }
  }
})
</script>
