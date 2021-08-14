<template>
  <div>
    <h1>Sanitize</h1>
    <div class="py-96"></div>
    <div class="py-96"></div>
    <div v-html="html" />
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import sanitizeHtml from 'sanitize-html'

export default vue.extend({
  setup() {
    const dirty = `
      <img src="https://via.placeholder.com/100" />
      <img src="https://via.placeholder.com/200" />
      <img src="https://via.placeholder.com/300" />
      <img src="https://via.placeholder.com/400" />
      <img src="https://via.placeholder.com/500" />
      <img src="https://via.placeholder.com/600" />
      <img src="https://via.placeholder.com/700" />
      <img src="https://via.placeholder.com/800" />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gQF23Vw0keg" title="YouTube video player" frameborder="0"></iframe>
    `

    const html = sanitizeHtml(dirty, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'loading', 'width', 'height'],
        iframe: ['width', 'height', 'src', 'title', 'frameborder', 'loading']
      },
      allowedIframeHostnames: ['www.youtube.com'],
      transformTags: {
        'img': function(tagName: string, attribs: sanitizeHtml.Attributes): sanitizeHtml.Tag {
          return {
            tagName: 'img',
            attribs: {
              ...attribs,
              loading: 'lazy'
            }
          }
        },
        'iframe': function(tagName: string, attribs: sanitizeHtml.Attributes): sanitizeHtml.Tag {
          return {
            tagName: 'iframe',
            attribs: {
              ...attribs,
              loading: 'lazy'
            }
          }
        }
      }
    })

    return { html }
  }
})
</script>
