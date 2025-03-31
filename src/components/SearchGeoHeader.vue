<script setup>
import { ref, watch } from 'vue'
import { UI_SIZE } from './ui/ui-types'
import UiInput from './ui/UiInput.vue'
import UiButton from './ui/UiButton.vue'
import UiInputNumber from './ui/UiInputNumber.vue'
import UiCollapse from './ui/UiCollapse.vue'

const emit = defineEmits(['action:search', 'action:clear', 'limit:update'])

const query = ref('')
const countryCode = ref('')
const isOption = ref(false)
const model=defineModel()

function search(event) {
  if (event) event.preventDefault()
  const data = {
    query: query.value,
    countryCode: countryCode.value,
  }
  emit('action:search', data)
}

function clear() {
  query.value = ''
  countryCode.value = ''
  emit('action:clear')
}
</script>
<template>
  <div class="search-geo-header">
    <div class="search-geo-header__control">
      <UiInput
        v-model="query"
        type="text"
        class="search-geo-header__input"
        placeholder="Enter address..."
        spellcheck="false"
        @keydown.enter.stop="search($event)"
      />
      <UiButton @click="search" class="search-geo-header__button">Search</UiButton>
      <UiButton @click="clear" class="search-geo-header__clear">Clear</UiButton>
    </div>
    <div class="search-geo-header__option">
      <UiCollapse v-model="isOption" title="Option" :size="UI_SIZE.SMALL">
        <div class="search-geo-header__option--info">
          <div class="search-geo-header__option--info-input">
            Введіть яку кількість показати :
            <UiInputNumber v-model="model"></UiInputNumber>
          </div>
          <div class="search-geo-header__option--info-input-code">
            Введіть код країни :
            <UiInput
              v-model="countryCode"
              type="text"
              placeholder="Введіть код країни"
              @keydown.enter.stop="search"
              spellcheck="false"
            ></UiInput>
          </div>
        </div>
      </UiCollapse>
    </div>
  </div>
</template>
<style scoped lang="scss">
.search-geo-header {
  display: flex;
  background: var(--color-gray-white);
  width: 100%;
  min-height: 100px;
  flex-direction: column;

  &__option {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    &--info {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      margin-top: 10px;
      gap: 10px;

      &-input {
        display: flex;
        gap: 20px;
        font-size: 18px;
        font-style: italic;

        &-code {
          display: flex;
          gap: 20px;
          font-size: 18px;
          font-style: italic;
          margin-bottom: 20px;
        }
      }
    }
  }

  &__control {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__input {
    text-align: start;
    margin: 20px;
    width: 500px;
    max-width: 100%;
    font-size: 20px;
    text-decoration: none;

    &:focus {
      border: 4px solid var(--color-blue-extra-light);
      outline: none;
    }
  }

  &__button {
    padding: 8px 12px;
    border: none;
    background: var(--color-blue-light);
    color: var(--color-white);
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }

  &__clear {
    background: var(--color-red);
    color: var(--color-white);
    border: none;
    margin-left: 22px;
    padding: 8px 18px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
