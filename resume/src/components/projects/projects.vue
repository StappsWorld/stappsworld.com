<template>
  <ul id="example-1">
    <li v-for="project in projects" :key="project.name">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import { projects } from "./projects.ts";

export default {
  name: "projects",
  components: {
    projects,
  },
  setup() {
    AOS.init();
  },
};
</script>