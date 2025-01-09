<script setup>
const props = defineProps({
  columnTempl: {
    type: String,
    required: false,
  },
  bgColor: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="table-row" :style="{ 'grid-template-columns': columnTempl, 'background-color': bgColor }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.table-row {
  position: relative;
  display: grid;
  align-items: center;
  column-gap: 10px;
  padding: 0 16px;
  border-bottom: 2px solid #eeeff4;
  @media (max-width: 767px) {
    display: block;
  }
  &:last-child {
    border-bottom: none;
  }
  &--items-center {
    justify-items: center;
  }
}
</style>
