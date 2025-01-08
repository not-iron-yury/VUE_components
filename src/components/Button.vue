<script setup>
defineProps({
  label: {
    type: String,
    default: 'Кнопка',
  },
  color: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  transparent: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: 'normal',
  },
});

const emit = defineEmits(['click']);

function clickOnButton(e) {
  emit('click');
}
</script>

<template>
  <button
    @click="clickOnButton"
    :class="[
      'btn',
      `btn_color_${color}`,
      { btn_size_large: size === 'large' },
      { btn_rounded: rounded },
      { btn_transparent: transparent },
      { btn_icon: icon },
    ]"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="['far', icon]" />
    </span>
    <span v-else> {{ label }}</span>
  </button>
</template>

<style lang="scss">
.btn {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &_color {
    &_primary {
      background: var(--primary);
      border: 1px solid var(--primary);
      &:enabled:hover {
        background: var(--primary-hover);
      }
    }
    &_second {
      background: var(--second);
      border: 1px solid var(--second);
      &:enabled:hover {
        background: var(--second-hover);
      }
    }
    &_success {
      background: var(--success);
      border: 1px solid var(--success);
      &:enabled:hover {
        background: var(--success-hover);
      }
    }
    &_info {
      background: var(--info);
      border: 1px solid var(--info);
      &:enabled:hover {
        background: var(--info-hover);
      }
    }
    &_warning {
      background: var(--warning);
      border: 1px solid var(--warning);
      &:enabled:hover {
        background: var(--warning-hover);
      }
    }
    &_danger {
      background: var(--danger);
      border: 1px solid var(--danger);
      &:enabled:hover {
        background: var(--danger-hover);
      }
    }
  }
  &_size {
    &_large {
      padding: 15px 30px;
      font-size: 18px;
    }
  }
  &_rounded {
    border-radius: 15px;
  }
  &_transparent {
    background: transparent;
    color: #000000;
    &:hover {
      color: #ffffff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &_large {
    height: 48px;
    padding: 0 30px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}
</style>
