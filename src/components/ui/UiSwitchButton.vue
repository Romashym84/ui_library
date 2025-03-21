<script setup>
import { UI_SIZE, UI_TOGGLE_BUTTON_MODE } from './ui-types'
import UiToggleButton from './UiToggleButton.vue'

const props = defineProps({
  value: {
    type: [String, Number, Boolean, Array],
    default: true,
  },
  falseValue: {
    type: [String, Number, Boolean, Array],
    default: false,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  mode: {
    type: String,
    default: UI_TOGGLE_BUTTON_MODE.RADIO,
    validator(value) {
      return Object.values(UI_TOGGLE_BUTTON_MODE).includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeText: {
    type: String,
  },
  noactiveText: {
    type: String,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  darkStyle: {
    type: Boolean,
  },
})

const model = defineModel()
</script>
<template>
  <UiToggleButton
    v-model="model"
    :value="props.value"
    :false-value="props.falseValue"
    :size="props.size"
    :mode="props.mode"
    :disabled="disabled"
    :style="{ border: 'none' }"
    :activeText="props.activeText"
    :noactiveText="props.noactiveText"
    :inline="props.inline"
    :darkStyle="props.darkStyle"
  >
    <template #input>
      <div
        class="ui-switch-button"
        :class="{
          [`ui-switch-button--disabled`]: disabled,
          [`ui-switch-button--size-${size}`]: true,
        }"
      >
        <span
          v-if="!inline"
          :class="{
            ['ui-switch-button--prepend-active-text']: model === value,
            ['ui-switch-button--prepend-noactive-text']: model !== value,
            ['ui-switch-button--prepend-active-text-dark']: darkStyle && model === value,
            ['ui-switch-button--prepend-noactive-text-dark']: darkStyle && model !== value,
          }"
        >
          {{ noactiveText }}
        </span>
        <span
          class="ui-switch-button__container"
          :class="{
            [`ui-switch-button__container--active`]: model === value,
            [`ui-switch-button__container--size-${size}`]: true,
            [`ui-switch-button__container-dark`]: darkStyle,
            [`ui-switch-button__container--active-dark`]: darkStyle && model === value,
          }"
        >
          <span
            v-if="inline"
            class="ui-switch-button__text"
            :class="{
              ['ui-switch-button__text--noactive']: model !== value,
              ['ui-switch-button__text-dark']: darkStyle,
              ['ui-switch-button__text--noactive-dark']: darkStyle && model !== value,
            }"
          >
            {{ model === value ? activeText : noactiveText }}
          </span>
          <div
            class="ui-switch-button__container-action"
            :class="{ [`ui-switch-button__container-action-dark`]: darkStyle }"
          ></div>
        </span>
        <span
          v-if="!inline"
          :class="{
            ['ui-switch-button__container--active-text']: model === value,
            ['ui-switch-button__container--noactive-text']: model !== value,
            ['ui-switch-button__container--active-text-dark']: darkStyle && model === value,
            ['ui-switch-button__container--noactive-text-dark']: darkStyle && model !== value,
          }"
        >
          {{ activeText }}
        </span>
      </div>
    </template>
  </UiToggleButton>
