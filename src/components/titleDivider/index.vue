<template>
  <div class="title-divider">
    <div class="td-square" />
    <div class="td-line" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.title-divider {
  position: relative;
  margin-bottom: 35px;
  padding-left: 30px;
  .td-square {
    position: absolute;
    left: 0px;
    top: -5px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    transition: all 1.4s cubic-bezier(1, 0, 0, 1);
    transition-delay: 1.7s;
  }

  .td-line {
    height: 2px;
    transition: all 1.8s cubic-bezier(1, 0, 0, 1);
    transition-delay: 1.5s;
  }
}
</style>
