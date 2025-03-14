<template>
  <div class="red test">
   class: {{ route.params.class }}
   ID: {{ route.params.id }}
  </div>
</template>

<script setup>
const route = useRoute();

console.log("route", route)

</script>

<style lang="scss" scoped>
.red {
  color: blue;
  font-size: 60px;
}
</style>