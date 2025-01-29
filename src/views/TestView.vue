<script setup>
import { UI_RADIOBUTTON_TYPE, UI_SIZE } from '@/components/ui/ui-types'
import UiDropDown from '@/components/ui/UiDropDown.vue'
import UiDropDownIcon from '@/components/ui/UiDropDownIcon.vue'
import UiButton from '@/components/ui/UiButton.vue'
import { ref } from 'vue'
import UiRadioButton from '@/components/UiRadioButton.vue'

defineProps({
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
  type: {
    type: String,
    default: UI_RADIOBUTTON_TYPE.DEFAULT,
    validator(value) {
      return Object.values(UI_RADIOBUTTON_TYPE).includes(value)
    },
  },
})

const selected = ref(null)
const isLoading = ref(true)
const selectedOption = ref('A')

setTimeout(() => {
  isLoading.value = false
}, 2000)

const list = [
  {
    value: 1,
    label: 'Roma',
    icon: '😁',
  },
  {
    value: 2,
    label: 'Rusik',
    icon: '😀',
  },
  {
    value: 3,
    label: 'Ivan',
    icon: '🤣',
  },
  {
    value: 4,
    label: 'Sergio',
    icon: '🫠',
  },
  {
    value: 5,
    label: 'Igor',
    icon: '😉',
  },
]
</script>

<template>
  <UiDropDownIcon :list="list" v-model="selected" placeholder="Введіть ім'я!" :size="UI_SIZE.LARGE">
  </UiDropDownIcon>
  <UiDropDown :list="list" v-model="selected" placeholder="Введіть ім'я!" :size="UI_SIZE.DEFAULT">
  </UiDropDown>

  <div class="buttons">
    <UiButton label="Primary" type="primary" :size="UI_SIZE.SMALL" :loading="isLoading"
      >Test</UiButton
    >
    <UiButton
      round
      label="Success"
      type="success"
      :size="UI_SIZE.DEFAULT"
      :loading="isLoading"
    ></UiButton>
    <UiButton circle label="Danger" type="danger" :size="UI_SIZE.DEFAULT"></UiButton>
    <UiButton
      round
      label="Disabled"
      type="info"
      :size="UI_SIZE.LARGE"
      :loading="isLoading"
    ></UiButton>
    <UiButton round label="Warning" type="warning" :size="UI_SIZE.DEFAULT"></UiButton>
    <UiButton disabled :loading="isLoading">Test Button</UiButton>
  </div>
  <UiRadioButton
    label="Option A"
    value="A"
    v-model="selectedOption"
    :size="UI_SIZE.SMALL"
    :type="UI_RADIOBUTTON_TYPE.DEFAULT"
  />
  <UiRadioButton
    label="Option B"
    value="B"
    v-model="selectedOption"
    :size="UI_SIZE.DEFAULT"
    :type="UI_RADIOBUTTON_TYPE.DEFAULT"
  />
  <UiRadioButton
    label="Button C"
    value="C"
    v-model="selectedOption"
    :size="UI_SIZE.SMALL"
    :type="UI_RADIOBUTTON_TYPE.BUTTON"
  />
  <UiRadioButton
    label="Button D"
    value="D"
    v-model="selectedOption"
    :size="UI_SIZE.DEFAULT"
    :type="UI_RADIOBUTTON_TYPE.BUTTON"
  />
  <UiRadioButton
    label="Button E"
    value="E"
    v-model="selectedOption"
    :size="UI_SIZE.LARGE"
    :type="UI_RADIOBUTTON_TYPE.BUTTON"
  />
  <UiRadioButton
    disabled
    label="Disabled"
    value="F"
    v-model="selectedOption"
    :size="UI_SIZE.DEFAULT"
    :type="UI_RADIOBUTTON_TYPE.DEFAULT"
  />
  <UiRadioButton
    disabled
    label="Button G"
    value="G"
    v-model="selectedOption"
    :size="UI_SIZE.DEFAULT"
    :type="UI_RADIOBUTTON_TYPE.BUTTON"
  />

  <div>
    <UiRadioButton
      group-mode
      label="Button A"
      value="A"
      v-model="selectedOption"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    />
    <UiRadioButton
      group-mode
      label="Button B"
      value="B"
      v-model="selectedOption"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    />
    <UiRadioButton
      group-mode
      label="Button C"
      value="C"
      v-model="selectedOption"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    />
    <UiRadioButton
      group-mode
      label="Button D"
      value="D"
      v-model="selectedOption"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    />
  </div>
</template>

<!-- <template>
  <UiDropDownIcon v-slot="{ icons }">
    {{ icons }}
    <UiDropDown :list="list" v-model="selected" placeholder="Введіть ім'я!" :size="UI_SIZE.DEFAULT">
    </UiDropDown>
  </UiDropDownIcon>
</template> -->

<style scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
