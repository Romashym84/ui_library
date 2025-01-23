<script setup>
import UiDropDown from './UiDropDown.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <UiDropDown class="ui-dropdown-icon" :list="props.list" v-bind="$attrs">
    <template #prependInput="{ item }">
      <div class="ui-dropdown-prepend__input">{{ item.icon }}</div>
    </template>
    <template #item="{ item }">
      <div class="ui-dropdown-icon__item">{{ item.icon }} {{ item.label }}</div>
    </template>
  </UiDropDown>
</template>
