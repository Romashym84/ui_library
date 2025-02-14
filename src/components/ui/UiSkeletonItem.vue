<script setup>
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
})
</script>
<template>
  <div
    class="ui-skeleton-item"
    :style="{
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
    }"
  ></div>
</template>
<style lang="scss">
.ui-skeleton-item {
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimer 3s infinite linear(0.86 -10.35%, -0.14 89.18%);
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
