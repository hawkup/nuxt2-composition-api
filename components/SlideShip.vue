<template>
  <Flicking ref="flicking" @ready="ready" @will-change="willChange" :options="{ align: 'prev', circular: false }">
    <div class="panel" v-for="ship in ships" :key="ship.id">
      <img :src="ship.image" width="300" class="pointer-events-none" />
    </div>
    <div slot="viewport" class="flicking-pagination flicking-pagination-bullets">
      <span v-for="(ship, index) in ships" :key="ship.id" @click="move(index)" class="flicking-pagination-bullet" :class="{'flicking-pagination-bullet-active': activeIndex === index}"></span>
    </div>
  </Flicking>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
import '@egjs/vue-flicking/dist/flicking.css'

export default Vue.extend({
  props: {
    ships: {
      type: Array,
      required: true
    }
  },
  components: {
    Flicking
  },
  data() {
    return {
      activeIndex: 0,
      duration: 3_000
    }
  },
  methods: {
    ready() {
      const flicking = this.$refs.flicking as any

      if (!flicking) return

      if (flicking.animating) return

      window.setTimeout(() => {
        const status = flicking.getStatus()

        if (status.index === status.panels.length - 1) {
          flicking.moveTo(0).catch(() => void 0)
        } else {
          flicking.next().catch(() => void 0)
        }

        this.ready()
      }, this.duration)
    },
    move(index: number) {
      const flicking = this.$refs.flicking as any
      if (!flicking.animating) {
        flicking.moveTo(index)
      }
    },
    willChange(element: any) {
      this.activeIndex = element.index
    }
  }
})
</script>

<style scoped>
.flicking-pagination {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 2;
}
.flicking-pagination-bullet {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  background-color: rgb(10 10 10/10%);
}
.flicking-pagination-bullet.flicking-pagination-bullet-active {
  background-color: #f2a65e;
}
</style>
