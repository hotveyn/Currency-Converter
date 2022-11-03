<template>
  <div class="enter">
    <label>
      <input
          v-model="converterStore.enterNumber"
          type="number"
          class="enter-number">
    </label>
    <p class="rate">
      {{ valutesStore.valutes[converterStore.have].Nominal }}
      {{ valutesStore.valutes[converterStore.have].CharCode }} =
      {{
        (valutesStore.valutes[converterStore.have].Value /
            valutesStore.valutes[converterStore.want].Value *
            valutesStore.valutes[converterStore.want].Nominal).toFixed(2)
      }}
      {{ valutesStore.valutes[converterStore.want].CharCode }}
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
.enter {
  padding: 0 0 20px 20px;
  margin-top: 10px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #cdcdcd;
  max-width: 500px;
  width: 100%;

  .enter-number {
    margin-top: 20px;
    font-weight: 600;
    font-size: 40px;
    border: 0;
    outline: none;
    border: none;
    appearance: none;
    width: 100%;

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