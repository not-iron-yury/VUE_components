<script setup>
import { ref } from 'vue';

const links = ref([
  { name: 'Typography', href: '/typography' },
  { name: 'Button', href: '/button' },
  { name: 'Checkbox', href: '/checkbox' },
  { name: 'Radiobutton', href: '/radiobutton' },
  { name: 'Progress Bar', href: '/progress' },
]);

defineProps({
  isopen: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <aside :class="{ sidebar: true, open: isopen }">
    <nav class="sidebar__nav">
      <router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">
        {{ link.name }}
      </router-link>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 62px;
  left: 0;
  z-index: 2;

  padding: 20px 20px 20px 40px;
  max-width: 250px;
  width: 100%;
  height: 100%;

  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-100%);
  transition: transform 0.2s ease;

  &.open {
    transform: translateX(0);
  }
  &__nav {
    display: grid;
    gap: 10px;
  }
  &__link {
    display: block;
    padding: 4px;
    font-weight: bold;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: color 0.2s ease;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
