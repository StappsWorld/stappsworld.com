<template>
  <div class="about_me_section">
    <div class="about_me_empty"></div>
    <transition name="about_text" appear>
      <div class="about_me_box" data-aos="fade-up">
        <div class="profile_image">
          <img src="../assets/Samuel.jpg" alt="Samuel Rembisz" />
        </div>
        <div class="profile_info">
          <h1>Get To Know Me</h1>
          <p>
            Hi there! My name is Samuel Rembisz and I'm a
            <u><strong>software developer</strong></u>, 
            <u><strong>computer repair technician</strong></u>, 
            as well as a <u><strong>mathematician</strong></u> 
            with 6 years of volunteer experience and 2 years of work experience. I'm
            committed to efficiency in the workplace. Networking, software
            architecture, software debugging, and general IT customer support
            and care are among my talents!
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "about_me",
};
</script>

<style scoped>

@media only screen and (max-width: 800px) {
  .about_me_empty {
    height: 5vh;
  }

  .profile_image {
    width: 100vw;
  }

  .about_me_box {
    text-align: center;
    display: flexbox;
    flex-flow: column;
    justify-content: center;
  }

  img {
    width: 80vw;
  }

  .profile_info {
    width: 100vw;
  }

  p {
    margin: 0 20%;
    font-size: 1em;
  }
}

@media only screen and (min-width: 800px) {
  .about_me_empty {
    height: 20%;
  }

  .about_me_section {
    height: 100vh;
  }

  .profile_image {
    width: 50vw;
  }

  .about_me_box {
    height: 59%;
    display: inline-flex;
    flex-wrap: wrap;
  }

  img {
    width: 48vw;
  }

  .profile_info {
    width: 49vw;
  }

  p {
    font-size: 1.2vw;
  }
}

.about_text-enter-from {
  opacity: 0;
}

.about_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.about_me_section {
  background-image: linear-gradient(
    var(--solid-background) 0%,
    var(--solid-background-soft) 100%
  );
  margin: 0px 0px 0px 0px;
}

img {
  display: block;
  margin: auto;
  border: 1px solid white;
}

.profile_info {
  text-align: center;
}

h1 {
  color: white;
  font-family: "Monospace";
  font-size: 4vw;
}

p {
  color: white;
  font-family: "Monospace";
  padding: 20px;
}
</style>
