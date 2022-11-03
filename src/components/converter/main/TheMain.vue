<template>
  <div class="converter">
    <TheMainConver mod="have"/>
    <img
        @click="reverse()"
        class="reverse"
        src="@/img/reverse.svg"
        alt="reverse">
    <TheMainConver mod="want"/>
  </div>
</template>

<script setup lang="ts">
import TheMainConver from "@/components/converter/main/TheMainConver.vue";
import {useConverterStore} from "@/stores/converter";
import {useCurrencysStore} from "@/stores/currencys";

let converterStore = useConverterStore();
let currencysStore = useCurrencysStore();

function reverse(){
  let valuteChanger = converterStore.have;
  converterStore.have = converterStore.want;
  converterStore.want = valuteChanger

  currencysStore.currenciesHave = currencysStore.addNewCurrency(converterStore.have, currencysStore.currenciesHave)
  currencysStore.currenciesWant = currencysStore.addNewCurrency(converterStore.want, currencysStore.currenciesWant)
}

</script>

<style lang="scss">
.reverse {
  width: 80px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.converter {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 5px;
  align-items: center;
  margin: 50px auto 0;
}

@media screen and (max-width: 1250px) {
  .converter {
    flex-direction: column;
    gap: 20px;
  }
  .reverse{
    transform: rotate(90deg);
  }
}
@media screen and (max-width: 700px){
  .reverse{
    width: calc(60px + (80 - 60) * ((100vw - 320px) / (700 - 320)));
  }
}
</style>