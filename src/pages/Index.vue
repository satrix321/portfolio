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
          class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4"
          title="Homebrew Creator"
          url="https://github.com/satrix321/Homebrew-Creator">
          <template v-slot:image>
            <g-image class="project__image" src="~/assets/homebrew-creator-logo.png"/>
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
