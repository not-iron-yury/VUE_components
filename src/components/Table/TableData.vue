<script setup>
const props = defineProps({
  image: {
    type: Boolean,
    required: false,
  },
  srcImg: {
    type: String,
    required: false,
  },
  dataTitle: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="table-data">
    <span class="table-data__title" v-if="dataTitle">{{ dataTitle }}:</span>
    <img v-if="image" class="table-data__image" :src="srcImg" alt="" />
    <slot v-else></slot>
  </div>
</template>

<style lang="scss" scoped>
.table-data {
  position: relative;
  padding: 15px 0;

  &__image {
    max-width: 100%;
    @media (max-width: 767px) {
      max-width: 200px;
    }
  }

  &__title {
    margin-right: 5px;
    display: none;
    @media (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>
