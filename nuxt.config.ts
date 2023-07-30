// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Delizioso Tangerang",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Delizioso Tangerang' },
        { name: 'format-detection', content: 'telephone=no'}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        }, 
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'
        }, 
        {
          rel: 'canonical',
          href: 'https://getbootstrap.com/docs/5.3/examples/carousel/'
        }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.7.0.min.js',
          type: 'text/javascript'
        }, 
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        }
      ],
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
