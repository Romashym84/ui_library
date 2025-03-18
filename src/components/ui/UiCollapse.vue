<script setup>
import { UI_SIZE } from './ui-types'

const props = defineProps({
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  title: {
    type: String,
    default: 'Option',
  },
})

const model = defineModel()
</script>
<template>
  <div class="ui-collapse" :class="{ [`ui-collapse--size-${size}`]: true }">
    <div class="ui-collapse__header" @click="model = !model">
      <span class="ui-collapse__icon">{{ model ? '▲' : '▼' }}</span>
      <slot name="header">{{ title }}</slot>
    </div>
    <div v-if="model" class="ui-collapse__content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.ui-collapse {
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;

  &--size-small {
    font-size: var(--ui-size-small);
    --ui-size: var(--ui-size-small);
  }

  &--size-default {
    font-size: var(--ui-size-default);
    --ui-size: var(--ui-size-default);
  }

  &--size-large {
    font-size: var(--ui-size-large);
    --ui-size: var(--ui-size-large);
  }

  &__header {
    cursor: pointer;
    display: flex;
    align-items: baseline;
    gap: 5px;
    font-weight: bold;

    &:hover {
      color: var(--color-gray-light);
    }
  }

  &__icon {
    font-size: calc(var(--ui-size) / 2);
  }
}
</style>
