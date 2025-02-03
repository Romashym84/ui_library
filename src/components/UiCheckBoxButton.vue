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
  gap: {
    type: String,
    default: '0',
  },
})

const model = defineModel()

// const toggleValue = () => {
//   const newValue = model.value.slice()
//   const index = newValue.indexOf(props.value)
//   if (index !== -1) {
//     newValue.splice(index, 1)
//   } else {
//     newValue.push(props.value)
//   }
//   model.value = newValue
// }
</script>
<template>
  <label
    class="ui-checkbox-button"
    :class="{
      [`ui-checkbox-button--size-${size}`]: true,
      [`ui-checkbox-button--type-${type}`]: true,
      [`ui-checkbox-button--group-mode`]: props.groupMode,
    }"
    :disabled="disabled"
  >
    <input
      v-bind="$attrs"
      type="checkbox"
      v-model="model"
      :value="props.value"
      :true-value="props.value"
      :false-value="props.falseValue"
      :disabled="disabled"
    />

    <span class="ui-checkbox-button__update-input"></span>
    <span class="ui-checkbox-button__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.ui-checkbox-button {
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  gap: 8px;
  border: none;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

.ui-checkbox-button[disabled='true'] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-checkbox-button--size-small {
  height: var(--ui-size-small);
}

.ui-checkbox-button--size-default {
  height: var(--ui-size-default);
}

.ui-checkbox-button--size-large {
  height: var(--ui-size-large);
}

.ui-checkbox-button input {
  display: none;
}

.ui-checkbox-button__update-input {
  width: 16px;
  height: 16px;
  border: 2px solid #007bff;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
}

.ui-checkbox-button__update-input::after {
  content: '';
  width: 5px;
  height: 8px;
  border: solid white;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  margin-top: -2px;
  opacity: 0;
}

.ui-checkbox-button input:checked + .ui-checkbox-button__update-input {
  background-color: #007bff;
  border-color: #007bff;
}

.ui-checkbox-button input:checked + .ui-checkbox-button__update-input::after {
  opacity: 1;
}

.ui-checkbox-button__label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.ui-checkbox-button input:checked ~ .ui-checkbox-button__label {
  color: #007bff;
}

.ui-checkbox-button--type-button {
  border: 1px solid #d8dbde;
  border-radius: 4px;
}

.ui-checkbox-button--type-button.ui-checkbox-button--group-mode {
  border-radius: 0;
}

.ui-checkbox-button--type-button.ui-checkbox-button--group-mode:first-of-type {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.ui-checkbox-button--type-button.ui-checkbox-button--group-mode:last-of-type {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.ui-checkbox-button--type-button .ui-checkbox-button__update-input {
  display: none;
}

.ui-checkbox-button--type-button .ui-checkbox-button__label {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
}

.ui-checkbox-button--type-button input:checked ~ .ui-checkbox-button__label {
  background: #007bff;
  color: white;
  transition: all 0.3s ease;
}

.ui-checkbox-button--type-button .ui-checkbox-button__label:hover {
  color: #007bff;
}
</style>
