<template>
  <section class="project">
    <div class="project__image-container">
      <slot name="image"></slot>
    </div>
    <div class="project__body">
      <h1 class="project__title"><a :href="url">{{ title }}</a></h1>
      <div class="project__description">
        <slot name="description"></slot>
      </div>
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
  background: $color4;
  border-radius: 10px;
  box-shadow: 0 0 5px black;

  .project__image-container {
    grid-area: image;
    display: flex;
    height: 200px;
    align-self: center;
  }

  .project__title {
    text-align: center;
    margin: 1rem 0;
  }

  .project__description {
    text-align: center;
  }

  .project__image {
    width: calc(100% + 2rem);
    margin: -1rem -1rem 0 -1rem;
    border-radius: 10px 10px 0 0;
  }
}
</style>
