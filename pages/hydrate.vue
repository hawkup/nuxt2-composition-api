<template>
  <LazyHydrate never>
    <div>
      <h1>Hydrate</h1>
    </div>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate
  }
}
</script>
