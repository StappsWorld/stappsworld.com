<template>
  <transition name="title_card" appear>
    <title_card></title_card>
  </transition>
  <transition name="about_me_card" appear>
    <about_me></about_me>  
  </transition>
  <transition name="projects_card" appear>
    <projects></projects>
  </transition>
</template>

<script>
import title_card from './components/title_card.vue'
import about_me from './components/about_me.vue'
import projects from './components/projects/projects.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "App",
  components: {
    title_card,
    about_me,
    projects
  },
  setup() {
    AOS.init()
  },
};
</script>

<style>
  :root {
    --transparent-background: #051fc994;
    --solid-background: #051fc9;
    --solid-background-soft: #4253c2;
    --spacing-from-left: 3vw;
    --main-transition-time: 1.5s;
    --outer-transition-time: 0.5s;
  }

  .title_card-enter-from {
    opacity: 0;
  }

  .title_card-enter-active {
    transition: all var(--outer-transition-time) ease;
  }

  .about_me_card-enter-from {
    opacity: 0;
  }

  .about_me_card-enter-active {
    transition: all var(--outer-transition-time) ease;
  }

  .projects_card-enter-from {
    opacity: 0;
  }

  .projects_card-enter-active {
    transition: all var(--outer-transition-time) ease;
  }
</style>
