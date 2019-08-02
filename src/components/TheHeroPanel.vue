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

<style scoped lang="scss">
.hero-panel {
  background-image: url(~@/assets/hero-panel-nature.jpg);
  background-size: cover;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-duration: 2s;
  animation-name: appear;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .hero-panel__title {
    text-transform: uppercase;
    text-align: center;
    font-size: 2.75rem;
    margin: 1rem;
    letter-spacing: 2px;
  }

  .hero-panel__description {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem;
    letter-spacing: 1.5px;
  }
}
</style>
