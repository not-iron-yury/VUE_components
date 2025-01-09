<script setup>
const props = defineProps({
  heads: {
    type: Array,
    required: false,
  },
  columnTempl: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(['sortingField']);

function handlerClick(itm) {
  emit('sortingField', itm);
}
</script>

<template>
  <div class="table-wrapper">
    <div class="table">
      <div class="table-head" :style="{ 'grid-template-columns': columnTempl }">
        <div class="table-head__name" v-for="(itm, i) of heads" :key="itm[i]" @click="handlerClick(itm)">{{ itm }}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  margin-top: 15px;
  margin-bottom: 40px;
  width: 100%;
  background-color: #fff;
  &-wrapper {
    display: flex;
    justify-content: center;
  }
  &-head {
    display: grid;
    column-gap: 10px;
    align-items: center;
    padding: 5px 16px;
    border-bottom: 2px solid #eeeff4;
    background: #fff;
    &__name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      cursor: pointer;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
