import { ref } from '@nuxtjs/composition-api'

export function useState(val: any) {
  const state = ref(val)

  const setState = (val: any) => { state.value = val }

  return {
    state,
    setState
  }
}
