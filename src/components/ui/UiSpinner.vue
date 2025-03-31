<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'var(--color-white)',
  },
  size: {
    type: String,
    default: '3px',
  },
})

const spinnerStyle = computed(() => ({
  color: props.color,
  fontSize: props.size,
}))
</script>
<template>
  <div class="ui-spinner">
    <span class="ui-spinner__loader" :style="spinnerStyle"></span>
  </div>
</template>

<style scoped>
.ui-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-spinner__loader {
  font-size: 3px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow:
      0 -3em 0 0.2em,
      2em -2em 0 0em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 0;
  }
  12.5% {
    box-shadow:
      0 -3em 0 0,
      2em -2em 0 0.2em,
      3em 0 0 0,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }
  25% {
    box-shadow:
      0 -3em 0 -0.5em,
      2em -2em 0 0,
      3em 0 0 0.2em,
      2em 2em 0 0,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0em 0 0,
      2em 2em 0 0.2em,
      0 3em 0 0em,
      -2em 2em 0 -1em,
      -3em 0em 0 -1em,
      -2em -2em 0 -1em;
  }
  50% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 0em,
      0 3em 0 0.2em,
      -2em 2em 0 0,
      -3em 0em 0 -1em,
      -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 0,
      -2em 2em 0 0.2em,
      -3em 0 0 0,
      -2em -2em 0 -1em;
  }
  75% {
    box-shadow:
      0em -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0em 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 0,
      -3em 0em 0 0.2em,
      -2em -2em 0 0;
  }
  87.5% {
    box-shadow:
      0em -3em 0 0,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 0,
      -3em 0em 0 0,
      -2em -2em 0 0.2em;
  }
}
</style>
