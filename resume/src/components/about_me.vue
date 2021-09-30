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
    <!-- <div class="about_me_empty"></div> -->
  </div>
</template>

<script>
export default {
  name: "about_me",
};
</script>

<style scoped>
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
  height: 100vh;
}

.about_me_empty {
  height: 20%;
}

.about_me_box {
  height: 59%;
  display: inline-flex;
  flex-wrap: wrap;
}

.profile_image {
  width: 50vw;
}

img {
  width: 48vw;
  display: block;
  margin: auto;
  border: 1px solid white;
}

.profile_info {
  text-align: center;
  width: 49vw;
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
  font-size: 1.2vw;
}
</style>
