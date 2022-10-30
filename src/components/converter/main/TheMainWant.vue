<template>
  <div class="item">
    <h2 class="want">Хочу получить</h2>
    <div class="valutes-buttons">
      <the-main-want-valute standard-valute="RUB" leftborder="true"></the-main-want-valute>
      <the-main-want-valute standard-valute="USD"></the-main-want-valute>
      <the-main-want-valute standard-valute="EUR"></the-main-want-valute>
      <the-main-want-valute standard-valute="JPY"></the-main-want-valute>
      <the-main-want-choose rightborder="true"></the-main-want-choose>
    </div>
    <the-main-want-result></the-main-want-result>
  </div>
</template>

<script setup lang="ts">
import TheMainWantValute from "@/components/converter/main/TheMainWantValute.vue"
import TheMainWantResult from "@/components/converter/main/TheMainWantResult.vue"
import TheMainWantChoose from "@/components/converter/main/TheMainWantChoose.vue"
</script>

<style scoped>
.want{
  font-size: 25px;
}
.valutes-buttons {
  display: flex;
  font-size: 20px;

}
</style>