<template>
  <div
      v-if="hideCart()"
      class="card">
    <p class="card__title">
      {{ cardsInfo?.Name }}
    </p>
    <div class="card__change-container">
      <div
          class="card__inc-form"
          :class="{red:diffLessThenZero()}">
        <span class="card__char-code">{{ props.cardsInfo.Nominal }} {{ props.cardsInfo.CharCode }} </span> <span
          class="diffA">({{ getDiffRate() }})</span>
      </div>

      <div class="separate"/>
      <div>
        <span class="card__currency-value">{{ getValueRate() }}</span>
        <span class="card__current-currency">{{ " " + useChosenCurrency.chosenCurrencyObj.CharCode }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" defer>
import {useSearchStore} from "@/stores/searchText";
import {useChosenCurrencyStore} from "@/stores/chosenCurrency";
import {IValute} from "@/interfaces/IValute";

const props = defineProps<{
  cardsInfo: IValute;
}>();
const useChosenCurrency = useChosenCurrencyStore();
const useSearch = useSearchStore();

function diffLessThenZero(): boolean {
  return Number(getDiffRate()) < 0;
}

function getValueRate(): string {
  if (useChosenCurrency.chosenCurrencyObj.CharCode === "RUB") {
    return (props.cardsInfo?.Value).toFixed(2);
  }
  return ((props.cardsInfo?.Value / useChosenCurrency.chosenCurrencyObj.Value) * useChosenCurrency.chosenCurrencyObj.Nominal).toFixed(2);
}

function getDiffRate(): string {
  if (useChosenCurrency.chosenCurrencyObj.CharCode === "RUB") {
    return (props.cardsInfo?.Value - props.cardsInfo?.Previous).toFixed(2);
  }
  return ((props.cardsInfo?.Value - props.cardsInfo?.Previous) /
      (useChosenCurrency.chosenCurrencyObj.Value - useChosenCurrency.chosenCurrencyObj.Previous))
      .toFixed(2);
}

function hideCart(): boolean {
  const text = useSearch.search.trim().toLowerCase();
  if (text !== "") {
    const cardName = props.cardsInfo?.Name.toLowerCase();
    return cardName.search(text) !== -1 && props.cardsInfo?.CharCode !== useChosenCurrency.chosenCurrencyObj.CharCode;
  } else {
    return props.cardsInfo?.CharCode !== useChosenCurrency.chosenCurrencyObj.CharCode;
  }
}

</script>

<style scoped lang="scss">
.card {
  border: 1px solid #cdcdcd;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: calc(16.66% - 13px);
  min-width: 210px;
  height: 150px;
  padding: 20px 0;
  transition: box-shadow 0.2s;
  margin: 10px 5px 5px;

  &:hover {
    box-shadow: 0 0 20px rgba(199, 199, 199, 0.507);
  }

  .card__title {
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-align: center;
    margin-bottom: 15px;
    line-height: 20px;
    width: 180px;
  }

  .card__change-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    gap: 3px;

    .card__inc-form {
      color: rgb(15, 199, 45);
      display: flex;
      gap: 4px;
      align-items: center;

      .diffA {
        font-size: 14px;
      }
    }

    .red {
      color: rgb(204, 39, 27);
    }

    .separate {
      width: 100%;
      height: 1px;
      background: #cdcdcd;
      margin: 5px 0;
    }

    .to {
      font-weight: 500;
    }
  }
}

.hide {
  display: none;
}
</style>