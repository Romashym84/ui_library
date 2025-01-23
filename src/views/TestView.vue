<script setup>
import { UI_SIZE } from '@/components/ui/ui-types'
import UiDropDown from '@/components/ui/UiDropDown.vue'
import UiDropDownIcon from '@/components/ui/UiDropDownIcon.vue'
import { ref } from 'vue'

const selected = ref(null)

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
  <UiDropDownIcon
    :list="list"
    v-model="selected"
    placeholder="Введіть ім'я!"
    :size="UI_SIZE.DEFAULT"
  >
  </UiDropDownIcon>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <UiDropDown :list="list" v-model="selected" placeholder="Введіть ім'я!" :size="UI_SIZE.DEFAULT">
  </UiDropDown>
</template>

<!-- <template>
  <UiDropDownIcon v-slot="{ icons }">
    {{ icons }}
    <UiDropDown :list="list" v-model="selected" placeholder="Введіть ім'я!" :size="UI_SIZE.DEFAULT">
    </UiDropDown>
  </UiDropDownIcon>
</template> -->

<style scoped></style>
