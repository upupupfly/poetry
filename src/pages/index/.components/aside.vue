<template>
  <aside class="story">
    <AsideMap />
    <div class="head">
      <Search />
      <HideButton @click="handleHide" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import Search from "@/components/search/index.vue";
import HideButton from "@/components/hideButton/index.vue";
import AsideMap from "./map.vue";

const emit = defineEmits(["hide"]);

/**
 * 隐藏侧边栏
 */
const handleHide = () => {
  emit("hide");
};
</script>

<style lang="scss" scoped>
.story {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
  .head {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>