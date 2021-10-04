<template>
  <div class="past_employment_section">
    <div class="past_employment_empty"></div>
    <transition name="past_employment_text" appear>
        <div class="past_employment_box">
            <div class="past_employment_content">
                <div class="work_experience content">
                    <h1>Work Experience</h1>
                    <div class="work_list_item"><p><a href="https://www.ubreakifix.com/">uBreakiFix</a></p> <p>May 2019 - July 2021</p></div>
                </div>
                <div class="education content">

                </div>
                <div class="honors content">

                </div>
            </div>
            <div class="past_employment_empty"></div>
        </div>
    </transition>
    <!-- <div class="about_me_empty"></div> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "past_employment",
  setup: () => {
    AOS.init();
  },
};
</script>

<style scoped>
.past_employment_text-enter-from {
  opacity: 0;
}

.past_employment_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.past_employment_section {
  background-image: linear-gradient(
    var(--solid-background-soft) 0%,
    var(--solid-background) 100%
  );
  margin: 0px 0px 0px 0px;
  height: 100vh;
}

.past_employment_empty {
  height: 20vh;
}

.past_employment_content {
    display:inline-flex;
}

.content {
    text-align: center;
    width: 33vw;
}

.work_list_item {
    display: inline-flex;
    justify-content: space-between;
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
