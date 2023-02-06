import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

// import "./plugins/vcharts";
import "./style/index.css";

import * as ECharts from 'echarts'
import * as  VueECharts from 'vue-echarts'

Vue.prototype.$echarts = ECharts

Vue.config.productionTip = false;

Vue.component('v-chart',VueECharts)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
