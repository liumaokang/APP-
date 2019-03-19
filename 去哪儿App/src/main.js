// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 重置css样式
import './assets/css/reset.css'
//引入解决移动端延时300ms的问题
import FastClick from 'fastclick'
// 使用
FastClick.attach(document.body);
//引入图标样式
import './assets/css/iconfont.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

