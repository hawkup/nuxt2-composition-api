<template>
  <ul class="gallery">
    <li style="background: #f6bd60;"></li>
    <li style="background: #f7ede2;"></li>
    <li style="background: #f5cac3;"></li>
    <li style="background: #84a59d;"></li>
    <li style="background: #f28482;"></li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    const slider = document.querySelector('.gallery') as any
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    if (!slider) return

    slider.addEventListener('mousedown', (e: any) => {
      isDown = true
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false
    })

    slider.addEventListener('mouseup', () => {
      isDown = false
    })

    slider.addEventListener('mousemove', (e: any) => {
      if (!isDown) return
      e.preventDefault()

      const x = e.pageX - slider.offsetLeft
      const SCROLL_SPEED = 3
      const walk = (x - startX) * SCROLL_SPEED
      slider.scrollLeft = scrollLeft - walk
    })
  }
})
</script>

<style scoped>
.gallery {
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(10, 80vw);
	grid-template-rows: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	overflow-y: scroll;
	height: 90vh;
	scroll-snap-type: both mandatory;
	scroll-padding: 1rem;
  scroll-behavior:smooth;
}

.active {
	scroll-snap-type: unset;
}

li {
	scroll-snap-align: center;
	display: inline-block;
	border-radius: 3px;
	font-size: 0;
}

.gallery {
  -ms-overflow-style: none;
}

.gallery::-webkit-scrollbar {
  display: none;
}
</style>
