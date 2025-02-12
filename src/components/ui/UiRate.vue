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
  styleRed: {
    type: Boolean,
  },
  styleBlue: {
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

const getColor = (index) => {
  const curentValue = hoverValue.value ?? model.value
  if (props.styleRed) {
    return index <= curentValue ? 'var(--color-red)' : 'var(--color-green)'
  }

  if (props.styleBlue) {
    return index <= curentValue ? 'var(--color-blue)' : 'var(--color-black)'
  }

  return index <= curentValue ? 'var(--color-orange)' : 'var(--color-blue-dark)'
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
  <div class="ui-rate">
    <span
      v-for="star in stars"
      :key="star"
      class="ui-rate__star"
      :class="{ [`ui-rate__star--size-${size}`]: true }"
      :style="{ color: getColor(star) }"
      @click="updateRate(star)"
      @mouseover="setHover(star)"
      @mouseout="clearHover"
    >
      ★
    </span>
  </div>
</template>
<style scoped lang="scss">
.ui-rate {
  display: flex;
  gap: 4px;
  cursor: pointer;

  &__star {
    font-size: 50px;
    transition:
      color 0.3s,
      transform 0.2s;
    line-height: 100%;

    &--size-small {
      font-size: var(--ui-size-small);
    }

    &--size-default {
      font-size: var(--ui-size-default);
    }
    
    &--size-large {
      font-size: var(--ui-size-large);
    }

    &:hover {
      transform: scale(1.5);
    }
  }
}
</style>
