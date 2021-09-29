<template>
  <transition name="title_card" appear>
    <title_card></title_card>
  </transition>
</template>

<script>
//import { ref } from 'vue'
import title_card from './components/title_card.vue'

export default {
  name: "App",
  components: {
    title_card
  },
  setup() {},
};
</script>

<style>
  :root {
    --transparent-background: #0927eb44;
    --solid-background: #0927eb;
    --spacing-from-left: 3vw;
  }

  .title_card-enter-from {
    opacity: 0;
  }

  .title_card-enter-active {
    transition: all 0.5s ease;
  }
</style>
