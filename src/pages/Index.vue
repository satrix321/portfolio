<template>
  <Layout>
    <the-hero-panel>
      <template v-slot:title>
        Hello, I'm Krzysztof Szot.
      </template>
      <template v-slot:description>
        I'm a full-stack web developer.
      </template>
    </the-hero-panel>

    <div class="content">
      
      <project-item
        title="Homebrew Creator"
        url="https://satrix321.github.io/HomebrewCreator/index.html"
        color="red">
        <template v-slot:image>
          <g-image style="border-radius: 50%" src="~/assets/hero-panel-nature.jpg" width="300" height="300"/>
        </template>
        <template v-slot:description>
          <p>A simple web-based tool for creating homebrews using markdown.</p>
        </template>
      </project-item>

      <!-- <p class="home-links">
        <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p> -->

      <the-contact-section/>
    </div>

    <the-footer/>
  </Layout>
</template>

<script>
import TheHeroPanel from '@/components/TheHeroPanel';
import ProjectItem from '@/components/ProjectItem';
import TheContactSection from '@/components/TheContactSection';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeroPanel,
    ProjectItem,
    TheContactSection,
    TheFooter,
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.home-links {
  a {
    margin-right: 1rem;
    color: $red;
  }
}
</style>
