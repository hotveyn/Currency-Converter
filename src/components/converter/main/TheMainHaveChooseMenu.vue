<template>
  <div class/>
  <div class="menu">
    <div
        v-for="item in valuteStore.valutes"
        :key="item.ID"
        class="menu__valute"
@click="renameMe(item)">
      {{ item.CharCode }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useValutesStore} from "@/stores/valutes";
import {useConverterStore} from "@/stores/converter";
import {useCurrencysStore} from "@/stores/currencys";
import {IValute} from "@/interfaces/IValute";

const valuteStore = useValutesStore();
const converterStore = useConverterStore();
const currencyStore = useCurrencysStore();

//fixme: rename me
function renameMe(item: IValute) {
  currencyStore.setHave(item.CharCode);
  currencyStore.addNewCurrencyHave(converterStore.haveChosen);
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