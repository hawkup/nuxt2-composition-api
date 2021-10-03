export default function() {
  if (!Array.prototype.flat) {
    console.log('not support flat')
    setTimeout(() => {
      console.log('import flat polyfill')
      import('array-flat-polyfill')
    }, 5000)
  }
}
