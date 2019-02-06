import Vue from "vue";
import weatherWidget from "./components/weather-widget/";

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === "production";

const widgetDemo = new Vue({
  el: "#demo",
  data: {
    title: "weather-widget demo"
  },
  components: {
    "weather-widget": weatherWidget
  }
});
