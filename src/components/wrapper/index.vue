<template>
  <!-- 主要页面容器 -->
  <div class="content-wrapper">
    <aside v-if="$slots.aside" class="aside-wrapper" :class="{ active: asideVisible }" :style="asideStyle">
      <slot name="aside" />
    </aside>
    <section v-if="$slots.columns" class="columns-wrapper" :class="{ active: columnsVisible }" :style="columnsStyle">
      <slot name="columns" />
    </section>
    <main class="main-wrapper" :style="mainStyle">
      <slot />
    </main>
    <aside v-if="$slots.menu" class="menu-wrapper" :class="{ active: menuVisible }" :style="menuStyle">
      <slot name="menu" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { PropsDto } from "./types";

const props = withDefaults(defineProps<PropsDto>(), {
  asideWidth: 600,
  columnsWidth: 300,
  menuWidth: 200,
  asideVisible: false,
  columnsVisible: false,
  menuVisible: false,
});
const slotMap = useSlots();
const asideVisible = defineModel<boolean>("asideVisible");
const columnsVisible = defineModel<boolean>("columnsVisible");
const menuVisible = defineModel<boolean>("menuVisible");
  
const asideStyle = computed(() => {
  return {
    width: props.asideWidth + "px",
  };
});

const columnsStyle = computed(() => {
  const gapValue = 10;
  return {
    width: props.columnsWidth + "px",
    left: asideVisible.value ? (props.asideWidth - gapValue) + "px" : '0'
  };
});

const mainStyle = computed(() => {
  const asideW = slotMap.aside && asideVisible.value ? props.asideWidth : 0;
  const columnsW = (slotMap.columns && columnsVisible.value) ? props.columnsWidth : 0;

  const leftWidth = (asideW + columnsW) + "px";
  const rightWidth = props.menuWidth + "px";
  return {
    paddingLeft: leftWidth,
    paddingRight: slotMap.menu && menuVisible.value ? rightWidth : "0",
  };
});

const menuStyle = computed(() => {
  return {
    width: props.menuWidth + "px",
  };
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.aside-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  transform: translateX(-100%);
  z-index: 2;
  background: #ffffff;

  &.active {
    transform: translateX(0);
  }
}

.columns-wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  transition: transform 0.4s ease-in-out, left 0.4s ease-in-out;
  transform: translateX(-100%);
  z-index: 1;
  background: #ffffff;

  &.active {
    transform: translateX(0);
  }
}

.menu-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  z-index: 1;
  transform: translateX(100%);
  background: #ffffff;

  &.active {
    transform: translateX(0);
  }
}

.main-wrapper {
  width: 100%;
  transition: padding 0.4s ease-in-out;
  background: #ffffff;
}
</style>