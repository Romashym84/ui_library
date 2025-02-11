<script setup>
import {
  UI_RADIOBUTTON_TYPE,
  UI_SIZE,
  UI_TOGGLE_BUTTON_MODE,
  UI_TOGGLE_BUTTON_TYPE,
  UI_PROGRESS_TYPE,
} from '@/components/ui/ui-types'
import UiDropDown from '@/components/ui/UiDropDown.vue'
import UiDropDownIcon from '@/components/ui/UiDropDownIcon.vue'
import UiButton from '@/components/ui/UiButton.vue'
import { ref } from 'vue'
import UiRadioButton from '@/components/ui/UiRadioButton.vue'
import UiRadioButtonGroup from '@/components/ui/UiRadioButtonGroup.vue'
import UiCheckBoxButton from '@/components/UiCheckBoxButton.vue'
import UiCustomCheckbox from '@/components/UiCustomCheckbox.vue'
import UiToggleButton from '@/components/ui/UiToggleButton.vue'
import UiToggleButtonGroup from '@/components/ui/UiToggleButtonGroup.vue'
import UiSwitchButton from '@/components/ui/UiSwitchButton.vue'
import UiProgress from '@/components/ui/UiProgress.vue'

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
const selectedValue = ref('A')
const selectedCheckBox = ref([])
const selectedToggleButtongroup = ref([])
const selectedRadioBox = ref('')
const selectedswitch1 = ref(true)
const selectedswitch2 = ref(true)
const selectedswitch3 = ref(true)
// const uiProgress = ref('')

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
const listRadioGroup = [
  {
    value: 'A',
    label: 'Button A',
  },
  {
    value: 'B',
    label: 'Button B',
  },
  {
    value: 'C',
    label: 'Button C',
  },
  {
    value: 'D',
    label: 'Button D',
    disabled: true,
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
  <div class="button-gap">
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
  </div>
  <div class="button-group">
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
  <div class="button-gap">
    <UiRadioButtonGroup
      v-model="selectedValue"
      :options="listRadioGroup"
      :size="UI_SIZE.DEFAULT"
    ></UiRadioButtonGroup>
    <UiRadioButtonGroup
      v-model="selectedValue"
      :options="listRadioGroup"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="40px"
    ></UiRadioButtonGroup>
  </div>

  <div class="button-group">
    <UiCheckBoxButton
      groupMode
      label="Option A"
      value="A"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      groupMode
      label="Option B"
      value="B"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      groupMode
      label="Option C"
      value="C"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      groupMode
      disabled
      label="Option D"
      value="D"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
    ></UiCheckBoxButton>
  </div>
  <div class="button-gap">
    <UiCheckBoxButton
      label="Option 1"
      value="1"
      v-model="selectedRadioBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="180px"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      label="Option 2"
      value="2"
      v-model="selectedRadioBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="180px"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      label="Option 3"
      value="3"
      v-model="selectedRadioBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="180px"
    ></UiCheckBoxButton>

    <UiCheckBoxButton
      label="Option 4"
      v-model="selectedRadioBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="180px"
    ></UiCheckBoxButton>
    <UiCheckBoxButton
      disabled
      label="Option 5"
      value="5"
      v-model="selectedRadioBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.DEFAULT"
      gap="180px"
    ></UiCheckBoxButton>
  </div>
  <UiCustomCheckbox label="Test" value="Test" v-model="selectedCheckBox"></UiCustomCheckbox>
  <UiCustomCheckbox label="Test" value="Test" v-model="selectedRadioBox"></UiCustomCheckbox>
  <UiToggleButton
    label="Option 1"
    value="1"
    v-model="selectedCheckBox"
    :size="UI_SIZE.DEFAULT"
    :type="UI_TOGGLE_BUTTON_TYPE.DEFAULT"
  ></UiToggleButton>
  <UiToggleButton
    label="Option 2"
    value="2"
    v-model="selectedCheckBox"
    :size="UI_SIZE.DEFAULT"
    :type="UI_TOGGLE_BUTTON_TYPE.DEFAULT"
  ></UiToggleButton>
  <UiToggleButton
    label="Option 3"
    value="3"
    v-model="selectedCheckBox"
    :size="UI_SIZE.DEFAULT"
    :type="UI_TOGGLE_BUTTON_TYPE.DEFAULT"
  ></UiToggleButton>
  <UiToggleButton
    label="Option 4"
    value="4"
    v-model="selectedCheckBox"
    :size="UI_SIZE.DEFAULT"
    :type="UI_TOGGLE_BUTTON_TYPE.DEFAULT"
  ></UiToggleButton>

  <div>
    <UiToggleButton
      label="Option 1"
      value="1"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiToggleButton>
    <UiToggleButton
      label="Option 2"
      value="2"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiToggleButton>
    <UiToggleButton
      label="Option 3"
      value="3"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiToggleButton>
    <UiToggleButton
      label="Option 4"
      value="4"
      v-model="selectedCheckBox"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiToggleButton>
  </div>
  <div class="button-group">
    <UiToggleButtonGroup
      v-model="selectedToggleButtongroup"
      :options="listRadioGroup"
      :size="UI_SIZE.DEFAULT"
      :type="UI_RADIOBUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiToggleButtonGroup>
  </div>
  <br />
  <div class="buttons">
    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="true"
      v-model="selectedswitch1"
      :size="UI_SIZE.SMALL"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>

    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="false"
      v-model="selectedswitch2"
      :size="UI_SIZE.SMALL"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>
  </div>
  <br />
  <div class="buttons">
    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="true"
      v-model="selectedswitch1"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>

    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="false"
      v-model="selectedswitch2"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>
  </div>
  <br />
  <div class="buttons">
    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="true"
      v-model="selectedswitch1"
      :size="UI_SIZE.LARGE"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>

    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="false"
      v-model="selectedswitch2"
      :size="UI_SIZE.LARGE"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>
  </div>
  <br />
  <div class="buttons">
    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="true"
      :dark-style="true"
      v-model="selectedswitch3"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>

    <UiSwitchButton
      active-text="Y"
      noactive-text="N"
      :inline="false"
      :dark-style="true"
      v-model="selectedswitch3"
      :size="UI_SIZE.DEFAULT"
      :type="UI_TOGGLE_BUTTON_TYPE.BUTTON"
      :mode="UI_TOGGLE_BUTTON_MODE.CHECKBOX"
    ></UiSwitchButton>
  </div>
  <br />
  <UiProgress :percent="50" />
  <br />
  <UiProgress :percent="100" :type="UI_PROGRESS_TYPE.DANGER" />
  <br />
  <UiProgress :percent="75" :type="UI_PROGRESS_TYPE.SUCCESS" textInside />
  <br />
  <UiProgress :percent="30" :type="UI_PROGRESS_TYPE.WARNING" loading />
  <br />
  <UiProgress :percent="90" :type="UI_PROGRESS_TYPE.PRIMARY" hiddenText />
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
  justify-content: space-around;
}

.button-gap {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.button-group {
  margin-top: 20px;
  display: flex;
  gap: 0;
}
</style>
