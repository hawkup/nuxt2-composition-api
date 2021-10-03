export default function() {
  if (!Array.prototype.flat) {
    import('array-flat-polyfill')
  }
}
