<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(['changeTab']);

function handleClickTab(newName) {
  emit('changeTab', newName);
}
</script>

<template>
  <div class="tav-nav" v-for="tab in names" :key="tab.id" @click="handleClickTab(tab.name)">
    <span :class="['tab-nav__item', { selected: tab.name === selectedTab }]">
      {{ tab.lable }}
    </span>
  </div>
  <div class="tab-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.tab {
  &-nav {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      font-size: 15px;
      border: 1px solid var(--primary);
      border-radius: 7px;
      cursor: pointer;

      &:hover {
        background: var(--primary-hover);
        color: #fff;
        transition: 0.2s;
      }
      &.selected {
        background: var(--primary);
        color: #fff;
      }
    }
  }
  &-content {
    display: grid;
    gap: 10px;
    padding: 20px;
    border-radius: 7px;
    background: #fff;
  }
}
</style>
