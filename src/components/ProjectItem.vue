<template>
  <section class="project" :class="{ 'project--appear': animationStarted }">

    <div class="project__image-container">
      <slot name="image"></slot>
    </div>

    <div class="project__content">
      <h1 class="project__title">{{ title }}</h1>

      <div class="project__description">
        <slot name="description"></slot>
      </div>

      <div class="project__technologies">
        <slot name="technologies"></slot>
      </div>

      <div class="project__links">
        <a class="project__primary-link" :href="liveUrl">
          <font-awesome-icon class="icon" :icon="['fas', 'external-link-alt']" size="1x"/>
          Live Demo
        </a>
        <a class="project__secondary-link" :href="sourceUrl">
          <font-awesome-icon class="icon" :icon="['fab', 'github']" size="1x"/>
          Source
        </a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    liveUrl: { type: String, required: true }
  },
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
  flex-direction: row;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  opacity: 0;
  transition: opacity 1s;
  background-color: white;
  min-height: 400px;
  width: $breakpoint-lg - 2*($gutter);
  margin: auto;

  @media only screen and (max-width: $breakpoint-lg) {
    flex-direction: column;
    width: 100%;
    max-width: $breakpoint-md;
  }

  &.project--appear {
    opacity: 1;
  }

  .project__image-container {
    grid-area: image;
    display: flex;
    height: 400px;
    width: 400px;
    align-self: center;
    background-color: $primary-light-2-color;
    border-radius: 5px 0 0 5px;

    @media only screen and (max-width: $breakpoint-lg) {
      border-radius: 5px 5px 0 0;
      width: 100%;
    }

    @media only screen and (max-width: $breakpoint-md) {
      height: auto;
    }

    .project__image {
      width: 400px;
      height: 400px;
      object-fit: contain;
      padding: 5px;
      box-sizing: border-box;

      @media only screen and (max-width: $breakpoint-lg) {
        max-width: 600px;
        width: 100%;
        margin: auto;
      }

      @media only screen and (max-width: $breakpoint-md) {
        height: auto;
      }
    }
  }

  .project__content {
    flex-grow: 1;
    margin: 2.5rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: $breakpoint-md) {
      margin: 1.25rem;
    }

    .project__title {
      font-size: 2rem;
      margin: 0;
      flex-grow: -1;
    }

    .project__description {
      flex-grow: 1;
    }

    .project__technologies {
      margin-bottom: 1rem;
      flex-grow: -1;

      .project__tech-link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-width: 4rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-right: 0.5rem;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        box-sizing: border-box;
        height: 2.5rem;
        background-color: transparent;
        color: $primary-color;
        border: 1px solid $primary-color;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
      }
    }

    .project__links {
      display: flex;
      flex-grow: -1;
      
      > * {
        margin-left: 0.5rem;

        &:first-child {
          margin-left: initial;
        }
      }

      .project__primary-link,
      .project__secondary-link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 2.5rem;
        color: white;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

        .icon {
          margin-right: 0.25rem;
        }
      }

      .project__primary-link {
        background-color: $primary-color;
      }

      .project__secondary-link {
        background-color: $primary-light-1-color;
      }
    }
  }
}
</style>
