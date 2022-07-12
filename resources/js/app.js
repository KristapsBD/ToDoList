require('./bootstrap');

import { createApp } from 'vue';

import App from './vue/app';

const app = createApp(App);
app.mount('#app');
