import Vue from 'vue'
import App from './App.vue'
import router from './router'
import index from './index'


Vue.use(index)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


