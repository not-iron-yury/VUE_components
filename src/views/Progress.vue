<script setup>
import { ref } from 'vue';
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue';
import ProgressCircle from '@/components/ProgressBar/ProgressCircle.vue';
import Button from '@/components/Button.vue';

const percentProgress = ref(50);

const incrementPreogress = () => {
  percentProgress.value += 10;
  if (percentProgress.value > 100) {
    percentProgress.value = 100;
  }
};
const decrementPreogress = () => {
  percentProgress.value -= 10;
  if (percentProgress.value < 0) {
    percentProgress.value = 0;
  }
};
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <div class="wrapper">
    <div class="block">
      <h2 class="heading-2">Line</h2>
      <div class="col">
        <progress-bar maxWidth="500px" :percent="percentProgress" color="danger" />
      </div>
    </div>
    <div class="block">
      <h2 class="heading-2">Circle</h2>
      <div class="col">
        <progress-circle :percent="percentProgress" color="info" />
      </div>
    </div>
    <div class="block">
      <div class="line">
        <Button label="+ 10%" @click="incrementPreogress" />
        <Button label="- 10%" @click="decrementPreogress" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
Button {
  width: 130px;
}
</style>
