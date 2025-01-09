import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useProjectStore } from '@/stores/projectStore';


const app = createApp(App);

app.use(router);
app.use(createPinia());

const projectName = useProjectStore().projectName;
router.afterEach((to) => {
  // Set the title dynamically from route metadata
  document.title = `${to.meta.title || "Page"} | ${projectName}`; ;
});



app.mount("#app");
