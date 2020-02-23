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
      
      <section-title class="col-xs-12">Projects</section-title>

      <div class="row" style="grid-row-gap: 50px;">

        <project-item
          class="col-xs-12"
          title="Homebrew Creator"
          sourceUrl="https://github.com/satrix321/Homebrew-Creator"
          liveUrl="https://satrix321.github.io/Homebrew-Creator/"
        >
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/homebrew-creator-logo.png"/>
          </template>
          <template v-slot:description>
            <p>A simple web-based tool for creating homebrews using markdown.</p>
            <p>This project features a live editor environment, that allows you to instantly preview your changes, and ultimately generate a beautiful PDF.</p>
          </template>
          <template v-slot:technologies>
            <a class="project__tech-link">ES6</a>
            <a class="project__tech-link">Vue.js</a>
            <a class="project__tech-link">CSS3</a>
            <a class="project__tech-link">SASS</a>
            <a class="project__tech-link">Markdown</a>
          </template>
        </project-item>

        <project-item
          class="col-xs-12"
          title="Initiative Tracker"
          sourceUrl="https://github.com/satrix321/initiative-tracker"
          liveUrl="https://satrix321.github.io/initiative-tracker/"
        >
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/initiative-tracker-logo.png"/>
          </template>
          <template v-slot:description>
            <p>Web tool for tracking combat order in PnP roleplaying games</p>
            <p>Responsive website with a simple UI, perfect as a companion app for every table.</p>
          </template>
          <template v-slot:technologies>
            <a class="project__tech-link">ES6</a>
            <a class="project__tech-link">React</a>
            <a class="project__tech-link">Hooks</a>
            <a class="project__tech-link">CSS3</a>
            <a class="project__tech-link">SASS</a>
          </template>
        </project-item>

      </div>

      <div style="height: 50px"/>
    </div>

    <the-contact-section/>
    <the-footer/>
  </Layout>
</template>

<script>
import TheHeroPanel from '@/components/TheHeroPanel';
import SectionTitle from '@/components/SectionTitle';
import ProjectItem from '@/components/ProjectItem';
import TheContactSection from '@/components/TheContactSection';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeroPanel,
    SectionTitle,
    ProjectItem,
    TheContactSection,
    TheFooter,
  },
  metaInfo: {
    title: 'Krzysztof Szot'
  }
}
</script>

<style lang="scss">
.content {
  @include grid;
}

a {
  color: $primary-color;
  text-decoration: none;

  &:active, &:visited, &:focus {
    color: $primary-color;
    text-decoration: none;
  }
}
</style>
