<script setup>
import { UI_SIZE, UI_TOGGLE_BUTTON_MODE, UI_TOGGLE_BUTTON_TYPE } from '@/components/ui/ui-types'
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
    default: UI_TOGGLE_BUTTON_TYPE.DEFAULT,
    validator(value) {
      return Object.values(UI_TOGGLE_BUTTON_TYPE).includes(value)
    },
  },
  mode: {
    type: String,
    default: UI_TOGGLE_BUTTON_MODE.RADIO,
    validator(value) {
      return Object.values(UI_TOGGLE_BUTTON_MODE).includes(value)
    },
  },
  label: {
    type: String,
  },
  value: {
    type: [String, Number, Boolean, Array],
    default: true,
  },
  falseValue: {
    type: [String, Number, Boolean, Array],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  groupMode: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel()
</script>
<template>
  <label
    class="ui-toggle-button"
    :class="{
      [`ui-toggle-button--size-${size}`]: true,
      [`ui-toggle-button--type-${type}`]: true,
      [`ui-toggle-button--mode-${mode}`]: true,
      [`ui-toggle-button--group-mode`]: props.groupMode,
    }"
    :disabled="disabled"
  >
    <input
      v-bind="$attrs"
      v-model="model"
      :type="props.mode"
      :value="props.value"
      :true-value="props.value"
      :false-value="props.falseValue"
      :disabled="disabled"
    />
    <slot name="input">
      <span class="ui-toggle-button__update-input"></span>
      <span class="ui-toggle-button__label">
        <slot>{{ label }}</slot>
      </span>
    </slot>
  </label>
</template>

<style scoped>
.ui-toggle-button {
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  gap: 8px;
  border: none;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

.ui-toggle-button[disabled='true'] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-toggle-button--size-small {
  height: var(--ui-size-small);
}

.ui-toggle-button--size-default {
  height: var(--ui-size-default);
}

.ui-toggle-button--size-large {
  height: var(--ui-size-large);
}

.ui-toggle-button input {
  display: none;
}

.ui-toggle-button--mode-radio .ui-toggle-button__update-input {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-white-gray);
  border-radius: 50%;
}

.ui-toggle-button--mode-radio input:checked + .ui-toggle-button__update-input {
  border: 6px solid var(--color-primary);
}

.ui-toggle-button--mode-checkbox .ui-toggle-button__update-input {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-primary);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
}

.ui-toggle-button--mode-checkbox .ui-toggle-button__update-input::after {
  content: '';
  width: 5px;
  height: 8px;
  border: solid var(--color-white);
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  margin-top: -2px;
  opacity: 0;
}

.ui-toggle-button--mode-checkbox input:checked + .ui-toggle-button__update-input {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.ui-toggle-button--mode-checkbox input:checked + .ui-toggle-button__update-input::after {
  opacity: 1;
}

.ui-toggle-button__label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.ui-toggle-button input:checked ~ .ui-toggle-button__label {
  color: var(--color-primary);
}

.ui-toggle-button--type-button {
  border: 1px solid var(--color-white-gray);
  border-radius: 4px;
}

.ui-toggle-button--type-button.ui-toggle-button--group-mode {
  border-radius: 0;
}

.ui-toggle-button--type-button.ui-toggle-button--group-mode:first-of-type {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.ui-toggle-button--type-button.ui-toggle-button--group-mode:last-of-type {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.ui-toggle-button--type-button .ui-toggle-button__update-input {
  display: none;
}

.ui-toggle-button--type-button .ui-toggle-button__label {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
}

.ui-toggle-button--type-button input:checked ~ .ui-toggle-button__label {
  background: var(--color-primary);
  color: var(--color-white);
  transition: all 0.3s ease;
}

.ui-toggle-button--type-button .ui-toggle-button__label:hover {
  color: var(--color-primary);
}
</style>
