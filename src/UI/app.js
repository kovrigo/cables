import { createApp } from 'vue/dist/vue.esm-bundler';
import AppWrapper from './app.vue';
//import { CableViewer } from "../CableViewer";

export default class CableWidget {

  constructor(element, options) {
  	console.log('cable widget constructor');
		var app = createApp(AppWrapper);
		app.config.globalProperties.cableWidgetOptions = options;
		app.mount(element);
		//this.cableViewer = new CableViewer();
		//console.log(this.cableViewer.test);
  }

}

//export { CableWidget };