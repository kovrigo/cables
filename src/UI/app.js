import { createApp } from 'vue/dist/vue.esm-bundler';
import AppWrapper from './app.vue';

export default class CableWidget {

  constructor(element, options) {
		var app = createApp(AppWrapper);
		app.config.globalProperties.cableWidgetOptions = options;
		app.mount(element);
  }

}

//export { CableWidget };