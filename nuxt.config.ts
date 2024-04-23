// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro:{
    plugins: [
      '@/server/index'
    ]
  },
  app:{
    head:{
      title:"etfSelector",
      link:[
        { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"},
        { rel: 'icon', type: 'image/x-icon', href:"./public/favicon.ico" }
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js" },
        { src: "https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"}
      ],

    },
    
  }
})
