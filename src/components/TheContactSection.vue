<template>
  <section class="contact">
    <a href="https://github.com/satrix321"><font-awesome-icon class="icon" :icon="['fab', 'github']" size="2x"/></a>
    <a href="https://www.linkedin.com/in/krzysztof-szot-691653130/"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="2x"/></a>
    <a href="mailto:krzysztof.szot.92@gmail.com"><font-awesome-icon class="icon" icon="envelope" size="2x"/></a>
  </section>
</template>

<script>
export default {
  name: 'TheContactSection',
};
</script>

<style scoped lang="scss">
.contact {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color5;

  .icon {
    margin: .5rem;
    color: black;

    &:active, &:visited, &:focus {
      color: black;
    }
  }
}
</style>
