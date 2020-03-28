module.exports = {
  devServer: {
    https: true,
    proxy: 'https://api.kawalcorona.com/'
  },
  pwa: {
    workboxOptions: {
        skipWaiting: true
    }
}
}
