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
import UiRate from '@/components/ui/UiRate.vue'
import UiSkeletonItem from '@/components/ui/UiSkeletonItem.vue'
import UiSkeletonLoader from '@/components/ui/UiSkeletonLoader.vue'
import UiPagination from '@/components/ui/UiPagination.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiInputNumber from '@/components/ui/UiInputNumber.vue'

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
const uiRate = ref('1')
const teslaImage = new URL('@/assets/Tesla.png', import.meta.url).href
const pagination = ref(1)
const input1 = ref()
const input2 = ref()
const input3 = ref()
const input4 = ref()
const input5 = ref()
const inputNumber1 = ref(1)
const inputNumber2 = ref(1)
const inputNumber3 = ref(1)
const inputNumber4 = ref(1)
const inputNumber5 = ref(1)

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

const layout = [
  {
    margin: '30px 0px 0px 238px',
    width: '70px',
    height: '16px',
    borderRadius: '2px',
  },
  {
    marginLeft: '35px',
    marginTop: '13px',
    width: '480px',
    height: '33px',
  },
  {
    marginLeft: '25px',
    marginTop: '10px',
    width: '500px',
    height: '33px',
  },
  {
    marginTop: '10px',
    marginLeft: '180px',
    width: '180px',
    height: '33px',
  },
  {
    marginTop: '20px',
    width: '550px',
    height: '370px',
    borderRadius: '2px',
  },
  {
    marginTop: '25px',
    marginLeft: '25px',
    inlineBlock: true,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  {
    marginLeft: '15px',
    inlineBlock: true,
    width: '150px',
    height: '40px',
    borderRadius: '2px',
  },
  {
    marginLeft: '255px',
    inlineBlock: true,
    width: '40px',
    height: '20px',
    borderRadius: '5px',
  },
  {
    marginTop: '55px',
    marginLeft: '25px',
    width: '500px',
    height: '180px',
    borderRadius: '2px',
  },
  {
    marginTop: '10px',
    marginLeft: '25px',
    width: '500px',
    height: '240px',
    borderRadius: '2px',
  },
  {
    marginTop: '10px',
    marginLeft: '25px',
    width: '500px',
    height: '220px',
    borderRadius: '2px',
  },
  {
    marginTop: '10px',
    marginLeft: '25px',
    width: '500px',
    height: '280px',
    borderRadius: '2px',
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
  <br />
  <UiRate v-model="uiRate" :readonly="false" :count="5" :size="UI_SIZE.SMALL"></UiRate>
  <br />
  <UiRate
    v-model="uiRate"
    :readonly="false"
    :count="5"
    :size="UI_SIZE.DEFAULT"
    active-color="red"
    half-mode
  ></UiRate>
  <br />
  <UiRate
    v-model="uiRate"
    :readonly="false"
    :count="5"
    :size="UI_SIZE.LARGE"
    style-red
    text-mode
  ></UiRate>
  <div class="skeleton">
    <div class="skeleton-info">
      <UiSkeletonItem width="70px" height="20px" border-radius="2px"></UiSkeletonItem>
    </div>
    <div class="skeleton-heder">
      <UiSkeletonItem width="500px" height="70px"></UiSkeletonItem>
      <UiSkeletonItem width="180px" height="35px"></UiSkeletonItem>
    </div>
    <div class="skeleton-heder-image">
      <UiSkeletonItem width="550px" height="350px" border-radius="2px"></UiSkeletonItem>
      <div class="skeleton-heder-image-info">
        <div class="skeleton-heder-image-info-author">
          <UiSkeletonItem width="40px" height="40px" border-radius="50%"></UiSkeletonItem>
          <UiSkeletonItem width="150px" height="40px" border-radius="2px"></UiSkeletonItem>
        </div>
        <div class="skeleton-heder-image-info-like">
          <UiSkeletonItem width="40px" height="20px" border-radius="8px"></UiSkeletonItem>
        </div>
      </div>
    </div>
    <div class="skeleton-body">
      <UiSkeletonItem width="500px" height="180px" border-radius="2px"></UiSkeletonItem>
    </div>
    <div class="skeleton-body">
      <UiSkeletonItem width="500px" height="240px" border-radius="2px"></UiSkeletonItem>
    </div>
    <div class="skeleton-body">
      <UiSkeletonItem width="500px" height="220px" border-radius="2px"></UiSkeletonItem>
    </div>
    <div class="skeleton-body">
      <UiSkeletonItem width="500px" height="280px" border-radius="2px"></UiSkeletonItem>
    </div>
  </div>
  <div class="skelet">
    <UiSkeletonLoader :layout="layout" loading>
      <img :src="teslaImage" alt="Tesla" :style="{ maxWidth: '550px' }" />
      <!-- <a href="https://mezha.media/2025/02/13/tesla-armored-cybertruck-usa-deal/"></a> -->
    </UiSkeletonLoader>
  </div>

  <UiPagination :size="UI_SIZE.SMALL"></UiPagination>
  <UiPagination :size="UI_SIZE.DEFAULT"></UiPagination>
  <UiPagination :size="UI_SIZE.LARGE"></UiPagination>
  <br />
  <UiPagination
    v-model="pagination"
    :total="50"
    :pager-count="5"
    :buttonMods="true"
    :size="UI_SIZE.SMALL"
  />
  <br />
  <UiPagination
    v-model="pagination"
    :total="50"
    :pager-count="5"
    :buttonMods="true"
    :size="UI_SIZE.DEFAULT"
  />
  <br />
  <UiPagination
    v-model="pagination"
    :total="50"
    :pager-count="5"
    :buttonMods="true"
    :size="UI_SIZE.LARGE"
  />
  <br />
  <UiPagination
    v-model="pagination"
    :total="100"
    :page-size="3"
    :pager-count="5"
    :buttonMods="true"
    :size="UI_SIZE.LARGE"
  />
  <br />
  <UiInput v-model="input1"></UiInput>
  <br />
  <UiInput v-model="input2" type="password" :size="UI_SIZE.SMALL"></UiInput>
  <br />
  <UiInput v-model="input3" clearable :size="UI_SIZE.DEFAULT"></UiInput>
  <br />
  <UiInput
    v-model="input4"
    disabled
    placeholder="Hello, I'm blocked"
    :size="UI_SIZE.DEFAULT"
  ></UiInput>
  <br />
  <UiInput
    v-model="input5"
    type="password"
    :show-password-props="true"
    :size="UI_SIZE.LARGE"
  ></UiInput>
  <br />
  <UiInputNumber
    v-model="inputNumber1"
    placeholder="Введіть значення"
    :min="1"
    :max="10"
    :step="1"
    :controls="true"
    :size="UI_SIZE.SMALL"
  ></UiInputNumber>
  <br />
  <UiInputNumber
    v-model="inputNumber2"
    placeholder="Введіть значення"
    :min="1"
    :max="10"
    :step="1"
    :controls="true"
    :size="UI_SIZE.DEFAULT"
  ></UiInputNumber>
  <br />
  <UiInputNumber
    v-model="inputNumber3"
    placeholder="Введіть значення"
    :min="0"
    :max="20"
    :step="2"
    :controls="true"
    :size="UI_SIZE.LARGE"
  ></UiInputNumber>
  <br />
  <UiInputNumber
    v-model="inputNumber4"
    placeholder="Введіть значення"
    :min="1"
    :max="10"
    :step="1"
    :controls="false"
    :size="UI_SIZE.DEFAULT"
  ></UiInputNumber>
  <br />
  <UiInputNumber
    v-model="inputNumber5"
    placeholder="Введіть значення"
    disabled
    :min="1"
    :max="10"
    :step="1"
    :controls="true"
    :size="UI_SIZE.LARGE"
  ></UiInputNumber>
</template>

<style scoped>
.skelet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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

.skeleton {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 14px;
  gap: 8px;
  max-width: fit-content;
  margin: auto;
  background: white;
}

.skeleton-info {
  display: flex;
  justify-content: center;
  margin: 20px 0 8px 0;
}

.skeleton-heder {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin-bottom: 8px;
}

.skeleton-heder-image {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.skeleton-heder-image-info {
  display: flex;
  align-items: baseline;
  width: 500px;
  justify-content: space-between;
  margin-top: 10px;
}

.skeleton-heder-image-info-author {
  display: flex;
  margin: 20px 0px 30px 0px;
  gap: 8px;
}

.skeleton-heder-image-info-like {
  display: flex;
  justify-content: end;
}

.skeleton-body {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
</style>
