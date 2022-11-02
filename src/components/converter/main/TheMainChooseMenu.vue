<template>
  <div class/>
  <div class="menu">
    <div
        v-for="item in valuteStore.valutes"
        :key="item.ID"
        class="menu__valute"
        @click="updateCurrenciesList(item.CharCode)">
      {{ item.CharCode }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useValutesStore} from "@/stores/valutes";
import {useConverterStore} from "@/stores/converter";
import {useCurrencysStore} from "@/stores/currencys";

const props = defineProps<{
  mod: "have" | "want"
}>();

const valuteStore = useValutesStore();
const converterStore = useConverterStore();
const currencyStore = useCurrencysStore();

function updateCurrenciesList(item: string) {
  if(props.mod === "have"){
    currencyStore.currenciesHave = currencyStore.addNewCurrency(item, currencyStore.currenciesHave);
    converterStore.setHave(item);
  }else{
    currencyStore.currenciesWant = currencyStore.addNewCurrency(item, currencyStore.currenciesWant);
    converterStore.setWant(item);
  }
}
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

  &__valute {
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