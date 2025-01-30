<script setup>
import { UI_SIZE, UI_RADIOBUTTON_TYPE } from '@/components/ui/ui-types'
const props = defineProps({
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  type: {
    type: String,
    default: UI_RADIOBUTTON_TYPE.DEFAULT,
    validator(value) {
      return Object.values(UI_RADIOBUTTON_TYPE).includes(value)
    },
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  groupMode: {
    type: Boolean,
  },
})

const model = defineModel()
</script>
<template>
  <label
    class="ui-radio-button"
    :class="{
      [`ui-radio-button--size-${size}`]: true,
      [`ui-radio-button--type-${type}`]: true,
      [`ui-radio-button--group-mode`]: props.groupMode,
    }"
    :disabled="disabled"
  >
    <input
      v-bind="$attrs"
      type="radio"
      :value="value"
      :checked="model === value"
      :disabled="disabled"
      @input="$emit('update:modelValue', value)"
    />
    <span class="ui-radio-button__update-input"></span>
    <span class="ui-radio-button__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.ui-radio-button {
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  gap: 8px;
  border: none;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

.ui-radio-button[disabled='true'] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-radio-button--size-small {
  height: var(--ui-size-small);
}

.ui-radio-button--size-default {
  height: var(--ui-size-default);
}

.ui-radio-button--size-large {
  height: var(--ui-size-large);
}

.ui-radio-button input {
  display: none;
}

.ui-radio-button__update-input {
  width: 16px;
  height: 16px;
  border: 2px solid #d8dbde;
  border-radius: 50%;
}

.ui-radio-button input:checked + .ui-radio-button__update-input {
  border: 6px solid #4da3ff;
}

.ui-radio-button__label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.ui-radio-button input:checked ~ .ui-radio-button__label {
  color: #007bff;
}

.ui-radio-button--type-button {
  border: 1px solid #d8dbde;
  border-radius: 4px;
}

.ui-radio-button--type-button.ui-radio-button--group-mode {
  border-radius: 0;
}

.ui-radio-button--type-button.ui-radio-button--group-mode:first-of-type {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.ui-radio-button--type-button.ui-radio-button--group-mode:last-of-type {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.ui-radio-button--type-button .ui-radio-button__update-input {
  display: none;
}

.ui-radio-button--type-button .ui-radio-button__label {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
}

.ui-radio-button--type-button input:checked ~ .ui-radio-button__label {
  background: #007bff;
  color: white;
  transition: all 0.5s ease;
}

.ui-radio-button--type-button .ui-radio-button__label:hover {
  color: #007bff;
}

</style>
