<template>
  <div class="dotted-map">
    <img nuxt-image src="~/assets/images/dotted-map-black-small.png" class="map" >
    <div class="map-pin" />
    <div class="map-label">ChengDu</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.dotted-map {
  width: 180%;
  position: absolute;
  top: 60px;
  right: 0;

  .map {
    width: 100%;
    height: auto;
    opacity: 0.2;
    display: block;
    transition: 0.7s linear;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .map-pin {
    width: 10px;
    height: 10px;
    border-radius: 20px;
    transition: 0.5s ease-in-out 1.4s;
    background-color: #e2514f;
    transform: translateY(0px);
    opacity: 1;
    position: absolute;
    left: 74.5%;
    top: 35%;
  }
  .map-label {
    transform: translate(10px, 10px);
    opacity: 1;
    background-color: #4C4C4C;
    color: #ffffff;
    font-weight: 400;
    line-height: 16px;
    text-transform: uppercase;
    position: absolute;
    left: 74.5%;
    top: 35%;
    display: block;
    padding: 4px 7px;
    border-radius: 4px;
    white-space: nowrap;
    user-select: none; 
  }
}
</style>
