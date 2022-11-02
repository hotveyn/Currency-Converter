<template>
  <div class="currency-list__button-menu">
    <button
        class="currency-list__button"
        @click="showMenu()">
      <span class="currency-name">{{ chosenCurrencyStore.chosenCurrency }}</span>
    </button>
    <TheMainButtonMenu v-if="isShowMenu"/>
  </div>
</template>

<script setup lang="ts">
import TheMainButtonMenu from "@/components/home/main/TheMainButtonMenu.vue";
import {ref} from "vue";
import {useChosenCurrencyStore} from "@/stores/chosenCurrency";

const chosenCurrencyStore = useChosenCurrencyStore();
const isShowMenu = ref(false);

function showMenu(): void {
  isShowMenu.value = !(isShowMenu.value);
}
</script>

<style lang="scss">

.currency-list__button-menu {
  position: relative;
  margin-left: 30px;

  .currency-list__button {
    padding: 7px 0;
    width: 100px;
    font-weight: bold;
    border: 0 solid;
    border-radius: 15px;
    background: rgb(32, 221, 62);
    background: linear-gradient(
            90deg,
            rgb(32, 221, 64) 0%,
            rgb(233, 45, 32) 100%
    );
    font-family: "Nunito", sans-serif;
    cursor: pointer;

    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
              90deg,
              rgb(32, 221, 64) 0%,
              rgb(233, 45, 32) 100%
      );
      transition: opacity 0.3s;
      filter: blur(10px);
    }

    .currency-name {
      color: rgb(255, 255, 255);
    }

  }
}

</style>