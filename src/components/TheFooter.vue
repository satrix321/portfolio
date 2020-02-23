<template>
  <footer class="footer" :class="{ 'footer--appear': animationStarted }">
    <p>&copy; 2020 Krzysztof Szot</p>
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
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries[0].isIntersecting);
      console.log(entries[0]);
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
  background: $primary-dark-2-color;
  color: white;
  opacity: 0;
  transition: opacity 1s;

  &.footer--appear {
    opacity: 1;
  }
}
</style>
