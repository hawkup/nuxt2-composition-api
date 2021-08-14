<template>
  <div>
    <div class="fixed top-0 bg-white">
      <p>Device Pixel Ratio: {{ pixelRatio }}</p>
      <p>width: {{ width }}</p>
      <p>height: {{ height }}</p>
    </div>
    <section class="mt-20 mb-12">
      <h1>img</h1>
      <img src="https://via.placeholder.com/200" />
    </section>
    <section class="mb-12">
      <!-- https://web.dev/optimize-cls -->
      <h1>img with width and height</h1>
      <div class="w-40">
        <img class="img-full" src="https://via.placeholder.com/200" width="100" height="100" />
      </div>
    </section>
    <section class="mb-12">
      <h1>img with width and height and css width</h1>
      <img src="https://via.placeholder.com/200" width="100" height="100" />
    </section>
    <section class="mb-12">
      <h1>img with srcset (display density descriptors)</h1>
      <img
        src="https://via.placeholder.com/200"
        srcset="https://via.placeholder.com/200 1x, https://via.placeholder.com/400 2x, https://via.placeholder.com/600 3x"
        width="100"
        height="100"
      />
    </section>
    <section class="mb-12">
      <h1>img with srcset (width descriptors)</h1>
      <img
        src="https://via.placeholder.com/200"
        srcset="https://via.placeholder.com/200 200w, https://via.placeholder.com/400 400w, https://via.placeholder.com/600 600w"
        width="100"
        height="100"
      />
    </section>
    <section class="mb-12">
      <h1>img with srcset (width descriptors) and sizes (px)</h1>
      <img
        src="https://via.placeholder.com/200"
        srcset="https://via.placeholder.com/200 200w, https://via.placeholder.com/400 400w, https://via.placeholder.com/600 600w"
        sizes="(max-width: 480px) 200px,(max-width: 768px) 400px, 600px"
        width="100"
        height="100"
      />
    </section>
    <!-- https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/#how-does-the-browser-select-the-correct-sizes-value -->
    <!-- https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948 -->
    <!-- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
    <!-- https://www.mydevice.io/ -->
    <section class="mb-12">
      <h1>img with srcset (width descriptors) and sizes (vw)</h1>
      <img
        src="https://via.placeholder.com/200"
        srcset="https://via.placeholder.com/200 200w, https://via.placeholder.com/400 400w, https://via.placeholder.com/600 600w"
        sizes="(max-width: 480px) 25vw,(max-width: 768px) 45vw, 600px"
        width="100"
        height="100"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { useDevicePixelRatio, useWindowSize } from '@vueuse/core'

export default Vue.extend({
  setup() {
    const { pixelRatio } = useDevicePixelRatio()
    const { width, height } = useWindowSize()

    return { pixelRatio, width, height }
  }
})
</script>

<style scoped>
.img-full {
  width: 100%;
  height: auto;
}
</style>
