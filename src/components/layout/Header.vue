<script setup></script>

<template>
  <header class="header">
    <router-link to="/" class="header__link">Vue 3: UI Kit</router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  height: 62px;

  background: #fff;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  z-index: 1;

  &__link {
    font-size: 21px;
    font-weight: 400;
  }
}
</style>
