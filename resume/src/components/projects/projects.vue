<template>
  <div class="project_root">
    <transition name="projects" appear>
    <div data-aos="fade-up" class="project_cards">
      <div v-for="project in proj_arr" :key="project.name" class="project_card">
        {{ project.name }}
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import { proj_arr } from "./projects.js";

export default {
  name: "projects",
  components: {},
  setup: () => {
    AOS.init();
    return {
      proj_arr,
    };
  },
};
</script>

<style scoped>
    .projects-enter-from {
        opacity: 0;
    }

    .projects-enter-active {
        transition: all var(--main-transition-time) ease;
    }

    .project_root {
        background-image: linear-gradient(var(--solid-background-soft) 0%, var(--solid-background) 100%);
        height: 100vh;
    }

    ul {
        padding: auto;
        margin: auto;
    }
</style>