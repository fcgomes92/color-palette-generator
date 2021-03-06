module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
      },
    ],
  },
  loading: { color: '#fff' },
  css: ['./styles/global.css'],
  plugins: [],
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true,
  },
  serverMiddleware: [
    { path: '/api/palette', handler: '~/api/palette-picker.js' },
  ],
};
