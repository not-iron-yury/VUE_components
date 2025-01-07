<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfСolors = ref([
  { name: 'красный', id: '1' },
  { name: 'синий', id: '2' },
  { name: 'зеленый', id: '3' },
  { name: 'желтый', id: '4' },
  { name: 'белый', id: '5' },
]);
const selectedColors = ref(['красный']);

const switchResult = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <div class="wrapper">
    <div class="block">
      <h2 class="heading-2">Active</h2>
      <div class="line">
        <checkbox
          label="checkbox active"
          name="checkboxActive"
          value=""
          id="checkboxActive"
          v-model:checked="checkboxActive"
        />
      </div>
    </div>

    <div class="block">
      <h2 class="heading-2">Disabled</h2>
      <div class="line">
        <checkbox
          label="checkbox active disabled"
          name="checkboxDisabled"
          value=""
          id="checkboxDisabled"
          :disabled="checkboxDisabled"
          v-model:checked="checkboxDisabledChecked"
        />
      </div>
    </div>

    <div class="block">
      <h2 class="heading-2">Group</h2>
      <p class="subtitle">Выбранные цвета: {{ String(selectedColors) }}</p>
      <div class="col">
        <checkbox-group v-model:value="selectedColors" name="colors" :listColors="listOfСolors" />
      </div>
    </div>

    <div class="block">
      <h2 class="heading-2">Switch</h2>
      <div class="col">
        <p>Тумблер: {{ switchResult ? 'вкл' : 'выкл' }}</p>
        <checkbox
          label="Toggle Switch"
          name="switch"
          value=""
          id="switch"
          type="switch"
          v-model:checked="switchResult"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subtitle {
  margin-bottom: 10px;
  opacity: 0.6;
}
</style>
