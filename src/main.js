import "./assets/css/main.css";

import { createApp } from "vue";
import { pinia } from "@/stores/pinia"
import App from "./App.vue";
import router from "./router";
import '@vueform/multiselect/themes/default.css';
import { useProjectStore } from '@/stores/projectStore';



const app = createApp(App);
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