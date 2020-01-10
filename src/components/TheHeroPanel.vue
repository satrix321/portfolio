<template>
  <section class="hero-panel">
    <g-image src="~/assets/hero-panel-nature.jpg"/>
    <div class="hero-panel__container">
      <h1 class="hero-panel__title">
        <slot name="title"></slot>
      </h1>
      <h2 class="hero-panel__description">
        <slot name="description"></slot>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeroPanel',
};
</script>

<style scoped lang="scss">
.hero-panel {
  position: relative;

  img {
    max-width: 100%;
    height: 100vh;
    object-fit: cover;
    animation-duration: 1s;
    animation-name: appear;
    position: absolute;
    z-index: -1;

    @keyframes appear {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
}

.hero-panel__container {
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

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
