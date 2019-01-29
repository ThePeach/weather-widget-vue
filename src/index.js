import Vue from "vue";
import weatherWidget from "./weather-widget/";

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === "production";

Vue.component("weather-widget", weatherWidget);

window.addEventListener("load", function() {
  const widgetDemo = new Vue({
    el: "#demo",
    data: {
      title: "weather-widget demo"
    }
  });
});
