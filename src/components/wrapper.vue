
<template>
  <div class="content-wrapper">
   <aside class="aside-wrapper">
      <slot name="aside" />
   </aside>
   <section class="columns-wrapper">
    <slot name="columns" />
   </section>
   <main class="main-wrapper">
    <slot/>
   </main>
   <aside class="menu-wrapper">
      <slot name="menu" />
   </aside>
  </div>
</template>

<script setup>
// const visible = ref(true);
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  height: 100%;
}
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