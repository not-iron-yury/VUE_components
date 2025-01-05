<script setup>
import { ref } from 'vue';
import LayoutHeader from './components/layout/Header.vue';
import LayoutSidebar from './components/layout/Sidebar.vue';

const isOpenSideBar = ref(false);

function toggleSideBar() {
  isOpenSideBar.value = !isOpenSideBar.value;
}
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleSideBar">&#5125;</div>
    <layout-header />
    <layout-sidebar :isopen="isOpenSideBar" />
    <div :class="['content', { fullopen: !isOpenSideBar }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/global.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &.fullopen {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
