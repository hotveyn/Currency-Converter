<template>
  <div class="item">
    <h2 class="have">
У меня есть
</h2>
    <div class="valutes-buttons">
      <div
          v-for="currency in currencysStore.currencysHave"
          :key="currency"
      >
        <the-main-have-valute :valute="currency"/>
      </div>
      <the-main-have-choose/>
    </div>
    <the-main-have-enter/>
  </div>
</template>

<script setup lang="ts">
import TheMainHaveValute from "@/components/converter/main/TheMainHaveValute.vue";
import TheMainHaveEnter from "@/components/converter/main/TheMainHaveEnter.vue";
import TheMainHaveChoose from "@/components/converter/main/TheMainHaveChoose.vue";
import {useCurrencysStore} from "@/stores/currencys";

const currencysStore = useCurrencysStore();
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