import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore("project", () => {
  const projectName = ref("MojePsy");
  return { projectName };
});
