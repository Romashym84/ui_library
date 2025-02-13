<script setup>
import { ref, computed } from 'vue'
import { UI_SIZE } from './ui-types'

const props = defineProps({
  value: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 5,
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  halfMode: {
    type: Boolean,
  },
  textMode: {
    type: Boolean,
  },
})

const model = defineModel()

const stars = computed(() => {
  const arr = []
  for (let i = 1; i <= props.count; i++) {
    arr.push(i)
  }
  return arr
})

const hoverValue = ref(null)

const activeColor = computed(()=>props.activeColor || 'var(--color-orange)')
const inactiveColor = computed(()=>props.inactiveColor || 'var(--color-blue-dark)')

const getColor = (index) => {
  const curentValue = hoverValue.value ?? model.value

  return index <= curentValue ? activeColor.value : inactiveColor.value
}

const updateRate = (index) => {
  if (!props.readonly) {
    model.value = index
  }
}

const setHover = (index) => {
  if (!props.readonly) {
    hoverValue.value = index
  }
}

const clearHover = () => {
  if (!props.readonly) {
    hoverValue.value = null
  }
}
</script>
<template>
  <div class="ui-rate" :class="{ [`ui-rate--size-${size}`]: true }">
    <span class="ui-rate__star" v-for="star in stars" :key="star">
      <div
        v-if="halfMode"
        class="ui-rate__star-left"
        :style="{ color: getColor(star - 0.5) }"
        @click="updateRate(star - 0.5)"
        @mouseover="setHover(star - 0.5)"
        @mouseout="clearHover"
      >
        ★
      </div>
      <div
        class="ui-rate__star-right"
        :style="{ color: getColor(star) }"
        @click="updateRate(star)"
        @mouseover="setHover(star)"
        @mouseout="clearHover"
      >
        ★
      </div>
    </span>
    <div v-if="textMode" class="ui-rate__star-number">{{ model }}</div>
  </div>
</template>
<style scoped lang="scss">
.ui-rate {
  display: flex;
  gap: 4px;
  cursor: pointer;
  height: 1em;

  &--size-small {
    font-size: var(--ui-size-small);
  }

  &--size-default {
    font-size: var(--ui-size-default);
  }

  &--size-large {
    font-size: var(--ui-size-large);
  }

  &__star {
    display: inline-block;
    position: relative;
    transition:
      color 0.3s,
      transform 0.2s;
    line-height: 0.9em;

    &:hover {
      transform: scale(1.5);
    }
  }

  &__star-left {
    position: absolute;
    width: 50%;
    overflow: hidden;
  }

  &__star-number {
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-size: 0.5em;
    line-height: 1em;
  }
}
</style>
