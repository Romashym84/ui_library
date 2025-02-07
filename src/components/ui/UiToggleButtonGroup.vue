<script setup>
import { UI_SIZE, UI_TOGGLE_BUTTON_TYPE, UI_TOGGLE_BUTTON_MODE } from './ui-types'
import UiToggleButton from '@/components/ui/UiToggleButton.vue'

const props = defineProps({
  options: {
    type: [Array],
    required: true,
  },
  groupMode: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: UI_TOGGLE_BUTTON_TYPE.BUTTON,
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
  gap: {
    type: String,
    default: '0',
  },
})

const modelValue = defineModel()
</script>

<template>
  <div class="ui-toggle-button-group" :style="`gap:${props.gap}`">
    <template v-for="option in options" :key="option.value">
      <UiToggleButton
        v-model="modelValue"
        :mode="props.mode"
        :label="option.label"
        :value="option.value"
        :true-value="option.value"
        :false-value="option.falseValue"
        :type="props.type"
        :disabled="option.disabled || disabled"
        :group-mode="props.type === UI_TOGGLE_BUTTON_TYPE.BUTTON"
      ></UiToggleButton>
    </template>
  </div>
</template>

<style scoped>
.ui-toggle-button-group {
  display: flex;
  gap: 0;
}
</style>
