import _ from 'lodash';
import { createApp } from 'vue/dist/vue.esm-bundler';
import TestApp from './app.vue'

const app = createApp({});
app.component('app', TestApp);
app.mount('#app');