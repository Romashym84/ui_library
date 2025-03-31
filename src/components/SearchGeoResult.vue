<script setup>
import { ref } from 'vue'
import SearchGeoResultItem from './SearchGeoResultItem.vue'

const props = defineProps({
  locations: Array,
  resultsLimit: Number,
})
const showFullName = ref({})

console.log(props.resultsLimit, props.locations)

const toggleInfo = (index) => {
  if (props.locations[index].length === 0) {
    showFullName.value[index] = {}
  } else {
    showFullName.value[index] = !showFullName.value[index]
  }
}
</script>
<template>
  <div v-if="locations.length > 0" class="search-geo__result">
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
    <SearchGeoResultItem
      v-for="(location, index) in locations.slice(0, resultsLimit)"
      :key="index"
      :details="location"
      :isOpen="showFullName[index] === true"
      @toggle="toggleInfo(index)"
    ></SearchGeoResultItem>
  </div>
</template>
<style scoped lang="scss">
.search-geo__result {
  display: flex;
  width: 100%;
  border-radius: 4px;
  font-size: 20px;
  flex-direction: column;

  &-item {
    margin: 10px 0;
    padding: 10px;
    background: var(--color-blue-white);
    border-radius: 4px;
  }

  &-text {
    font-size: 20px;
    font-style: italic;
    margin-left: 20px;

    &--info {
      font-size: 16px;
    }
  }

  &-label--clickable {
    cursor: pointer;
    color: var(--color-blue-light);

    &-icon {
      font-size: 10px;
    }
  }
}
</style>
