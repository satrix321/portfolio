<template>
  <h1 class="section-title" :class="{ 'section-title--appear': animationStarted }"><slot></slot></h1>
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
.section-title {
  justify-self: center;
  opacity: 0;
  transition: opacity 1s;

  &.section-title--appear {
    opacity: 1;
  }
}
</style>
