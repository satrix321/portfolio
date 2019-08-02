<template>
  <footer class="footer" :class="{ 'footer--appear': animationStarted }">
    <p>&copy; 2019 Krzysztof Szot</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
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
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color1;
  color: $color5;
  opacity: 0;
  transition: opacity 1s;

  &.footer--appear {
    opacity: 1;
  }
}
</style>
