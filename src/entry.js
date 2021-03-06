import './init'
import Vue from 'vue'
import App from './app.vue'
import router from './router'

const start = () => {
  return new Vue({
    el: '#app',
    components: {
      App
    },
    template: '<app></app>',
    router
  })
}

start()