</template>
<style scoped lang="scss">
.ui-switch-button {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  height: 100%;
  vertical-align: middle;

  &--size {
    &-small {
      font-size: calc(var(--ui-size-small) / 2);
      --ui-size: var(--ui-size-small);
    }
    &-default {
      font-size: calc(var(--ui-size-default) / 2);
      --ui-size: var(--ui-size-default);
    }
    &-large {
      font-size: calc(var(--ui-size-large) / 2);
      --ui-size: var(--ui-size-large);
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &__container {
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: calc(var(--ui-size) + var(--ui-size));
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border: var(--color-red);
    outline: none;
    border-radius: var(--ui-size);
    background: var(--color-red);
    transition:
      border-color 0.3s,
      background-color 0.3s;

    &-dark {
      background: var(--color-white-gray);
      border: var(--color-white-gray);
    }

    &--active {
      background: var(--color-green-light);
      border-color: var(--color-green-light);
    }

    &--active-dark {
      background: var(--color-black);
      border-color: var(--color-black);
    }

    &--active &-action {
      left: calc(100% - calc(var(--ui-size) - 2px));
    }

    &--active .ui-switch-button__text {
      padding-left: calc(var(--ui-size) * 0.2);
      padding-right: calc(var(--ui-size) - 32px);
      color: var(--color-white);
    }
  }

  &__container-action {
    position: absolute;
    left: 2px;
    width: calc(var(--ui-size) - 4px);
    height: calc(var(--ui-size) - 4px);
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: left 0.3s;
    top: 2px;
  }

  &__text {
    &.noactive {
      color: var(--color-red);
    }
    &-dark.noactive-dark {
      color: var(--color-white-gray);
    }
  }

  &__container {
    .ui-switch-button__text {
      &.ui-switch-button__text--noactive {
        padding-right: calc(var(--ui-size) * 0.2);
        padding-left: calc(var(--ui-size));
        width: 100%;
        text-align: right;
        color: var(--color-white);
      }
    }
  }

  &__container-dark {
    .ui-switch-button__text-dark {
      &.ui-switch-button__text--noactive-dark {
        color: var(--color-black);
      }
    }
  }

  &--prepend {
    &-active-text {
      color: var(--color-gray);
    }

    &-noactive-text {
      color: var(--color-blue);
    }

    &-active-text-dark {
      color: var(--color-white-gray);
    }

    &-noactive-text-dark {
      color: var(--color-black);
    }
  }

  &--noactive-text {
    color: var(--color-gray);
  }

  &__container {
    & {
      &--active-text {
        color: var(--color-blue);
      }
      &--active-text-dark {
        color: var(--color-black);
      }
      &--noactive-text-dark {
        color: var(--color-white-gray);
      }
    }
  }
}
</style>
<!-- <style scoped>
.ui-switch-button {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  height: 100%;
  vertical-align: middle;
}

.ui-switch-button--size-small {
  font-size: calc(var(--ui-size-small) / 2);
  --ui-size: var(--ui-size-small);
}

.ui-switch-button--size-default {
  font-size: calc(var(--ui-size-default) / 2);
  --ui-size: var(--ui-size-default);
}

.ui-switch-button--size-large {
  font-size: calc(var(--ui-size-large) / 2);
  --ui-size: var(--ui-size-large);
}

.ui-switch-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-switch-button__container {
  display: inline-flex;
  position: relative;
  align-items: center;
  min-width: calc(var(--ui-size) + var(--ui-size));
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  border: var(--color-red);
  outline: none;
  border-radius: var(--ui-size);
  background: var(--color-red);
  transition:
    border-color 0.3s,
    background-color 0.3s;
}

.ui-switch-button__container-dark {
  background: rgb(220, 219, 219);
  border: rgb(220, 219, 219);
}

.ui-switch-button__container--active {
  background: var(--color-green-light);
  border-color: var(--color-green-light);
}

.ui-switch-button__container--active-dark {
  background: var(--color-black);
  border-color: var(--color-black);
}

.ui-switch-button__container-action {
  position: absolute;
  left: 2px;
  width: calc(var(--ui-size) - 4px);
  height: calc(var(--ui-size) - 4px);
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: left 0.3s;
  top: 2px;
}

.ui-switch-button__container--active .ui-switch-button__container-action {
  left: calc(100% - calc(var(--ui-size) - 2px));
}

.ui-switch-button__container--active .ui-switch-button__text {
  padding-left: calc(var(--ui-size) * 0.2);
  padding-right: calc(var(--ui-size) - 32px);
  color: var(--color-white);
}

.ui-switch-button__text.noactive {
  color: var(--color-red);
}

.ui-switch-button__text-dark.noactive-dark {
  color: var(--color-white-gray);
}

.ui-switch-button__container .ui-switch-button__text.ui-switch-button__text--noactive {
  padding-right: calc(var(--ui-size) * 0.2);
  padding-left: calc(var(--ui-size));
  width: 100%;
  text-align: right;
  color: var(--color-white);
}

.ui-switch-button__container-dark
  .ui-switch-button__text-dark.ui-switch-button__text--noactive-dark {
  color: var(--color-black);
}

.ui-switch-button--prepend-active-text {
  color: var(--color-gray);
}

.ui-switch-button--prepend-noactive-text {
  color: var(--color-blue);
}

.ui-switch-button--noactive-text {
  color: var(--color-gray);
}

.ui-switch-button__container--active-text {
  color: var(--color-blue);
}

.ui-switch-button--prepend-active-text-dark {
  color: var(--color-white-gray);
}

.ui-switch-button--prepend-noactive-text-dark {
  color: var(--color-black);
}

.ui-switch-button__container--noactive-text-dark {
  color: var(--color-white-gray);
}

.ui-switch-button__container--active-text-dark {
  color: var(--color-black);
}
</style> -->
