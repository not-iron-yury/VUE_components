<script setup>
const props = defineProps({
  id: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
  error: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits(['update:value']);

function updateValue(e) {
  emit('update:value', e.target.value);
}
</script>

<template>
  <div class="form-input">
    <input
      class="input-text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      @input="updateValue"
    />
    <label :for="name" class="input-label">{{ label }}</label>
  </div>
  <TransitionGroup>
    <div class="form-error" v-for="itm of error" :key="itm.$uid">
      <div class="form-error__message">
        {{ itm.$message }}
      </div>
    </div>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    width: 100%;
    margin-bottom: 5px;
    position: relative;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}
.input {
  &-text {
    border: 1px solid var(--primary);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
    font-size: 13px;
    color: var(--primary);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
