<template>
  <footer class="footer">
    <p>&copy; 2020 Krzysztof Szot</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-dark-2-color;
  color: white;
}
</style>
