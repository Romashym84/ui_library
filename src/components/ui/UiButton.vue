<script setup>
import { UI_SIZE, UI_BUTTON_TYPE } from '@/components/ui/ui-types'
import UiSpinner from './UiSpinner.vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  type: {
    type: String,
    default: UI_BUTTON_TYPE.DEFAULT,
    validator(value) {
      return Object.values(UI_BUTTON_TYPE).includes(value)
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<!-- :class="[ `btn--${size}`, `btn--${type}`, round ? 'btn--round' : '', circle ? 'btn--circle' : '', ]" -->
<template>
  <button
    v-bind="$attrs"
    class="btn"
    :class="{
      [`btn--size-${size}`]: true,
      [`btn--${type}`]: true,
      'btn--round': round,
      'btn--circle': circle,
    }"
    :disabled="disabled || loading"
  >
    <UiSpinner v-if="loading" class="btn__loader"></UiSpinner>
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn {
  position: relative;
  height: var(--ui-size-default);
  display: flex;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.btn--default {
  background: var(--color-white-gray);
  border: 1px solid var(--color-gray);
  color: var(--color-black);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-white);
}

.btn--success {
  background: var(--color-success);
  color: var(--color-white);
}

.btn--info {
  background: var(--color-info);
  color: var(--color-white);
}

.btn--warning {
  background: var(--color-warning);
  color:var(--color-white);
}

.btn--danger {
  background: var(--color-danger);
  color: var(--color-white);
}

.btn--size-small {
  height: var(--ui-size-small);
}

.btn--size-default {
  height: var(--ui-size-default);
}

.btn--size-large {
  height: var(--ui-size-large);
}

.btn--round {
  border-radius: 50px;
}

.btn--circle {
  border-radius: 50%;
  padding: 0;
}

.btn--circle.btn--size-small {
  width: var(--ui-size-small);
}

.btn--circle.btn--size-default {
  width: var(--ui-size-default);
}

.btn--circle.btn--size-large {
  width: var(--ui-size-large);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn__loader {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
