<script setup>
import { ref } from 'vue'

const props = defineProps({
  details: Object,
  isOpen: Boolean,
  // showFullName: Object,
  // toggleInfo: Function,
})

const emit = defineEmits(['toggle'])
</script>
<template>
  <div class="search-geo-result-item">
    <div class="search-geo-result-item__text">
      <div
        class="search-geo-result-item__label"
        :class="{ 'search-geo-result-item__label--clickable': details.isClickable }"
        @click="emit('toggle')"
      >
        <span class="search-geo-result-item__label--clickable-icon">
          {{ isOpen ? '▲' : '▼' }}
        </span>
        Назва
      </div>
      <span class="search-geo-result-item__text-value--click">{{
        details.name || 'Немає даних'
      }}</span>

      <div v-if="isOpen" class="search-geo-result-item__text">
        Додаткова інформація
        <span class="search-geo-result-item__text-value">{{
          details?.display_name || 'Немає інформації'
        }}</span>
      </div>
      <div class="search-geo-result-item__text">
        Код країни
        <span class="search-geo-result-item__text-value"
          >{{
            `${details?.extratags?.wikipedia ? details.extratags.wikipedia.split(':')[0].trim().toUpperCase() : 'Немає інформації'}: ${details.display_name?.split(' ').pop() || 'Немає інформації'}`
          }}
        </span>
      </div>
      <div class="search-geo-result-item__text">
        Тип
        <span class="search-geo-result-item__text-value">{{
          (details?.extratags?.['name:prefix'] ||
            details.addresstype ||
            details?.extratags?.linked_place) === 'city'
            ? 'Місто'
            : details?.extratags?.['name:prefix'] ||
              details?.addresstype ||
              details?.extratags?.linked_place
        }}</span>
      </div>
      <div class="search-geo-result-item__text">
        Столиця
        <span class="search-geo-result-item__text-value">{{
          details?.extratags?.capital === 'yes' ? 'Так' : 'Ні'
        }}</span>
      </div>
      <div class="search-geo-result-item__text">
        Кількість населення<span class="search-geo-result-item__text-value">{{
          details?.extratags?.population || 'Немає інформації'
        }}</span>
      </div>
      <div class="search-geo-result-item__text">
        Координати
        <span class="search-geo-result-item__text-value">
          {{
            `Довгота:${details?.lon || 'Немає даних'}, Широта:${details?.lat || 'Немає даних'}`
          }}</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.search-geo-result-item {
  display: flex;
  width: 100%;
  font-size: 20px;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  background: var(--color-blue-white);
  border-radius: 4px;

  &__label {
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
    color: var(--color-blue-light);

    &--clickable-icon {
      font-size: large;
    }
  }

  &__text {
    font-size: 20px;
    display: flex;
    font-style: italic;
    font-weight: 500;
    margin: 10px 0 0 20px;
    flex-direction: column;

    &-value {
      font-size: 17px;

      &--click {
        margin-left: 20px;
        font-size: 17px;
      }
    }

    &--info {
      font-size: 17px;
    }
  }
}
</style>
