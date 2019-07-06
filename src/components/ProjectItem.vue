<template>
  <section class="project" :style="{ 'background-color': color }">
    <div class="project__image-container">
      <slot name="image"></slot>
    </div>
    <div class="project__title-container">
      <h1><a :href="url">{{ title }}</a></h1>
    </div>
    <div class="project__description-container">
      <slot name="description"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true },
    color: { type: String, required: false }
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: "image title"
                       "image description";
  padding: 1rem;

  .project__image-container {
    grid-area: image;
    display: flex;
    height: 300px;
    align-self: center;
  }

  .project__title-container {
    grid-area: title;
  }

  .project__description-container {
    grid-area: description;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-areas: "title"
                         "image"
                         "description";

    .project__image-container {
      margin: auto;
    }

    .project__title-container {
      text-align: center;
    }
  }
}
</style>
