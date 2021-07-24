export default function({ app, $gtm }) {
  $gtm.init(app.$config.gtm.id)
}
