<script setup>
import { computed } from 'vue'
import { UI_SIZE } from './ui-types'
import UiInput from './UiInput.vue'

const props = defineProps({
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  showPasswordProps: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Please input',
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  step: {
    type: Number,
    default: 1,
  },
  controls: {
    type: Boolean,
    default: true,
  },
})

const model = defineModel()

const controlPlus = computed(() => {
  return model.value + props.step <= props.max
})

const plusValue = () => {
  if (controlPlus.value) {
    model.value += props.step
  }
}

const controlMinus = computed(() => {
  return model.value - props.step >= props.min
})

const minusValue = () => {
  if (controlMinus.value) {
    model.value -= props.step
  }
}
</script>
<template>
  <div
    class="ui-input-number"
    :class="{
      [`ui-input-number--size-${size}`]: true,
    }"
  >
    <div class="ui-input-number__controls">
      <slot name="minus" :disabled="!controlMinus">
        <button
          v-if="controls"
          @mousedown.prevent="minusValue"
          type="button"
          :disabled="!controlMinus || disabled"
          class="ui-input-number__button"
        >
          -
        </button>
      </slot>
      <UiInput
        v-bind="$props"
        v-model="model"
        :type="'number'"
        :placeholder="placeholder"
        class="ui-input-number__input"
      ></UiInput>
      <slot name="plus" :disabled="!controlPlus">
        <button
          v-if="controls"
          @mousedown.prevent="plusValue"
          type="button"
          :disabled="!controlPlus || disabled"
          class="ui-input-number__button"
        >
          +
        </button>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-input-number {
  display: inline-flex;
  align-items: center;
  border: 2px solid var(--color-black);
  border-radius: 4px;
  overflow: hidden;

  :deep(input) {
    text-align: center;
    
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0px;
    }
  }

  &--size-small {
    height: var(--ui-size-small);
    --ui-size: var(--ui-size-small);
  }

  &--size-default {
    height: var(--ui-size-default);
    --ui-size: var(--ui-size-default);
  }

  &--size-large {
    height: var(--ui-size-large);
    --ui-size: var(--ui-size-large);
  }

  &:focus-within {
    border-color: var(--color-blue-light);
  }

  &__controls {
    display: flex;
    justify-content: center;
  }

  &__button {
    cursor: pointer;
    font-size: calc(var(--ui-size) / 2);
    width: var(--ui-size);

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  &__input {
    text-align: center;
    // border: none;
    outline: none;
    font-size: calc(var(--ui-size) / 2);

    &:focus {
      outline: none;
      border-color: var(--color-blue-light);
    }
  }
}
</style>
