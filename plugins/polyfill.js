export default function() {
  if (!Array.prototype.flat) {
    console.log('browser not support flat')
    setTimeout(() => {
      console.log('import flat polyfill')
      try {
        import('array-flat-polyfill')
      } catch (e) {
        console.log(e)
      }
    }, 5000)
  } else {
    console.log('browser support flat')
  }

  if (!Array.prototype.flat) {
    console.log('first polyfill broken')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://unpkg.com/array-flat-polyfill'
    document.head.appendChild(script)
  }
}
