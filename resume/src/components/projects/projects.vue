<template>
  <div class="projects_root">
    <div class="projects_empty_space"></div>
    <transition name="projects" appear>
      <div data-aos="fade-up" class="cards_with_title">
        <div style="width: 100%; text-align: center">
          <h1>Recent Projects:</h1>
        </div>
        <div class="project_cards">
          <div
            v-for="project in proj_arr"
            :key="project.name"
            class="project_card"
          >
            <a v-bind:href="project.url" target="_blank">{{ project.name }}</a>
            <hr />
            <div class="project_card_description">
              <p><span v-html="project.description"></span></p>
            </div>
            <div class="project_card_dates">
              <p v-if="project.time_started">
                {{ dateFormat(project.time_started, "mmmm yyyy") }}
              </p>
              <p v-else>Present</p>
              <p>-</p>
              <p v-if="project.time_ended">
                {{ dateFormat(project.time_ended, "mmmm yyyy") }}
              </p>
              <p v-else>Present</p>
            </div>
            <div class="project_card_special_info">
              <div class="project_card_logos">
                <img
                  v-for="tool in project.tools"
                  class="project_card_logo"
                  :key="tool"
                  v-bind:src="
                    require('@/assets/language/' + tool + '_logo.png')
                  "
                  v-bind:alt="tool"
                />
              </div>
              <div class="project_card_loc">
                <p>{{ project.loc }} Lines of Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- <div class="projects_empty_space"></div> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import { proj_arr } from "./projects.js";
import dateFormat from "dateformat";

export default {
  name: "projects",
  components: {},
  setup: () => {
    AOS.init();
    return {
      proj_arr,
      dateFormat,
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

.projects_root {
  background-color: var(--solid-background);
  height: 100vh;
}

.projects_empty_space {
  height: 15vh;
}

ul {
  padding: auto;
  margin: auto;
}

.project_cards {
  display: flex;
  justify-content: center;
  width: auto;
  height: 60vh;
}

.project_card {
  border: 1px solid white;
  text-align: center;
  width: 20vw;
  margin: 5px;
  border-radius: 10px;
  height: 100%;
}

.project_card_description {
  height: 60%;
}

.project_card_info {
  display: inline-flex;
}

.project_card_logos {
  float: left;
  padding-left: 15px;
  height: 15%;
  padding: auto;
  margin: auto;
}

.project_card_logo {
  width: 32px;
  height: 32px;
}

.project_card_dates {
  display: inline-flex;
  justify-content: space-between;
  height: 15%;
  padding: auto;
  margin: auto;
}

h1 {
  color: white;
  font-family: "Monospace";
  font-size: 2vw;
  padding: auto;
  margin: auto;
}

a {
  color: white;
  font-family: "Monospace";
  font-size: 1.2vw;
  padding: auto;
  margin: auto;
}

p {
  color: white;
  font-family: "Monospace";
  font-size: 1vw;
  padding: auto;
  margin: auto;
}
</style>