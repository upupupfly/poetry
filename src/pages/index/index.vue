<template>
  <div class="content-wrapper">
    <aside class="aside-wrapper" :class="{ active: visible  }">
      <div>
        visible:{{ visible }}
      </div>
      <button @click="visible = !visible">X</button>
      <div>
        asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思asd a阿斯顿阿斯顿昂动爱思
      </div>
    </aside>
    <div class="columns-wrapper"  :class="{ active: columnsVisible  }" :style="{ left: visible ? '600px' : '0' }">
      <button @click="columnsVisible = !columnsVisible">X</button>
    </div>
    <main class="main-wrapper" :style="{ paddingLeft: visible ? paddingLeft : '0', paddingRight: menuVisible ? '200px' : '0' }">
      测试文本asdasdddf212412412fasf测试文本asdasdddf212412412fasf测试文本asdasdddf212412412fasf测试文本asdasdddf212412412fasf
    </main>
    <div class="menu-wrapper"  :class="{ active: menuVisible  }">
      <div>
        menuVisible:{{ menuVisible }}
      </div>
      <button @click="menuVisible = !menuVisible">X</button>
    </div>
  </div>
</template>

<script setup>
// import Aside from "./.components/aside.vue";
const visible = ref(true);
const columnsVisible = ref(true);
const menuVisible = ref(true);
const paddingLeft = computed(() => {
  const asideW = visible.value ? 600 : 0;
  const columnsW = columnsVisible.value ? 200 : 0;
  return (asideW + columnsW) + "px";
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
  width: 600px;
  height: 100%;
  transition: transform 0.4s ease-in-out;
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