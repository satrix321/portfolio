<template>
  <section class="hero-panel">
    <h1 class="hero-panel__title">
      <slot name="title"></slot>
    </h1>
    <h2 class="hero-panel__description">
      <slot name="description"></slot>
    </h2>
  </section>
</template>

<script>
export default {
  name: 'TheHeroPanel',
};
</script>

<style scoped>
.hero-panel {
  background-image: url(~@/assets/hero-panel-nature.jpg);
  background-size: cover;
  color: white;
  padding: 10em 0;
}

.hero-panel__title {
  text-align: center;
  font-size: 3em;
  text-shadow: 2px 2px black;
  margin: 1rem;
}

.hero-panel__description {
  text-align: center;
  font-size: 1.6em;
  text-shadow: 2px 2px black;
  margin: 1rem;
}
</style>
