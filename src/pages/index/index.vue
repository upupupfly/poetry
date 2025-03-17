<template>
    <Wrapper
      v-model:aside-visible="asideVisible"
      v-model:columns-visible="columnsVisible"
      v-model:menu-visible="menuVisible"
    >
      <template #aside>
        <Aside @hide="asideVisible = false" />
      </template>

      <template #columns>
        <div style="height: 100%;background-color: brown;">columns</div>
      </template>

      <template #menu>
        <div style="height: 100%;background-color: blueviolet;">menu</div>
      </template>
      <div style="height: 100%;background-color: #eeeeee;">
        <div style="margin-top: 30px;" @click="asideVisible = !asideVisible">asideVisibleasideVisibleasideVisible</div>
        <div style="margin-top: 30px;" @click="columnsVisible = !columnsVisible">columnsVisiblecolumnsVisiblecolumnsVisible</div>
        <div style="margin-top: 30px;" @click="menuVisible = !menuVisible">menuVisiblemenuVisiblemenuVisible</div>
        <Iconfont icon="os-icon-search" />
      </div>
    </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from "@/components/wrapper/index.vue";
import Aside from "./.components/aside.vue";

const asideVisible = ref(true);
const columnsVisible = ref(false);
const menuVisible = ref(false);

</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}

.aside-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 100%;
  transition: all 0.4s ease-in-out;
  background-color: #f5f5f5;
  transform: translateX(-100%);
  z-index: 2;

  &.active {
    transform: translateX(0);
  }
}

.columns-wrapper {
  position: absolute;
  top: 0;
  width: 200px;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  background-color: #f5f5f5;
  transform: translateX(-100%);
  z-index: 1;

  &.active {
    transform: translateX(0);
  }
}

.menu-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  background-color: #f5f5f5;
  z-index: 1;
  transform: translateX(100%);

  &.active {
    transform: translateX(0);
  }
}

.main-wrapper {
  width: 100%;
  background-color: #bd9090;
  transition: padding 0.4s ease-in-out;
}
</style>