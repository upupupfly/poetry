<template>
  <span class="search-wrapper">
    <div
      class="search-form"
      :class="{ active: visible }"
    >
      <Iconfont
        icon="search"
        class="search-icon"
      />
      <input
        ref="inputRef"
        v-model="keywords"
        class="search-input"
        placeholder="搜索..."
      >
      <button
        class="search-btn"
        @click="handleSearch"
      >搜索</button>
      <button
        class="close-btn"
        @click="visible = false"
      >
        <Iconfont icon="close" />
      </button>

    </div>
    <button
      class="search-trigger"
      @click="handleShow"
    >
      <Iconfont
        icon="search"
        class="search-icon"
      />
      <span>search</span>
    </button>
  </span>
</template>

<script setup lang="ts">
const visible = ref(false);
const keywords = ref("");
const inputRef = ref<HTMLInputElement>();

/**
 * 显示搜索栏
 */
const handleShow = () => {
  inputRef.value?.focus();
  visible.value = true;
};

/**
 * 搜索
 */
const handleSearch = () => {
  // Todo点击搜索后带着搜索关键词跳转搜索结果页面
  visible.value = false;
};
</script>

<style scoped lang="scss">
.search-wrapper {
  font-weight: 400;
}
.search-form {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  // 冗余5px的阴影
  transform: translateY(-65px);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  background-color: #ffffff;

  &.active {
    transform: translateY(0px);
  }
  .search-icon {
    color: #4c4c4c;
  }
  .search-input {
    flex: 1;
    width: 200px;
    height: 24px;
    margin: 0 15px;
    border: none;
    outline: none;
  }
  .search-btn {
    flex: none;
    height: 24px;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background: #111111;
    border-style: none;
    padding: 3px 12px;
    border-radius: 6px;
    cursor: pointer;
  }
  .close-btn {
    flex: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 12px;
    color: #4c4c4c;
  }
}
.search-trigger {
  color: #4c4c4c;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  cursor: pointer;
  > span {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    text-transform: uppercase;
    font-family: "Unica One", sans-serif;
  }
  .search-icon {
    vertical-align: -2px;
  }
}
</style>
