
<template>
  <div class="aside-wrapper" :class="{ active: visible }">
   11122
  </div>
</template>

<script setup>
const visible = ref(true);
</script>

<style lang="scss" scoped>
.aside-wrapper {
  width: 600px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  transition: all 0.4s ease-in-out;
  transition-delay: 0s;
  overflow: hidden;
  background-color: #f5f5f5;
  &.active {
    
  }
}
</style>