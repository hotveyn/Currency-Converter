<template>
  <div class="result">
    <label>
      <input
v-model="converterStore.enterNumber"
type="number"
class="enter-number">
    </label>
    <p class="rate">
{{ valutesStore.valutes[converterStore.haveChosen].Nominal }}
      {{ valutesStore.valutes[converterStore.haveChosen].CharCode }} =
      {{
        (valutesStore.valutes[converterStore.haveChosen].Value /
            valutesStore.valutes[converterStore.wantChosen].Value *
            valutesStore.valutes[converterStore.wantChosen].Nominal).toFixed(2)
      }}
      {{ valutesStore.valutes[converterStore.wantChosen].CharCode }}
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

  .enter-number {
    margin-top: 20px;
    font-weight: 600;
    font-size: 40px;
    border: 0;
    outline: none;
    border: none;
    appearance: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .rate {
    margin-top: 10px;
    font-weight: 400;
    color: #808080;
  }

}
</style>