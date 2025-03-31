<script setup>
import { ref } from 'vue'
import { API_LOCATION } from '@/services/api-location'
import UiSpinner from './UiSpinner.vue'
import SearchGeoHeader from '../SearchGeoHeader.vue'
import SearchGeoResult from '../SearchGeoResult.vue'

const locations = ref([])
const errorMessage = ref('')
const isLoading = ref(false)
const resultsLimit = ref(10)

const searchLocation = async ({ query, countryCode }) => {
  errorMessage.value = ''
  locations.value = []
  isLoading.value = true

  if (!query || !query.trim()) {
    isLoading.value = false
    return
  }

  const countryCodePattern = /^[A-Za-z]{2}$/
  if (countryCode && !countryCodePattern.test(countryCode.trim())) {
    errorMessage.value =
      'Невірний код країни! Код країни має бути дволітерним і англійськими літерами.'
    isLoading.value = false
    return
  }

  try {
    console.log('Код країни:', countryCode)
    const results = await API_LOCATION.searchLocation(query, countryCode)

    if (results.length === 0) {
      errorMessage.value = countryCode.trim()
        ? 'Нічого не знайдено для вказаного коду країни.'
        : 'Нічого не знайдено. Перевірте чи правильно ввели назву'
    } else {
      locations.value = results
    }
  } catch (error) {
    errorMessage.value = "Помилка!!! перевірте з'єднання з інтернетом та спробуйте ще раз."
  } finally {
    isLoading.value = false
  }
}

const clearResult = () => {
  locations.value = []
  errorMessage.value = ''
}

// const locationDetails = computed(() => {
//   return (locations.value || []).slice(0, resultsLimit.value).map((location, index) => {
//     if (!location) return []
//     return [
//       {
//         label: 'Назва',
//         value: location.name || 'Немає даних',
//         isClickable: true,
//         index,
//       },
//       showFullName.value[index] && {
//         label: 'Додаткова інформація',
//         value: location.display_name || 'Немає інформації',
//       },
//       {
//         label: 'Код країни',
//         value: `${location.extratags?.wikipedia ? location.extratags.wikipedia.split(':')[0].trim().toUpperCase() : 'Немає інформації'}: ${location.display_name?.split(' ').pop() || 'Немає інформації'}`,
//       },
//       {
//         label: 'Тип',
//         value:
//           (location.extratags?.['name:prefix'] ||
//             location.addresstype ||
//             location.extratags.linked_place) === 'city'
//             ? 'Місто'
//             : location.extratags['name:prefix'] ||
//               location.addresstype ||
//               location.extratags?.linked_place ||
//               'Немає інформації',
//       },
//       { label: 'Столиця', value: location.extratags?.capital === 'yes' ? 'Так' : 'Ні' },
//       {
//         label: 'Кількість населення',
//         value: location.extratags?.population || 'Немає інформації',
//       },
//       {
//         label: 'Координати',
//         value: `Довгота:${location.lon || 'Немає даних'}, Широта:${location.lat || 'Немає даних'}`,
//       },
//     ].filter(Boolean)
//   })
// })
setTimeout(() => {
  resultsLimit.value = 100
}, 2000)
</script>

<template>
  <div class="search-geo">
    <SearchGeoHeader
      v-model="resultsLimit"
      @action:search="searchLocation"
      @action:clear="clearResult"
    />
    <div v-if="isLoading" class="search-geo__loader">
      <UiSpinner color="black" size="10px"></UiSpinner>
    </div>
    <div v-if="errorMessage" class="search-geo__error">{{ errorMessage }}</div>
    <SearchGeoResult
      v-if="locations.length > 0"
      :locations="locations"
      :results-limit="resultsLimit"
    ></SearchGeoResult>
    <!-- <div v-if="locations.length > 0" class="search-geo__result">
      <div class="search-geo__result-info">
        <div class="search-geo__result-info-text">
          Кількість знайдених місць :
          <span class="search-geo__result-info-length">{{ locations.length }}</span>
        </div>
        <div class="search-geo__result-info-text">
          Показано :
          <span class="search-geo__result-info-length">{{
            resultsLimit > locations.length ? locations.length : resultsLimit
          }}</span>
        </div>
      </div>
      <div
        v-for="(location, index) in locationDetails"
        :key="index"
        class="search-geo__result-item"
      >
        <div v-for="(detail, index) in location" :key="index" class="search-geo__result-text">
          <div
            class="search-geo__result-label"
            :class="{ 'search-geo__result-label--clickable': detail.isClickable }"
            @click="detail.isClickable ? toggleInfo(detail.index) : null"
          >
            <span v-if="detail.isClickable" class="search-geo__result-label--clickable-icon">
              {{ showFullName[detail.index] ? '▲' : '▼' }}
            </span>
            {{ detail.label }}
          </div>
          <div class="search-geo__result-text--info">{{ detail.value }}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.search-geo {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__loader {
    margin-top: 100px;
  }

  &__error {
    color: var(--color-red);
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
  }

  // &__result {
  //   display: flex;
  //   width: 100%;
  //   border-radius: 4px;
  //   font-size: 20px;
  //   flex-direction: column;

  //   &-info {
  //     display: flex;
  //     flex-direction: column;

  //     &-text {
  //       display: flex;
  //     }

  //     &-length {
  //       display: flex;
  //       font-weight: bold;
  //       margin-left: 10px;
  //     }
  //   }

  //   &-limit {
  //     margin: 10px 0;
  //     font-size: 16px;
  //   }

  //   &-item {
  //     margin: 10px 0;
  //     padding: 10px;
  //     background: var(--color-blue-white);
  //     border-radius: 4px;
  //   }

  //   &-text {
  //     font-size: 20px;
  //     font-style: italic;
  //     margin-left: 20px;

  //     &--info {
  //       font-size: 16px;
  //     }
  //   }

  //   &-label--clickable {
  //     cursor: pointer;
  //     color: var(--color-blue-light);

  //     &-icon {
  //       font-size: 10px;
  //     }
  //   }
  // }
}
</style>
