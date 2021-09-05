<template>
  <div>chunk/_id/video/_videoId</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Abort from '~/components/Abort.vue'
import Capsule from '~/components/Capsule.vue'
import Carousel from '~/components/Carousel.vue'
import Large from '~/components/Large.vue'
import Mission from '~/components/Mission.vue'
import Ship from '~/components/Ship.vue'
import ShipList from '~/components/ShipList.vue'
import Swipe from '~/components/Swipe.vue'
import TodoList from '~/components/TodoList.vue'
import Tutorial from '~/components/Tutorial.vue'

export default Vue.extend({
  components: {
    Abort,
    Capsule,
    Carousel,
    Large,
    Mission,
    Ship,
    ShipList,
    Swipe,
    TodoList,
    Tutorial
  }
})
</script>
