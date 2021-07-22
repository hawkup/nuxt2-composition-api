<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      <slot :item="item">
        <!-- Fallback -->
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['items']
}
</script>
