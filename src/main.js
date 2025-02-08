import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useProjectStore } from '@/stores/projectStore';
import VueLazyload from 'vue-lazyload';



const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueLazyload, {
  preLoad: 1.7,
  attempt: 1
  // loading: '/src/assets/loading-placeholder.jpg',
  // error: '/src/assets/error-placeholder.jpg',
});


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
