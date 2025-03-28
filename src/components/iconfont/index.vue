<template>
  <svg
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import type { PropsDto } from "./types";

const props = withDefaults(defineProps<PropsDto>(), {
  icon: undefined,
});

const iconName = computed(() => {
  return `#icon-${props.icon}`;
});
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
