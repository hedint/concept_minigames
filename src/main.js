import Vue from "vue";
import HelloWorld from "./components/HelloWorld";

const plugin = {
  install() {
    Vue.component("HelloWorld", HelloWorld);
  }
};
Vue.use(plugin);
console.log("INITED");
export default plugin;
