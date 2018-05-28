import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.use(Vuetify)

window.EventBus = new Vue()

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})