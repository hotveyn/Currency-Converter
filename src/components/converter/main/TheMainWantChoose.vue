<template>
  <div
      @click="showHideMenu()"
      class="choose">Выбрать
  </div>
  <div class="menu" v-if="isHideMenu">
    <the-main-want-choose-menu></the-main-want-choose-menu>
  </div>
</template>

<script setup lang="ts">
import TheMainWantChooseMenu from "@/components/converter/main/TheMainWantChooseMenu.vue"
import {ref} from "vue";


let isHideMenu = ref(false);

function showHideMenu() {
  isHideMenu.value = !isHideMenu.value;
}

</script>

<style scoped lang="scss">
.choose {
  margin-top: 20px;
  height: 70px;
  width: 100px;
  border: 1px solid #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: rgb(86, 143, 109);
    color: white;
  }

}

.left {
  border-radius: 10px 0 0 10px;
}

.right {
  border-radius: 0 10px 10px 0;
}

.menu {
  position: relative;
}

</style>