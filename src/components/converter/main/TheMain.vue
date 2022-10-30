<template>
  <div class="converter">
    <the-main-have></the-main-have>
    <img class="reverse" src="@/img/reverse.svg" alt="reverse">
    <the-main-want></the-main-want>
  </div>
</template>

<script setup lang="ts">
import TheMainHave from "@/components/converter/main/TheMainHave.vue"
import TheMainWant from "@/components/converter/main/TheMainWant.vue"
</script>

<style lang="scss">
.reverse {
  width: 100px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.converter {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  align-items: center;
  margin: 50px auto 0;
}
</style>