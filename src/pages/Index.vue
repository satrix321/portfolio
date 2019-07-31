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
      
      <section-title class="col-xs-12">PROJECTS</section-title>

      <div class="row">
        <project-item
          class="col-xs-12 col-md-6 col-lg-4"
          title="Homebrew Creator"
          url="https://satrix321.github.io/HomebrewCreator/index.html">
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/hero-panel-nature.jpg"/>
          </template>
          <template v-slot:description>
            <p>A simple web-based tool for creating homebrews using markdown.</p>
            <p>This project features a live editor environment, that allows you to instantly preview your changes, and ultimately generate a beautiful PDF.</p>
          </template>
        </project-item>
        <project-item
          class="col-xs-12 col-md-6 col-lg-4"
          title="Homebrew Creator"
          url="https://satrix321.github.io/HomebrewCreator/index.html">
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/hero-panel-nature.jpg"/>
          </template>
          <template v-slot:description>
            <p>A simple web-based tool for creating homebrews using markdown.</p>
            <p>This project features a live editor environment, that allows you to instantly preview your changes, and ultimately generate a beautiful PDF.</p>
          </template>
        </project-item>
        <project-item
          class="col-xs-12 col-md-6 col-lg-4"
          title="Homebrew Creator"
          url="https://satrix321.github.io/HomebrewCreator/index.html">
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/hero-panel-nature.jpg"/>
          </template>
          <template v-slot:description>
            <p>A simple web-based tool for creating homebrews using markdown.</p>
            <p>This project features a live editor environment, that allows you to instantly preview your changes, and ultimately generate a beautiful PDF.</p>
          </template>
        </project-item>
      </div>

      <section-title class="col-xs-12">CONTACT</section-title>
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
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.content {
  @include grid;
}

a {
  color: $color2;
  text-decoration: none;

  &:active, &:visited, &:focus {
    color: $color2;
    text-decoration: none;
  }
}
</style>
