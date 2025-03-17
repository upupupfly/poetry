<template>
  <aside class="story">
    <div class="head">
      <Search />
      <HideButton @click="handleHide" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import Search from "@/components/search/index.vue";
import HideButton from "@/components/hideButton/index.vue";

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