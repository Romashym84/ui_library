<script setup>
import { UI_SIZE, UI_RADIOBUTTON_TYPE } from './ui-types'
import UiRadioButton from './UiRadioButton.vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
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
    default: UI_RADIOBUTTON_TYPE.BUTTON,
    validator(value) {
      return Object.values(UI_RADIOBUTTON_TYPE).includes(value)
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
  <div class="ui-radio-button-group" :style="`gap: ${props.gap}`">
    <template v-for="option in options" :key="option.value">
      <UiRadioButton
        v-model="modelValue"
        :label="option.label"
        :value="option.value"
        :size="props.size"
        :type="props.type"
        :disabled="option.disabled || disabled"
        :group-mode="props.type === UI_RADIOBUTTON_TYPE.BUTTON"
      ></UiRadioButton>
    </template>
  </div>
</template>

<style scoped>
.ui-radio-button-group {
  display: flex;
}
</style>
