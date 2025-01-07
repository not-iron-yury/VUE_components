<script setup>
import { ref } from 'vue';
import Radiobutton from '@/components/Radiobutton.vue';

const listСolors = ref([
  { name: 'red', id: '1' },
  { name: 'blue', id: '2' },
  { name: 'green', id: '3' },
  { name: 'orange', id: '4' },
  { name: 'purple', id: '5' },
]);
const selectedColor = ref('');

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <div class="wrapper">
    <div class="block">
      <h2 class="heading-2">Basic</h2>
      <div class="col">
        <p>
          Выбранный цвет: <span :style="{ color: selectedColor }">{{ selectedColor }}</span>
        </p>
        <div v-for="color in listСolors" :key="color.id">
          <radiobutton
            name="colors"
            :id="color.id"
            :label="color.name"
            :value="color.name"
            v-model:checkedValue="selectedColor"
          />
        </div>
      </div>
    </div>
    <div class="block">
      <h2 class="heading-2">Disabled</h2>
      <div class="line">
        <radiobutton
          label="radioDisabled"
          id="radioDisabled"
          name="radioDisabled"
          value="radioDisabled"
          :disabled="disabledRadio"
          :checked="disabledRadioChecked"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
