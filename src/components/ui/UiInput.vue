<script setup>
import { ref, computed } from 'vue'
import { UI_SIZE } from './ui-types'

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
  placeholder:{
    type:String,
    default:"Please input",
  }
})

const showPassword = defineModel('showPasswordProps', { type: Boolean })

const model = defineModel()

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const clearInput = () => {
  model.value = ''
}
</script>
<template>
  <div
    class="ui-input"
    :class="{
      [`ui-input--size-${size}`]: true,
    }"
  >
    <input
      v-bind="$attrs"
      v-model="model"
      class="ui-input__field"
      :class="{ [`ui-input__field--disabled`]: disabled }"
      :type="inputType"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <button
      v-if="clearable && model"
      @mousedown.prevent="clearInput"
      type="button"
      class="ui-input__button ui-input__button--clear"
      :disabled="disabled"
    >
      ⮾
    </button>
    <button
      v-else-if="type === 'password' && model"
      @mousedown.prevent="togglePassword"
      type="button"
      class="ui-input__button ui-input__button--toggle"
      :disabled="disabled"
    >
      <span v-if="showPassword">🔓</span>
      <span v-else>🔒</span>
    </button>
  </div>
</template>
<style scoped lang="scss">
.ui-input {
  position: relative;
  display: flex;
  align-items: center;

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

  &__field {
    height: 100%;
    width: 100%;
    padding-right: calc(var(--ui-size) * 0.9);
    padding-left: calc(var(--ui-size) / 3);
    font-size: calc(var(--ui-size) / 2);
    border-radius: 4px;
    border: 2px solid var(--color-blue-dark);

    &:focus {
      border-color: var(--color-blue-light);
      outline: none;
    }

    &--disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &__button {
    position: absolute;
    right: 0px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: calc(var(--ui-size) / 2);
    display: flex;
    align-items: center;
  }
}
</style>
