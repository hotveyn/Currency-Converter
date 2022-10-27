<script setup lang="ts">
import TheMainButton from "@/components/main/TheMainButton.vue"
import TheMainSeacrh from "@/components/main/TheMainSearch.vue"
import TheMainCards from "@/components/main/TheMainCards.vue"
</script>

<template>
  <main class="main">
    <div class="currency-list">
      <h2>Список всех валют</h2>
      <the-main-button></the-main-button>
    </div>
    <the-main-seacrh></the-main-seacrh>
    <the-main-cards></the-main-cards>
  </main>
</template>


<style lang="scss">
.main {
  margin-top: 50px;
}

.currency-list {
  display: flex;
  align-items: center;

  h2 {
    font-size: 25px;
    font-style: italic;
  }
}
</style>