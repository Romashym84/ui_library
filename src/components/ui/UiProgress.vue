<script setup>
import { computed } from 'vue'
import { UI_PROGRESS_TYPE } from './ui-types'

const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: UI_PROGRESS_TYPE.PRIMARY,
    validator(value) {
      return Object.values(UI_PROGRESS_TYPE).includes(value)
    },
  },
  textInside: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  hiddenText: {
    type: Boolean,
  },
})

const progressStyle = computed(() => `transform: translateX(${-100 + props.percent}%)`)

const progressClass = computed(() => ({
  [`ui-progress__bar--${props.type}`]: true,
  'ui-progress__bar--loading': props.loading,
}))

const isHiddenText = computed(() => props.hiddenText || props.loading)
</script>
<template>
  <div class="ui-progress">
    <div class="ui-progress__track">
      <div class="ui-progress__bar" :class="progressClass" :style="progressStyle">
        <span v-if="!isHiddenText && textInside" class="ui-progress__text"> {{ percent }}% </span>
      </div>
    </div>
    <span v-if="!isHiddenText && !textInside" class="ui-progress__label"> {{ percent }}% </span>
  </div>
</template>
<style scoped lang="scss">
.ui-progress {
  display: flex;
  align-items: center;
  gap: 8px;

  &__track {
    flex: auto;
    height: 15px;
    background: var(--color-white-gray);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  &__bar {
    transition: transform 1.3s ease;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: 12px;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: center;
    border-radius: 4px;

    &--primary {
      background: var(--color-primary);
    }

    &--success {
      background: var(--color-success);
    }

    &--warning {
      background: var(--color-warning);
    }

    &--danger {
      background: var(--color-danger);
    }

    &--loading {
      animation: loading-slide 1.5s infinite linear;
    }
  }

  &__text {
    color: var(--color-white);
    font-weight: bold;
  }

  &__label {
    font-size: 14px;
    line-height: 100%;
    color: var(--color-black);
    min-width: 34px;
  }
}

@keyframes loading-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
