
const { Nuxt, Builder } = require('nuxt')
const fastify = require('fastify')({
  logger: false
})

const config = require('../nuxt.config')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  fastify.setNotFoundHandler((request, reply) => nuxt.render(request.raw, reply.raw))

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
