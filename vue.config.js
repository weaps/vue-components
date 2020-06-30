module.exports = {
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}