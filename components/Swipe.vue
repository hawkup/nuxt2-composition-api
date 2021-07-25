<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #f6bd60;">Slide 1</div>
        <div class="swiper-slide" style="background: #f7ede2;">Slide 2</div>
        <div class="swiper-slide" style="background: #f5cac3;">Slide 3</div>
        <div class="swiper-slide" style="background: #84a59d;">Slide 4</div>
        <div class="swiper-slide" style="background: #f28482;">Slide 5</div>
      </div>
    </div>
    <div class="relative h-6">
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Swiper from 'swiper'

import SwiperCore, { Autoplay, Pagination } from 'swiper/core'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Pagination])

export default {
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      centeredSlidesBounds: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
</script>

<style scoped>
.swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  width: 80%;
}
.swiper-pagination {
  width: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  margin: 0 4px;
}
</style>
