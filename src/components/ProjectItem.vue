<template>
  <section class="project" :class="{ 'project--appear': animationStarted }">
    <div class="project__image-container">
      <slot name="image"></slot>
    </div>
    <div class="project__body">
      <h1 class="project__title">{{ title }}</h1>
      <div class="project__description">
        <slot name="description"></slot>
      </div>
    </div>
    <div class="project__foter">
      <a class="project__link" :href="url">Find Out More</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true }
  },
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

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 3px $color2;
  background: $color5;
  opacity: 0;
  transition: opacity 1s;

  &.project--appear {
    opacity: 1;
  }

  .project__image-container {
    grid-area: image;
    display: flex;
    height: 200px;
    align-self: center;
  }

  .project__title {
    text-align: center;
    margin: 1rem 0;
    color: $color2;
  }

  .project__description {
    text-align: center;
  }

  .project__image {
    width: calc(100% + 2rem);
    margin: -1rem -1rem 0 -1rem;
    object-fit: contain;
  }

  .project__link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: $color4;
    color: $color5;
    border: 0;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
