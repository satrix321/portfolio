<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: $primary-light-3-color;
}

.layout {
  
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
