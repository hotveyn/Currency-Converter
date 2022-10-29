<template>
  <div class="card" :class="{hide:searchToCards()}">
    <p  class="card__title">{{ cardsInfo.Name }}</p>
    <div class="card__change-container">
      <div class="card__inc-form" :class="{red:diffLessThenZero()}">
          <span class="card__char-code">{{ cardsInfo.CharCode }} </span> <span
            class="diffA">({{ (cardsInfo.Value - cardsInfo.Previous).toFixed(2) }})</span>
      </div>

      <div class="separate"></div>
      <div>
        <span class="card__currency-value">{{ cardsInfo.Value.toFixed(2) }}</span>
        <span class="card__current-currency"> RUB</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" defer>
import {useSearchStore} from "@/stores/searchText";

let useSearch = useSearchStore();

const props = defineProps({
  cardsInfo: Object,
});

function diffLessThenZero() {
  if (props.cardsInfo!.Value - props.cardsInfo!.Previous < 0) {
    return true;
  }
}

function searchToCards(){
  let text = useSearch.search.trim().toLowerCase();
  if(text !==""){
    return props.cardsInfo!.Name.search(text) === -1;
  }else{
    return false;
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
      .diffA{
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