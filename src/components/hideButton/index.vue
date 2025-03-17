<template>
  <button  class="hide-button">
    <span />
    <span />
    <span />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hide-button {
  position: relative;
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
  background: none;
  border: none;
  transition-delay: 0s;
  cursor: pointer;

  > span {
    background-color: #191919;
    opacity: 0;
    display: block;
    width: 16px;
    height: 2px;
    margin-bottom: 4px;
    transition: all 0.7s ease;
    transition-delay: 0s;

    &:first-child {
      opacity: 1;
      transition: all 100ms linear;
      transform: rotate(90deg) translate(8px, 1px);
    }

    &:last-child {
      opacity: 1;
      transition: all 100ms linear;
      transform: translate(-1px, -4px);
    }
  }

  &:hover {
    transform: rotate(0deg);
    > span {
      opacity: 1;
    }
    > span:first-child {
      transform: rotate(-45deg) translate(-5px,-1px) scaleX(0.5);
    }
    > span:last-child {
      transform: rotate(45deg) translate(-5px,1px) scaleX(0.5);
    }
  }
}
</style>