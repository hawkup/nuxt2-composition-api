<template>
  <div>
    <h1>Not Hydrate</h1>
    <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
    <ShipList />
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const missions = await app.$axios.$get('https://api.spacex.land/rest/missions')
    return { missions }
  }
}
</script>
