<script setup>
import Checkbox from '@/components/checkbox/Checkbox.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Array,
    required: true,
  },
  listColors: {
    type: Array,
    required: true,
    validator: value => {
      const hasNameKey = value.every(prop => Object.keys(prop).includes('name'));
      const hasIdKey = value.every(prop => Object.keys(prop).includes('id'));
      return hasIdKey && hasNameKey;
    },
  },
});

const emit = defineEmits(['update:value']);

function check(params) {
  let updateValue = [...props.value];
  if (params.checked) {
    updateValue.push(params.name);
  } else {
    updateValue.splice(updateValue.indexOf(params.name), 1);
  }
  emit('update:value', updateValue);
}
</script>

<template>
  <div v-for="item in listColors" :key="item.id">
    <checkbox
      :label="item.name"
      :id="item.id"
      :name="name"
      :value="item.name"
      :checked="value.includes(item.name)"
      :group="true"
      @updateCheckboxGroup="check"
    />
  </div>
</template>

<style lang="scss"></style>
