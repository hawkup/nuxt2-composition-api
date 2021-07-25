import RenderHtmlWorker from '~/workers/render-html.worker'

export default (context, inject) => {
  inject('worker', {
    createWorker () {
      return new RenderHtmlWorker()
    }
  })
}
