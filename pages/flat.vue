<template>
  <div>
    <div>Array.prototype.flat: {{ Array.prototype.flat }}</div>
    <div>Array.prototype.flatMap: {{ Array.prototype.flatMap }}</div>
    <div>array: {{ [0, 1, 2, [3, 4]] }}</div>
    <div>flat: {{ [0, 1, 2, [3, 4]].flat() }}</div>
    <div>flatMap: {{ [1, 2, 3, 4].flatMap(x => [x, x * 2]) }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('[].flat()', [].flat())
    console.log('[1, 2, 3, 4].flatMap(x => [x, x * 2])', [1, 2, 3, 4].flatMap(x => [x, x * 2]))
  }
}
</script>
