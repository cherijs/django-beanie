import { createApp, h } from "vue";
import App from "./App.vue";
import Settingsmenu from "./components/global/Settingsmenu.vue";
import "./a.tailwind.css";
import "./index.css";
// Create a Vue application
// const app = createApp({
//   render() {
//     return h("pre", {}, "heel");
//   },
// });
const app = createApp(App);

app.mount("#beanie-header");

// import files from "./components/global/*.@(vue)";
// const files = require.context("./components/global", true, /\.vue$/i);
// files.keys().map((key) => {
//   let component = key.split("/").pop().split(".")[0];
//   console.log(
//     `%c ${component} `,
//     "background: blue; color: white; border-radius:2px;"
//   );
//   // return Vue.component(component, files(key).default);
// });
// app.mount("body > div");
