<template>
  <div class="contact_me_section">
    <transition name="contact_me_text" appear>
      <div class="contact_me_box" data-aos="fade-up">
        <div class="contact_me_content">
          <div class="contact_me_upper">
            <div class="contact_me_info">
              <h1>Contact Me</h1>
              <div class="contact_card">
                <p>Samuel Rembisz</p>
                <a href="mailto:sjrembisz07@gmail.com">sjrembisz07@gmail.com</a>
                <a href="tel:+15406451527">(540)-645-1527</a>
              </div>
              <div class="info_box_root">
                <div class="info_box">
                  <div class="info_row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="icon"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    <a href="https://github.com/StappsWorld/" target="_blank"
                      >github/StappsWorld</a
                    >
                  </div>
                  <div class="info_row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="icon"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                    <a
                      href="https://www.linkedin.com/in/samuel-rembisz-014b77213"
                      target="_blank"
                      >linkedin/samuel-rembisz</a
                    >
                  </div>
                  <div class="info_row">
                    <img src="@/assets/s.svg" class="icon" />
                    <a href="https://stappsworld.com" target="_blank"
                      >stappsworld.com</a
                    >
                  </div>
                  <div class="info_row">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                    >
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zm5.097 5.058c-.327 0-.61.19-.764.45-1.025 1.463-2.21 3.162-3.288 4.706l-.387-.636a.897.897 0 0 0-.759-.439.901.901 0 0 0-.788.492l-.357.581-1.992-2.943a.897.897 0 0 0-.761-.446c-.514 0-.903.452-.903.96a1 1 0 0 0 .207.61l2.719 3.96c.152.272.44.47.776.47a.91.91 0 0 0 .787-.483c.046-.071.23-.368.314-.504l.324.52c-.035-.047.076.113.087.13.024.031.054.059.078.085.019.019.04.036.058.052.036.033.08.056.115.08.025.016.052.028.076.04.029.015.06.024.088.035.058.025.122.027.18.04.031.004.064.003.092.005.29 0 .546-.149.707-.36 1.4-2 2.842-4.055 4.099-5.849A.995.995 0 0 0 18 8.842c0-.508-.389-.96-.903-.96"
                      ></path>
                    </svg>
                    <a href="https://wakatime.com/@StappsWorld" target="_blank"
                      >Wakatime/@StappsWorld</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact_me_footer">
          <a href="assets/resume.pdf" target="_blank">Download Resume</a>
        </div>
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
@media only screen and (max-width: 800px) {
  .contact_me_empty {
    height: 5vh;
  }

  .contact_me_upper {
    height: 50vh;
  }

  svg,
  img {
    padding: 0px 10px 0px 0px;
  }
}

@media only screen and (min-width: 801px) {
  .contact_me_section {
    height: 75vh;
  }

  .contact_me_empty {
    height: 20vh;
  }

  .contact_me_upper {
    height: 68vh;
  }

  .info_box {
    width: 40vw;
  }

  .info_row {
    width: 40%;
  }
}

.contact_me_text-enter-from {
  opacity: 0;
}

.contact_me_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.contact_me_section {
  background-color: var(--solid-background);
  margin: 0px 0px 0px 0px;
}

.contact_me_upper {
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: inline-flex;
  justify-content: space-between;
}

.contact_me_footer {
  display: inline-flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 5vh;
}

.contact_me_footer > a {
  padding: 10px 50px 10px 10px;
}

.contact_me_info {
  flex-direction: left;
  width: 100%;
  text-align: center;
}

.contact_card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;
}

.info_box_root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}

.info_box {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon {
  fill: white;
}

.info_row {
  display: inline-flex;
  justify-content: space-between;
  padding: 20px;
  min-width: 86%;
}

h1 {
  color: white;
  font-family: "Monospace";
  padding: 0px;
  margin: 0px;
}

a,
p {
  color: white;
  font-family: "Monospace";
  padding: 0px;
  margin: 0px;
}
</style>
