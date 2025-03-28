<template>
  <aside class="story">
    <AsideMap />
    <div class="head">
      <Search />
      <HideButton @click="handleHide" />
    </div>
    <div class="container">
      <h1 class="title">
        Soulseeker
      </h1>
      <h2 class="subtitle">
        Photography is my passion.
      </h2>
      <TitleDivider />
    </div>
  </aside>
</template>

<script setup lang="ts">
import AsideMap from "./map.vue";
import Search from "~/components/search/index.vue";
import HideButton from "~/components/hideButton/index.vue";
import TitleDivider from "~/components/titleDivider/index.vue";

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
  .container {
    .title {
      font-size: 18px;
      color: #191919;
    }
    .subtitle {
      font-size: 22px;
      color: #999999;
      text-transform: uppercase;
      line-height: 1.1;
      margin-top: 5px;
    }
  }
}
</style>
