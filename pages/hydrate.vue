<template>
  <LazyHydrate never>
    <div>
      <h1>Hydrate</h1>
      <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
      <ShipList />
    </div>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate
  },
  async asyncData({ app }) {
    const missions = await app.$axios.$get('https://api.spacex.land/rest/missions')
    return { missions }
  }
}
</script>
