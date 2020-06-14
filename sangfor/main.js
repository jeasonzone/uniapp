import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from "./animate.min.css";
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(ElementUI);
Vue.use(animate);
const app = new Vue({
    ...App
})
app.$mount()
