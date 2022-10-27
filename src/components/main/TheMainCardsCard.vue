<template>
  <div class="card">
    <p class="card__title">{{ cardsInfo.Name }}</p>
    <div class="card__change-container">
      <div class="card__inc-form">
        <p :ref="diff" :class="{red:ifDiffLessThenZero()}">
          <span class="card__char-code">{{ cardsInfo.CharCode }} </span> <span
            class="diffA">({{ (cardsInfo.Value - cardsInfo.Previous).toFixed(2) }})</span></p>
        <div class="separate"></div>
      </div>
      <div>
        <span class="card__currency-value">{{ cardsInfo.Value.toFixed(2) }}</span>
        <span class="card__current-currency"> RUB</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" defer>

const props = defineProps({
  cardsInfo: Object,
  diff: Number
});

function ifDiffLessThenZero() {
  if (props.cardsInfo!.Value - props.cardsInfo!.Previous < 0) {
    return true;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    gap: 3px;

    .card__inc-form {
      color: rgb(15, 199, 45);
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