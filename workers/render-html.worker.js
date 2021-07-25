import marked from 'marked'

self.addEventListener('message', ({ data }) => {
  const content = marked(data)
  self.postMessage(content)
})
