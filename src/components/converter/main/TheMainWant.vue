<template>
  <div class="item">
    <h2 class="want">
Хочу получить
</h2>
    <div class="valutes-buttons">
      <template
v-for="currency in currencysStore.currencysWant"
:key="currency">
        <the-main-want-valute :valute="currency"/>
      </template>
      <the-main-want-choose/>
    </div>
    <the-main-want-result/>
  </div>
</template>

<script setup lang="ts">
import TheMainWantValute from "@/components/converter/main/TheMainWantValute.vue";
import TheMainWantResult from "@/components/converter/main/TheMainWantResult.vue";
import TheMainWantChoose from "@/components/converter/main/TheMainWantChoose.vue";
import {useCurrencysStore} from "@/stores/currencys";

const currencysStore = useCurrencysStore();
</script>

<style scoped>
.want {
  font-size: 25px;
}

.valutes-buttons {
  display: flex;
  font-size: 20px;
}
</style>