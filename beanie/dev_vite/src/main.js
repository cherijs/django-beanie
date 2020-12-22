import { createApp, h } from "vue";
import App from "./App.vue";
import Profiledropdown from "@components/global/Profiledropdown.vue";

import "./a.tailwind.css";
import "./index.css";
// Create a Vue application
const app = createApp({});
// const app = createApp({});
app.component("Profiledropdown", Profiledropdown);
app.mount("#profile_dropdown");

// import files from "./components/global/*.@(vue)";
// const files = require.context("./components/global", true, /\.vue$/i);
// files.keys().map((key) => {
//   let component = key.split("/").pop().split(".")[0];
//   console.log(
//     `%c ${component} `,
//     "background: blue; color: white; border-radius:2px;"
//   );
// Vue.component("ExampleComponent", () => import("./components/ExampleComponent"));

//   // return Vue.component(component, files(key).default);
// });
// app.mount("body > div");
