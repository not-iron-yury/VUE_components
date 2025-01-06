<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  group: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:checked', 'updateCheckboxGroup']);

const handlerCheckbox = event => {
  if (props.group) {
    const params = { id: props.id, name: props.label, checked: event.target.checked };
    emits('updateCheckboxGroup', params);
  } else {
    emits('update:checked', event.target.checked);
  }
};
</script>

<template>
  <input
    class="checkbox"
    type="checkbox"
    :name="name"
    value=""
    :id="id"
    :checked="checked"
    :disabled="disabled"
    @input="handlerCheckbox($event)"
  />
  <label :for="id">{{ label }}</label>
</template>

<style lang="scss">
.checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 10px;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 6px;
    border: 1px solid #adb5bd;
  }
  &:checked + label::before {
    border-color: var(--primary);
    background-color: var(--primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }
  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ecebed;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ecebed;
  }
}
</style>
