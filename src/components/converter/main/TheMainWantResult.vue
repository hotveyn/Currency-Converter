<template>
  <div class="result">
    <!--Это пиздец-->
    <p class="result__number">{{
        (converterStore.enterNumber *
        (valutesStore.valutes[converterStore.haveChosen].Value /
        valutesStore.valutes[converterStore.wantChosen].Value) /
        valutesStore.valutes[converterStore.wantChosen].Nominal *
        valutesStore.valutes[converterStore.haveChosen].Nominal
        ).toFixed(2)
      }}</p>
    <p class="rate">
      {{ valutesStore.valutes[converterStore.wantChosen].Nominal }}
      {{ valutesStore.valutes[converterStore.wantChosen].CharCode }} =
      {{
        (valutesStore.valutes[converterStore.wantChosen].Value /
            valutesStore.valutes[converterStore.haveChosen].Value *
            valutesStore.valutes[converterStore.haveChosen].Nominal).toFixed(2)
      }}
      {{ valutesStore.valutes[converterStore.haveChosen].CharCode }}</p>
  </div>
</template>

<script setup lang="ts">
import {useConverterStore} from "@/stores/converter";
import {useValutesStore} from "@/stores/valutes";

let valutesStore = useValutesStore();
let converterStore = useConverterStore();
</script>

<style scoped lang="scss">
.result {
  padding: 0 0 20px 20px;
  margin-top: 10px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #cdcdcd;

  .result__number {
    margin-top: 20px;
    font-weight: 600;
    font-size: 40px;
    border: 0;
    outline: none;
    border: none;
    appearance: none;
  }

  .rate {
    margin-top: 10px;
    font-weight: 400;
    color: #808080;
  }

}
</style>