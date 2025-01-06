<script setup>
import Button from '@/components/Button.vue';

const eventForButton = () => {
  console.log('kek');
};
</script>

<template>
  <h1 class="heading-1">Button</h1>
  <div class="block">
    <h2 class="block__title">Colors</h2>
    <div class="line">
      <Button label="Primary" color="primary" />
      <Button label="Second" color="second" />
      <Button label="Success" color="success" />
      <Button label="Info" color="info" />
      <Button label="Warning" color="warning" />
      <Button label="Danger" color="danger" />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Transparent</h2>
    <div class="line">
      <Button label="Primary" color="primary" transparent />
      <Button label="Second" color="second" transparent />
      <Button label="Success" color="success" transparent />
      <Button label="Info" color="info" transparent />
      <Button label="Warning" color="warning" transparent />
      <Button label="Danger" color="danger" transparent />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Size (large)</h2>
    <div class="line">
      <Button label="Primary" color="primary" size="large" />
      <Button label="Second" color="second" size="large" />
      <Button label="Success" color="success" size="large" />
      <Button label="Info" color="info" size="large" />
      <Button label="Warning" color="warning" size="large" />
      <Button label="Danger" color="danger" size="large" />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Event (console.log)</h2>
    <div class="line">
      <Button label="@click" color="second" @click="eventForButton" />
      <Button label="@click" color="danger" @click="eventForButton" />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Disabled</h2>
    <div class="line">
      <Button label="Primary" color="primary" disabled />
      <Button label="Second" color="second" disabled />
      <Button label="Success" color="success" disabled />
      <Button label="Info" color="info" disabled />
      <Button label="Warning" color="warning" disabled />
      <Button label="Danger" color="danger" disabled />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Rounded</h2>
    <div class="line">
      <Button label="Primary" color="primary" rounded />
      <Button label="Second" color="second" rounded />
      <Button label="Success" color="success" rounded />
      <Button label="Info" color="info" rounded />
      <Button label="Warning" color="warning" rounded />
      <Button label="Danger" color="danger" rounded />
    </div>
  </div>

  <div class="block">
    <h2 class="block__title">Icon</h2>
    <div class="line">
      <!-- faFaceSmile, faHand, faAddressBook, faCalendar, faHourglass, faFolder -->
      <Button color="primary" icon="face-smile" />
      <Button color="second" icon="hand" />
      <Button color="success" icon="address-book" />
      <Button color="info" icon="calendar" />
      <Button color="warning" icon="hourglass" />
      <Button color="danger" icon="folder" />
    </div>
  </div>
  <div class="block">
    <h2 class="block__title">Icon transparent</h2>
    <div class="line">
      <!-- faFaceSmile, faHand, faAddressBook, faCalendar, faHourglass, faFolder -->
      <Button color="primary" icon="face-smile" transparent />
      <Button color="second" icon="hand" transparent />
      <Button color="success" icon="address-book" transparent />
      <Button color="info" icon="calendar" transparent />
      <Button color="warning" icon="hourglass" transparent />
      <Button color="danger" icon="folder" transparent />
    </div>
  </div>
</template>

<style lang="scss">
.block {
  display: grid;
  gap: 10px;
  margin-bottom: 15px;

  &__title {
    font-size: 24px;
  }
}
.line {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
