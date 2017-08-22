import 'vueify/lib/insert-css';
import Vue from 'vue';
Vue.config.productionTip = false;
import App from './App.vue';


new Vue({
  el: '#app',
  render: h => h(App)
});
