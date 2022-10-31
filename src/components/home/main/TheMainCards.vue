<template>
  <div class="cards">
    <theMainCardsCard
        v-for="item in valutesStore.valutes"
        :key="item.ID"
        :cards-info="item"
    />
  </div>
</template>

<script setup lang="ts" defer>
import TheMainCardsCard from "@/components/home/main/TheMainCardsCard.vue";
import {useValutesStore} from "@/stores/valutes";

const valutesStore = useValutesStore();

async function getCurrencys(): Promise<void> {
  const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const json = await res.json();
  for (const key in json.Valute) {
    valutesStore.addNewValute(key.trim(), json.Valute[key]);
  }
}

getCurrencys();
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 33px auto;
}
</style>
