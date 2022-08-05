<template>
  <div class="title_card">
    <div class="title_card_upper_space"></div>
    <div class="title_card_name">
      <transition name="title_text" appear>
        <h1 data-aos="fade-right">Samuel Rembisz</h1>
      </transition>
    </div>
    <div class="title_card_lower_space">
      <transition name="title_text" appear>
        <p data-aos="fade-right">Software Engineer</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "title_card",
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .title_card {
    height: 25%;
  }

  .title_card_lower_space p {
    font-size: 1.8rem;
  }

  .title_card_name h1 {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 801px) {
  .title_card {
    height: 100%;
  }

  .title_card_lower_space p {
    font-size: 7rem;
  }

  .title_card_name h1 {
    font-size: 9rem;
  }
}

.title_text-enter-from {
  opacity: 0;
}

.title_text-enter-active {
  transition: all var(--main-transition-time) ease;
}

.title_card {
  width: 100%;
  padding: 0px;
  margin: 0px 0px 0px 0px;
  background: url("../assets/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  white-space: nowrap;
}

.title_card_upper_space {
  height: 60%;
  background-color: var(--transparent-background);
}

.title_card_name {
  height: 20%;
  background-color: var(--transparent-background);
}

.title_card_name h1 {
  padding: 0px 15px;
  margin: 0px 10px 0px var(--spacing-from-left);
  color: white;
  font-family: "Monospace";
}

.title_card_lower_space {
  height: 20%;
  background-color: var(--solid-background);
}

.title_card_lower_space p {
  padding: 10px 15px;
  margin: 0px 10px 0px var(--spacing-from-left);
  color: white;
  font-family: "Monospace";
}
</style>
