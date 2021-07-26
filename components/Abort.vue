<template>
  <div>
    Response: {{ data }}
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from '@nuxtjs/composition-api'

// https://css-tricks.com/how-to-cancel-pending-api-requests-to-show-correct-data/
// https://medium.datadriveninvestor.com/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
export default defineComponent({
  props: {
    id: String
  },
  setup(props) {
    const abortController = ref(new AbortController())
    const data = ref(null)

    const callAPI = async (id, signal) => {
      if (!id) return

      // TODO fix can not set data.value = null

      new Promise((resolve) => {
        setTimeout(async () => {
          const response = await fetch(`https://api.spacex.land/rest/mission/${id}`, { signal })
          data.value = await response.json()
          resolve()
        }, 2000)
      })
    }

    watchEffect(async (onInvalidate) => {
      const { signal } = abortController.value

      await callAPI(props.id, signal)

      onInvalidate(() => {
        if (abortController.value) {
          abortController.value.abort()
          abortController.value = new AbortController()
        }
      })
    })

    return {
      data
    }
  }
})
</script>
