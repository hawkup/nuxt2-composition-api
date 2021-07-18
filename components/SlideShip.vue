<template>
  <Flicking ref="flicking" @will-change="willChange" :plugins="plugins" :options="{ align: 'prev', circular: false }">
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
import { AutoPlay } from '@egjs/flicking-plugins'


export default Vue.extend({
  props: {
    ships: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      plugins: [
        new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })
      ]
    }
  },
  methods: {
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
