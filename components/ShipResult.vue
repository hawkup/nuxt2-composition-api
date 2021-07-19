<template>
  <div>
    {{ state }}
    <button @click="setState(10)"> click set state = 10</button>
    {{ data }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { AxiosRequestConfig } from 'axios'

import useRequest from '~/composables/useRequest'
import { useState } from '~/composables/useState'

export default defineComponent({
  setup() {
    const request = computed(() => {
      const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: 'https://api.spacex.land/rest/ships-result'
      }
      return requestConfig
    })

    const { state, setState } = useState(1)

    const { data, error } = useRequest(request)

    return { data, error, state, setState }
  }
})
</script>
