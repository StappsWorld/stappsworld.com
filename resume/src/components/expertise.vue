<template>
  <div class="expertise_section">
    <div class="expertise_empty"></div>
    <transition name="expertise_text" appear>
      <div class="expertise_box">
        <div class="language_box" data-aos="fade-up">
          <div class="lhs">
            <h1>Languages</h1>
          </div>
          <div class="rhs">
            <ul>
              <li>
                <p>
                  <img
                    src="@/assets/language/rust_logo.png"
                    alt="Rust"
                    width="32"
                    height="32"
                  />
                  Rust - <i class="text-muted">4/2020</i>
                </p>
              </li>
              <li>
                <p>
                  <img
                    src="@/assets/language/java_logo.png"
                    alt="Java"
                    width="32"
                    height="32"
                  />
                  Java - <i class="text-muted">2/2015</i>
                </p>
              </li>
              <li>
                <p>
                  <img
                    src="@/assets/language/python_logo.png"
                    alt="Python"
                    width="32"
                    height="32"
                  />
                  Python - <i class="text-muted">4/2017</i>
                </p>
              </li>
              <li>
                <p>
                  <img
                    src="@/assets/language/c_logo.png"
                    width="32"
                    height="32"
                  />
                  C - <i class="text-muted">4/2021</i>
                </p>
              </li>
              <li>
                <p>
                  <img
                    src="@/assets/language/cpp_logo.png"
                    width="32"
                    height="32"
                  />
                  Win32 API C++ - <i class="text-muted">8/2014</i>
                </p>
              </li>
              <li>
                <p>
                  <img
                    src="@/assets/language/js_logo.png"
                    alt="JavaScript"
                    width="32"
                    height="32"
                  />
                  JavaScript - <i class="text-muted">8/2020</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="systems_box" data-aos="fade-up">
          <div class="lhs">
            <h1>Expertise</h1>
          </div>
          <div class="rhs">
            <ul>
              <li>
                <p>
                  Implementation of efficient algorithms for manipulation and transfer of data
                </p>
              </li>
              <li>
                <p>
                  Design and implementation of computing works created with
                  consumer use in mind
                </p>
              </li>
              <li>
                <p>
                  Creation of fun, useful, and informative programs designed for
                  the power user
                </p>
              </li>
              <li>
                <p>
                  Programming automation tools to work around monotonous tasks that would otherwise
                  take up precious time
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="expertise_empty"></div>
      </div>
    </transition>
    <!-- <div class="about_me_empty"></div> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "expertise",
  setup: () => {
    AOS.init();
  },
};
</script>

<style scoped>

@media only screen and (max-width: 800px) {

  .expertise_empty {
    height: 5vh;
  }
}

@media only screen and (min-width: 800px) {
  .expertise_empty {
    height: 20vh;
  }

  .expertise_section {
    height: 100vh;
  }

  .language_box {
    height: 30vh;
  }

  .systems_box {
    height: 30vh;
  }
}

.expertise_text-enter-from {
  opacity: 0;
}

.expertise_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.expertise_section {
  background-color: var(--solid-background-soft);
  margin: 0px 0px 0px 0px;
}


.language_box {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.systems_box {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.lhs {
  text-align: center;
  border-right: 1px solid white;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lhs h1 {
  margin: auto;
}

.rhs {
  width: 50vw;
  border-left: 1px solid white;
  display:flex; align-items: center;
}

.rhs li {
    margin-top: auto;
}

ul {
  margin: 1rem, 0px, auto;
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

.text-muted {
  color: rgb(148, 147, 147);
}
</style>
