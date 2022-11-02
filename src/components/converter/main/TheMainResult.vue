<template>
  <div class="result">
    <!--Это пиздец-->
    <p class="result__number">
{{
        (converterStore.enterNumber *
        (valutesStore.valutes[converterStore.have].Value /
        valutesStore.valutes[converterStore.want].Value) *
        valutesStore.valutes[converterStore.want].Nominal /
        valutesStore.valutes[converterStore.have].Nominal
        ).toFixed(2)
      }}
</p>
    <p class="rate">
      {{ valutesStore.valutes[converterStore.want].Nominal }}
      {{ valutesStore.valutes[converterStore.want].CharCode }} =
      {{
        (valutesStore.valutes[converterStore.want].Value /
            valutesStore.valutes[converterStore.have].Value *
            valutesStore.valutes[converterStore.have].Nominal).toFixed(2)
      }}
      {{ valutesStore.valutes[converterStore.have].CharCode }}
</p>
  </div>
</template>

<script setup lang="ts">
import {useConverterStore} from "@/stores/converter";
import {useValutesStore} from "@/stores/valutes";

const valutesStore = useValutesStore();
const converterStore = useConverterStore();
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