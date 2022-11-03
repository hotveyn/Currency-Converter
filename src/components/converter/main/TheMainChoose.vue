<template>
  <div
      class="choose"
      :class="{choosing: isHideMenu}"
      @click="showHideMenu()">
    <p>Выбор</p>
  </div>
  <div
      v-if="isHideMenu"
      class="menu">
    <TheMainChooseMenu
        v-if="props.mod === 'have'"
        mod="have"/>
    <TheMainChooseMenu
        v-else
        mod="want"/>
  </div>
</template>

<script setup lang="ts">
import TheMainChooseMenu from "@/components/converter/main/TheMainChooseMenu.vue";
import {ref} from "vue";

const props = defineProps<{
  mod: "have" | "want"
}>();

const isHideMenu = ref<boolean>(false);

function showHideMenu() {
  isHideMenu.value = !isHideMenu.value;
}

</script>

<style scoped lang="scss">
.choose {
  margin-top: 20px;
  height: 50px;
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
.choosing{
  background-color: rgb(86, 143, 109);
  color: white;
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
@media (max-width: 370px){
  .choose{
    font-size: 16px;
  }
}
</style>