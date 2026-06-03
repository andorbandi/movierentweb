export default {
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        movies: 'movies.html'
      }
    }
  }
}
