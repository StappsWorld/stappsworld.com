<template>
  <div class="contact_me_section">
    <div class="contact_me_empty"></div>
    <transition name="contact_me_text" appear>
        <div class="contact_me_box">
            <div class="contact_me_content"></div>
            <div class="contact_me_empty"></div>
        </div>
    </transition>
    <!-- <div class="about_me_empty"></div> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "contact_me",
  setup: () => {
    AOS.init();
  },
};
</script>

<style scoped>
.contact_me_text-enter-from {
  opacity: 0;
}

.contact_me_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.contact_me_section {
  background-color: var(--solid-background);
  margin: 0px 0px 0px 0px;
  height: 80vh;
}

.contact_me_empty {
  height: 20vh;
}

h1 {
  color: white;
  font-family: "Monospace";
}

p {
  color: white;
  font-family: "Monospace";
}
</style>
