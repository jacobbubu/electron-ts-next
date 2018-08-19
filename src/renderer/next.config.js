const withTypescript = require('@zeit/next-typescript')

const config = withTypescript({
  exportPathMap () {
    // Let Next.js know where to find the entry page
    // when it's exporting the static bundle for the use
    // in the production version of your app
    return {
      '/home': { page: '/home' },
      '/about': { page: '/about' },
      '/start': { page: '/start' },
    }
  }
})

module.exports = config
