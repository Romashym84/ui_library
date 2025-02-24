<script setup>
import { computed } from 'vue'
import { UI_SIZE } from './ui-types'

const props = defineProps({
  buttonMods: {
    type: Boolean,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  total: {
    type: Number,
    default: 10,
  },
  pagerCount: {
    type: Number,
    default: 5,
  },
  pageSize: {
    type: Number,
    default: 1,
  },
})

const model = defineModel({ type: Number, default: 1 })
const iconLeft = '‹'
const iconRight = '›'
const iconEllipses = '…'
const iconDblLeft = '«'
const iconDblRight = '»'

const totalPage = computed(() => {
  return Math.ceil(props.total / props.pageSize)
})

const paginationItems = computed(() => {
  const { pagerCount } = props
  const total = totalPage.value
  const items = []

  if (total <= pagerCount) {
    for (let i = 1; i <= total; i++) {
      items.push(i)
    }
    return items
  }

  const center = Math.floor(pagerCount / 2) - 1
  let start = Math.max(2, model.value - center)
  let end = Math.min(total - 1, start + pagerCount - 3)

  if (end - start < pagerCount - 3) {
    start = Math.max(2, end - (pagerCount - 3))
  }

  items.push(1)
  if (start > 2) items.push(iconEllipses)
  for (let i = start; i <= end; i++) {
    items.push(i)
  }
  if (end < total - 1) items.push(iconEllipses)
  items.push(total)
  return items
})

const selectItems = (item, isLeft) => {
  if (item === iconEllipses) {
    model.value = isLeft
      ? Math.max(1, model.value - props.pagerCount)
      : Math.min(props.total, model.value + props.pagerCount)
  } else if (item !== model.value) {
    model.value = item
  }
}

const changeItems = (direction) => {
  const newItem = model.value + direction
  if (newItem >= 1 && newItem <= totalPage.value) {
    model.value = newItem
  }
}
</script>
<template>
  <div
    class="ui-pagination"
    :class="{
      [`ui-pagination--size-${size}`]: true,
      [`ui-pagination--btn`]: buttonMods,
    }"
  >
    <button
      class="ui-pagination__icon"
      :class="{ 'ui-pagination__icon--disabled': model === 1 }"
      @click="changeItems(-1)"
    >
      {{ iconLeft }}
    </button>
    <button
      v-for="(item, index) in paginationItems"
      :key="index"
      class="ui-pagination__item"
      :class="{
        ['ui-pagination__item--active']: item === model,
      }"
      @click="selectItems(item, index === 1)"
    >
      <span v-if="item === iconEllipses" class="ui-pagination__hover">
        <span class="ui-pagination__ellipses">{{ iconEllipses }}</span>
        <span class="ui-pagination__dblleft" v-if="index === 1">{{ iconDblLeft }}</span>
        <span class="ui-pagination__dblright" v-else>{{ iconDblRight }}</span>
      </span>
      <span v-else>{{ item }}</span>
    </button>
    <button
      class="ui-pagination__icon"
      :class="{ 'ui-pagination__icon--disabled': model === total }"
      @click="changeItems(1)"
    >
      {{ iconRight }}
    </button>
  </div>
</template>
<style scoped lang="scss">
.ui-pagination {
  display: flex;
  align-items: center;
  font-size: calc(var(--ui-size) / 2);
  min-width: calc(var(--ui-size) / 2);
  gap: 3px;

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

  &--btn {
    gap: 15px;
  }

  &__item,
  &__icon,
  &__hover {
    border: none;
    background: none;
    display: inline-flex;
    line-height: var(--ui-size);
    font-size: calc(var(--ui-size) / 2);
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  &--btn &__item,
  &--btn &__icon {
    border: 1px;
    background: var(--color-gray-extra-light);
    width: var(--ui-size);
    height: var(--ui-size);
  }

  &--btn &__item {
    font-size: calc(var(--ui-size) / 2);
  }

  &__icon {
    padding-bottom: 0.2em;

    &:hover {
      color: var(--color-blue-extra-light);
    }

    &--disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  &__hover:hover {
    color: var(--color-blue-extra-light);
  }

  &__dblleft,
  &__dblright {
    display: none;
  }

  &__item:hover & {
    &__ellipses {
      display: none;
    }

    &__dblleft,
    &__dblright {
      display: flex;
      justify-content: center;
      width: calc(var(--ui-size) / 2);
      padding-bottom: 0.1em;
    }
  }

  &__item {
    &:hover {
      color: var(--color-blue-extra-light);
    }

    &--active {
      color: var(--color-blue-light);
      font-weight: bold;
    }
  }

  &--btn &__item--active {
    background: var(--color-blue-light);
    color: var(--color-white);
  }
}
</style>
