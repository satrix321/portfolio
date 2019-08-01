<template>
  <section class="project">
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
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 3px $color2;
  background: $color5;

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
