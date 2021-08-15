<template>
  <div>
    <div>
      Lazy Render
    </div>
    <div class="pb-96" />
    <div class="pb-96" />
    <div class="pb-96" />
    <div class="pb-96" />
    <lazy-component>
      <div>
        <capsule />
      </div>
      <!-- <span slot="placeholder" class="text-center py-8">Loading..</span> -->
    </lazy-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Capsule from '~/components/Capsule.vue'

export default Vue.extend({
  components: { Capsule },

})
</script>
