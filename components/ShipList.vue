<template>
  <div>
    <!-- if you would like to use `fetch` on server. Don't use <client-only /> for the root div -->
    <client-only>
      <SlideShip :ships="ships" />
      <div v-if="$fetchState.pending" class="grid grid-cols-1 md:gap-4 md:grid-cols-3">
        <PuSkeleton height="200px" />
        <PuSkeleton height="200px" />
        <PuSkeleton height="200px" />
        <PuSkeleton height="200px" />
        <PuSkeleton height="200px" />
        <PuSkeleton height="200px" />
      </div>
      <div v-else-if="$fetchState.error">
        Error
      </div>
      <div v-else>
        <div class="grid grid-cols-1 md:gap-4 md:grid-cols-3">
          <Ship v-for="ship in ships" :key="ship.id" :data="ship" />
        </div>
        <scroll-loader :loader-method="loadMoreShips" :loader-disable="loadingStatus === 'pending' || loadingStatus === 'rejected' || loadingStatus === 'done'">
          <div class="grid grid-cols-1 md:gap-4 md:grid-cols-3">
            <PuSkeleton height="200px" />
            <PuSkeleton height="200px" />
            <PuSkeleton height="200px" />
            <PuSkeleton height="200px" />
            <PuSkeleton height="200px" />
            <PuSkeleton height="200px" />
          </div>
        </scroll-loader>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      ships: [],
      limit: 12,
      offset: 0,
      loadingStatus: 'idle' as 'idle' | 'pending' | 'resolved' | 'rejected' | 'done'
    }
  },
  fetchOnServer: true,
  async fetch() {
    try {
      this.offset = 0
      const shipsCache = await this.$cache.data.get('ship_index')
      if (shipsCache) {
        this.ships = shipsCache
        this.offset += this.limit
      } else {
        const ships = await this.getShips()
        this.$cache.data.set('ship_index', ships)
        this.ships = ships
      }
    } catch (e) {
      console.log(e)
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  methods: {
    move(index: any) {
      const flicking: any = this.$refs.flicking
      flicking.moveTo(index)
      console.log(this.$refs.flicking)
    },
    async getShips() {
      this.loadingStatus = 'pending'
      const ships = await this.$nuxt.$axios.$get('https://api.spacex.land/rest/ships', { params: { limit: this.limit, offset: this.offset } })
      this.offset += this.limit
      this.loadingStatus = 'resolved'
      return ships
    },
    async loadMoreShips() {
      const ships = await this.getShips()
      this.ships = this.ships.concat(ships)
      if (ships.length < this.limit) {
        this.loadingStatus = 'done'
      }
    }
  }
})
</script>
