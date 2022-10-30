<template>
  <div class="item">
    <h2 class="have">У меня есть</h2>
    <div class="valutes-buttons">
      <template v-for="currency in currencysStore.currencysHave" :key="currency">
        <the-main-have-valute :valute="currency"></the-main-have-valute>
      </template>
      <the-main-have-choose></the-main-have-choose>
    </div>
    <the-main-have-enter></the-main-have-enter>
  </div>
</template>

<script setup lang="ts">
import TheMainHaveValute from "@/components/converter/main/TheMainHaveValute.vue"
import TheMainHaveEnter from "@/components/converter/main/TheMainHaveEnter.vue"
import TheMainHaveChoose from "@/components/converter/main/TheMainHaveChoose.vue"
import {useCurrencysStore} from "@/stores/currencys";

let currencysStore = useCurrencysStore();
</script>

<style scoped lang="scss">
.valutes-buttons {
  display: flex;
  font-size: 20px;

}

.have {
  font-size: 25px;
}
</style>