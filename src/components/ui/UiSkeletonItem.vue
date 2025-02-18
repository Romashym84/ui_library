<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  borderRadius: {
    type: String,
    default: '4px',
  },
  margin: {
    type: String,
  },
  marginTop: {
    type: String,
    default: '0',
  },
  marginRight: {
    type: String,
    default: '0',
  },
  marginBottom: {
    type: String,
    default: '0',
  },
  marginLeft: {
    type: String,
    default: '0',
  },
  inlineBlock: {
    type: Boolean,
  },
})

const marginStyle = computed(() => {
  return (
    props.margin ??
    `${props.marginTop} ${props.marginRight} ${props.marginBottom} ${props.marginLeft}`
  )
})
</script>
<template>
  <div
    class="ui-skeleton-item"
    :class="{ 'ui-skeleton-item--inline-block': props.inlineBlock }"
    :style="{
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
      margin: marginStyle,
      inlineBlock: props.inlineBlock,
    }"
  ></div>
</template>
<style lang="scss">
.ui-skeleton-item {
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimer 3s infinite linear(0.86 -10.35%, -0.14 89.18%);

  &--inline-block {
    display: inline-block;
  }
}

@keyframes shimer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
