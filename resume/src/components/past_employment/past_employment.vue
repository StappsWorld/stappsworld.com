<template>
  <div class="past_employment_section">
    <div class="past_employment_empty"></div>
    <transition name="past_employment_text" appear>
      <div class="past_employment_box">
        <div class="past_employment_content">
          <div
            class="work_experience content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Work Experience</h1>
            <div
              v-for="employment in employment_arr"
              :key="employment.name"
              class="work_list_item"
            >
              <div class="work_left">
                <div class="name">
                  <p>
                    <a v-bind:href="employment.url">{{ employment.name }}</a>
                  </p>
                </div>
                <div class="date">
                  <p>
                    <template v-if="employment.time_started">
                      {{ dateFormat(employment.time_started, "mmmm yyyy") }}
                    </template>
                    <template v-else>Present</template>
                    -
                    <template v-if="employment.time_ended">
                      {{ dateFormat(employment.time_ended, "mmmm yyyy") }}
                    </template>
                    <template v-else>Present</template>
                  </p>
                </div>
              </div>
              <div class="work_right">
                <p>{{ employment.role }}</p>
              </div>
            </div>
          </div>
          <div
            class="education content"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1>Education</h1>
            <div
              v-for="education in education_arr"
              :key="education.establishment"
              class="work_list_item"
            >
              <div class="work_left">
                <div class="name">
                  <p>{{ education.establishment }}</p>
                </div>
                <div class="date">
                  <p>
                    <template v-if="education.time_started">
                      {{ dateFormat(education.time_started, "mmmm yyyy") }}
                    </template>
                    <template v-else>Present</template>
                    -
                    <template v-if="education.time_ended">
                      {{ dateFormat(education.time_ended, "mmmm yyyy") }}
                    </template>
                    <template v-else>Present</template>
                  </p>
                </div>
              </div>
              <div class="work_right">
                <p>{{ education.title }}</p>
              </div>
            </div>
          </div>
          <div class="honors content" data-aos="fade-up" data-aos-delay="600">
            <h1>Honors</h1>
            <div class="honors_list">
              <ul v-for="honor in honors_arr" :key="honor">
                <li>
                  <p>{{ honor }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="past_employment_empty"></div> -->
      </div>
    </transition>
    <!-- <div class="about_me_empty"></div> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import {
  employment_arr,
  education_arr,
  honors_arr,
} from "./past_employment.js";
import dateFormat from "dateformat";

export default {
  name: "past_employment",
  setup: () => {
    AOS.init();
    return { employment_arr, education_arr, honors_arr, dateFormat };
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
  height: 80vh;
}

.past_employment_empty {
  height: 20vh;
}

.past_employment_content {
  display: inline-flex;
}

.content {
  text-align: center;
  width: 33vw;
}

.work_list_item {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
}

.honors_list {
  text-align: center;
}

.honors_list > ul {
  display: inline-flex;
}

.work_left {
  display: table;
  width: 50%;
}

.work_right {
  display: inline-block;
  width: 50%;
  padding: auto;
  margin: auto;
}

li {
  color: white;
}

h1 {
  color: white;
  font-family: "Monospace";
}

p {
  color: white;
  font-family: "Monospace";
}

a {
  color: white;
  font-family: "Monospace";
}
</style>
