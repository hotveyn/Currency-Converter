<template>
  <div class></div>
  <div class="menu">
    <div
        @click="converterStore.changeHaveChosen(item.CharCode),
        currencysStore.addNewCurrencyHave(converterStore.haveChosen)"
        class="menu__valute"
        v-for="item in valutesStore.valutes" :key="item">
      {{ item.CharCode }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useValutesStore} from "@/stores/valutes";
import {useConverterStore} from "@/stores/converter";
import {useCurrencysStore} from "@/stores/currencys";

let valutesStore = useValutesStore();
let converterStore = useConverterStore();
let currencysStore = useCurrencysStore();


</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  z-index: 10;
  left: 0;
  border-radius: 15px;
  bottom: -10px;
  box-shadow: 0 8px 40px #0003;
  padding: 20px;
  grid-template-columns: repeat(3, 40px);
  text-overflow: ellipsis;
  overflow: hidden;
  gap: 8px 20px;
  background: white;
  transform: translate(-100%, 100%);
  display: grid;

  .menu__valute {
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;
    display: flex;
    gap: 5px;

    &:hover {
      color: rgb(15, 199, 45);
    }
  }
}
</style>