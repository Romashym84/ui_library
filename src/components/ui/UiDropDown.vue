<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { KEY_CODE, UI_SIZE } from './ui-types'

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
  },
  size: {
    type: String,
    default: UI_SIZE.DEFAULT,
    validator(value) {
      return Object.values(UI_SIZE).includes(value)
    },
  },
})

const modelValue = defineModel()
const showMenu = ref(false)
const selectedIndex = ref(-1)
const hoverIndex = ref(-1)

const selectItem = computed(() => props.list.find((elem) => elem.value === modelValue.value) || {})

const selectedOption = (item) => {
  modelValue.value = item.value
  selectedIndex.value = props.list.findIndex((elem) => elem === item)
  updateHoverIndex()
}

const selectedOptionClick = (item) => {
  selectedOption(item)
  closeMenu()
}

const updateHoverIndex = () => {
  hoverIndex.value = selectedIndex.value !== -1 ? selectedIndex.value : 0
}

const selectMenu = () => {
  showMenu.value = !showMenu.value
  if (showMenu.value) {
    updateHoverIndex()
  } else {
    hoverIndex.value = -1
  }
}

const closeMenu = () => {
  if (showMenu.value) {
    showMenu.value = false
  }
}

const updateInputValue = () => {
  if (selectedIndex.value >= 0 && selectedIndex.value < props.list.length) {
    modelValue.value = props.list[hoverIndex.value].value
  }
}

const pressedArrowKey = (event) => {
  if (event.code === KEY_CODE.DOWN || event.code === KEY_CODE.RIGHT) {
    if (hoverIndex.value < props.list.length - 1) {
      hoverIndex.value += 1
      updateInputValue()
      selectedOption(props.list[hoverIndex.value])
    }
  }
  if (event.code === KEY_CODE.UP || event.code === KEY_CODE.LEFT) {
    if (hoverIndex.value > 0) {
      hoverIndex.value -= 1
      updateInputValue()
      selectedOption(props.list[hoverIndex.value])
    }
  }
}

const pressedKeydown = (event) => {
  if (event.code === KEY_CODE.ESCAPE) {
    closeMenu()
  }

  if (event.code === KEY_CODE.SPACE) {
    closeMenu()
  }

  if (event.code === KEY_CODE.ENTER) {
    if (showMenu.value) {
      selectedOption(props.list[hoverIndex.value])
      closeMenu()
    } else {
      selectMenu()
      updateHoverIndex()
    }
    return
  }
  pressedArrowKey(event)
}

if (showMenu.value) {
  if (hoverIndex.value !== -1) {
    updateInputValue()
  }
}

onMounted(() => {
  document.addEventListener('keydown', pressedKeydown)
  document.addEventListener('click', pressedClickNoContainer)
})

onUnmounted(() => {
  document.removeEventListener('keydown', pressedKeydown)
  document.removeEventListener('click', pressedClickNoContainer)
})

const pressedClickNoContainer = (event) => {
  if (!event.target.closest('.dropdown')) {
    closeMenu()
  }
}
</script>

<template>
  <div class="dropdown" :class="`dropdown--${size}`">
    <div class="dropdown__container" @click="selectMenu">
      <slot name="prependInput" :item="selectItem"></slot>
      <input
        readonly
        type="text"
        class="dropdown__input"
        :value="selectItem.label"
        :placeholder="placeholder"
      />
      <div class="dropdown__icon">{{ showMenu ? '&#9650;' : '&#9660;' }}</div>
    </div>

    <div class="dropdown__list" v-if="showMenu">
      <div
        v-for="(item, index) in list"
        :key="item.value"
        class="dropdown__item"
        :class="{
          'dropdown__item--selected': modelValue === item.value || selectedIndex === index,
          'dropdown__item--hover': hoverIndex === index,
        }"
        @click="selectedOptionClick(item)"
      >
        <slot name="item" :item="item">{{ item.label }}</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown--small .dropdown__container {
  height: var(--ui-size-small);
}

.dropdown--default .dropdown__container {
  height: var(--ui-size-default);
}

.dropdown--large .dropdown__container {
  height: var(--ui-size-large);
}

.dropdown__container {
  height: var(--ui-size-default);
  padding: 10px 15px;
  font-size: 16px;
  color: #333;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown__input {
  font-size: larger;
  width: -webkit-fill-available;
  border: none;
  background: #f9f9f9;
  cursor: pointer;
}

.dropdown__input:focus {
  outline: none;
}

.dropdown__icon {
  font-size: 12px;
  color: #999;
}

.dropdown__list {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px 0 0;
}

.dropdown__item {
  padding: 10px 15px;
  cursor: pointer;
  color: black;
}

.dropdown__item:hover {
  background-color: #f0f0f0;
}

.dropdown__item--selected {
  background: #c7c7c7;
  font-weight: bold;
}

.dropdown__item--hover {
  background-color: #f0f0f0;
}
</style>
