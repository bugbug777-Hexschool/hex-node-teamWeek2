import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/scss/all.scss';

createApp(App).use(router).mount('#app');
