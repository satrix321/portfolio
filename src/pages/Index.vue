<template>
  <Layout>
    <hero-panel>
      <template v-slot:title>
        Hello, I'm Krzysztof Szot.
      </template>
      <template v-slot:description>
        I'm a full-stack web developer.
      </template>
    </hero-panel>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
import HeroPanel from '@/components/HeroPanel';

export default {
  components: {
    HeroPanel
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
