<script setup>
import UiSkeletonItem from './UiSkeletonItem.vue'

const props = defineProps({
  loading: {
    type: Boolean,
  },
  layout: {
    type: Array,
  },
})
</script>
<template>
  <div v-if="loading" :class="'ui-skeleton-container'">
    <UiSkeletonItem
      v-for="(item, index) in props.layout"
      :key="index"
      :width="item.width"
      :height="item.height"
      :border-radius="item.borderRadius"
      :margin="item.margin"
      :margin-top="item.marginTop"
      :margin-right="item.marginRight"
      :margin-bottom="item.marginBottom"
      :margin-left="item.marginLeft"
      :inline-block="item.inlineBlock"
    ></UiSkeletonItem>
  </div>
  <slot v-else></slot>
</template>
<style scoped lang="scss"></style>
