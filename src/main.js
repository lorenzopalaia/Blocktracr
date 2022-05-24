import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from "mitt" //event bus


const emitter = mitt();

const app = createApp(App);
app.use(router);
app.config.globalProperties.emitter = emitter; // event bus to send events by components
app.mount('#app');