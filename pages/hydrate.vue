<template>
  <div>
    <LazyHydrate never>
      <h1>Hydrate</h1>
    </LazyHydrate>
    <LazyHydrate when-idle>
      <div>
        <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
      </div>
    </LazyHydrate>
    <LazyHydrate when-idle>
      <ShipList />
    </LazyHydrate>
  </div>
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
