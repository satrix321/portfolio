<template>
  <section class="contact" :class="{ 'contact--appear': animationStarted }">
    <a href="https://github.com/satrix321"><font-awesome-icon class="icon" :icon="['fab', 'github']" size="2x"/></a>
    <a href="https://www.linkedin.com/in/krzysztof-szot-691653130/"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="2x"/></a>
    <a href="mailto:krzysztof.szot.92@gmail.com"><font-awesome-icon class="icon" icon="envelope" size="2x"/></a>
  </section>
</template>

<script>
export default {
  name: 'TheContactSection',
  data: function () {
    return {
      animationStarted: false,
    };
  },
  mounted: function () {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver((entries, observer) => {
      if (!this.animationStarted && entries[0].isIntersecting) {
        this.animationStarted = true;
      }
    }, options);

    const target = this.$el;
    observer.observe(target);
  }
};
</script>

<style scoped lang="scss">
.contact {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color2;
  opacity: 0;
  transition: opacity 1s;

  &.contact--appear {
    opacity: 1;
  }

  .icon {
    margin: .5rem;
    color: $color5;

    &:active, &:visited, &:focus {
      color: $color5;
    }
  }
}
</style>
