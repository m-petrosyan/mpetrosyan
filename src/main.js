import {createApp} from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import VueGtag from "vue-gtag-next";

createApp(App)
    .use(VueGtag, {property: {id: "G-P60VM29Z1R"}})
    .mount('#app')
