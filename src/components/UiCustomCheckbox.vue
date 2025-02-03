<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  value: {
    type: [String, Number, Boolean, Array],
    default: true,
  },
  falseValue: {
    type: [String, Number, Boolean, Array],
    default: false,
  },
})

const model = defineModel()
</script>
<template>
  <label>
    <input
      v-model="model"
      :value="props.value"
      :true-value="props.value"
      :false-value="props.falseValue"
      type="checkbox"
    />
    {{ label }}
  </label>
</template>
