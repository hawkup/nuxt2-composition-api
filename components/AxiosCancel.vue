<template>
  <div>
    Response: {{ data }}
  </div>
</template>

<script>
import { defineComponent, ref, useContext, watchEffect } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: String
  },
  setup(props) {
    const data = ref(null)
    const { app } = useContext()

    let source = app.$axios.CancelToken.source()

    const callAPI = async (id) => {
      if (!id) return

      new Promise((resolve) => {
        setTimeout(async () => {
          try {
            const response = await app.$axios.get(`https://api.spacex.land/rest/mission/${id}`, { cancelToken: source.token })
            data.value = response.data
          } catch (e) {
            if (app.$axios.isCancel(e)) {
              console.log('cancel')
            } else {
              console.log(e)
            }
          }
          resolve()
        }, 2000)
      })
    }

    watchEffect(async (onInvalidate) => {
      await callAPI(props.id)

      onInvalidate(() => {
        // TODO fix cancel every request
        source.cancel()
      })
    })

    return {
      data
    }
  }
})
</script>
