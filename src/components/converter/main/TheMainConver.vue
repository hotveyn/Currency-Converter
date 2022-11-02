<template>
  <div class="item">
    <h2
        v-if="props.mod === 'have'"
        class="item__title">
      У меня есть
    </h2>
    <h2
        v-else
        class="item__title">
      Хочу получить
    </h2>
    <div
        v-if="props.mod === 'have'"
        class="valutes-buttons">
      <TheMainValute
          v-for="currency in currencysStore.currenciesHave"
          :key="currency"
          :valute="currency"
          mod="have"/>
      <theMainChoose mod="have"/>
    </div>
    <div
        v-if="props.mod === 'want'"
        class="valutes-buttons">
      <TheMainValute
          v-for="currency in currencysStore.currenciesWant"
          :key="currency"
          :valute="currency"
          mod="want"/>
      <theMainChoose mod="want"/>
    </div>
    <theMainEnter v-if=" props.mod==='have'"/>
    <TheMainResult v-else/>
  </div>
</template>

<script setup lang="ts">
import TheMainValute from "@/components/converter/main/TheMainValute.vue";
import TheMainEnter from "@/components/converter/main/TheMainEnter.vue";
import TheMainChoose from "@/components/converter/main/TheMainChoose.vue";
import TheMainResult from "@/components/converter/main/TheMainResult.vue";
import {useCurrencysStore} from "@/stores/currencys";

const props = defineProps<{
  mod: "have" | "want"
}>();

const currencysStore = useCurrencysStore();
</script>

<style scoped lang="scss">
.valutes-buttons {
  display: flex;
  font-size: 20px;

}

.item__title {
  font-size: 25px;
}
</style>