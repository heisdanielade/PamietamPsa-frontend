import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersistedState from 'pinia-plugin-persistedstate';
import App from "./App.vue";
import router from "./router";
import { useProjectStore } from '@/stores/projectStore';



const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersistedState);

app.use(pinia);
app.use(router);


const projectName = useProjectStore().projectName;
router.afterEach((to) => {
  document.title = `${to.meta.title || "Page"} | ${projectName}`; ;
});


// Custom directive for scroll reveal animation
const scrollRevealDirective = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("shown");
        } else {
          el.classList.remove("shown");
        }
      });
    });

    observer.observe(el);
  },
};

app.directive("scroll-reveal", scrollRevealDirective);


app.mount("#app");
