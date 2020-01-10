<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Helvetica";
  margin: 0;
  padding: 0;
  line-height: 1.5;
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
