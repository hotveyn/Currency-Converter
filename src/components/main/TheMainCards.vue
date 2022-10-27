<template>
  <div class="cards">
    <the-main-cards-card :cardsInfo="item" v-for="item in valutesStore.valutes"></the-main-cards-card>
  </div>
</template>

<script setup lang="ts" defer>
import TheMainCardsCard from "@/components/main/TheMainCardsCard.vue"
import {useValutesStore} from "../../stores/valutes";

const valutesStore = useValutesStore();

async function getCurrencys(){
  const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const json = await res.json();
  for(let key in json.Valute){
    valutesStore.addValute(
        json.Valute[key].ID,
        json.Valute[key].NumCode,
        json.Valute[key].CharCode,
        json.Valute[key].Nominal,
        json.Valute[key].Name,
        json.Valute[key].Value,
        json.Valute[key].Previous,
    )
  }
}
getCurrencys();

</script>

<style scoped lang="scss">
.cards{
  display: flex;
  flex-wrap: wrap;
  margin: 33px auto;
}
</style>