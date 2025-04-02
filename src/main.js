import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersistedState from 'pinia-plugin-persistedstate';
import App from "./App.vue";
import router from "./router";
import { useProjectStore } from '@/stores/projectStore';
import VueLazyload from 'vue-lazyload';



const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersistedState);

app.use(pinia);
app.use(router);


const projectName = useProjectStore().projectName;
router.afterEach((to) => {
  // Set the title dynamically from route metadata
  document.title = `${to.meta.title || "Page"} | ${projectName}`; ;
});


// Custom directive for scroll reveal animation
const scrollRevealDirective = {
  mounted(el) {
    // Intersection Observer logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("shown");
        } else {
          el.classList.remove("shown");
        }
      });
    });

    // Observe the element
    observer.observe(el);
  },
};

// Register the directive globally
app.directive("scroll-reveal", scrollRevealDirective);


app.mount("#app");
