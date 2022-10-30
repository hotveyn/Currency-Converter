<template>
  <div class="item">
    <h2 class="have">У меня есть</h2>
    <div class="valutes-buttons">
      <the-main-have-valute leftborder="true"></the-main-have-valute>
      <the-main-have-valute></the-main-have-valute>
      <the-main-have-valute></the-main-have-valute>
      <the-main-have-valute></the-main-have-valute>
      <the-main-have-choose rightborder="true"></the-main-have-choose>
    </div>
    <the-main-have-enter></the-main-have-enter>
  </div>
</template>

<script setup lang="ts">
import TheMainHaveValute from "@/components/converter/main/TheMainHaveValute.vue"
import TheMainHaveEnter from "@/components/converter/main/TheMainHaveEnter.vue"
import TheMainHaveChoose from "@/components/converter/main/TheMainHaveChoose.vue"
</script>

<style lang="scss">
.valutes-buttons {
  display: flex;
  font-size: 20px;

}
.have{
  font-size: 25px;
}
</style>