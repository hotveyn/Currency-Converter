<template>
  <div class="result">
    <p class="result__number">81.29</p>
    <p class="rate">1 RUB = 0.02 USD</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.result {
  padding: 0 0 20px 20px;
  margin-top: 10px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #cdcdcd;
  .result__number {
    margin-top: 20px;
    font-weight: 600;
    font-size: 40px;
    border: 0;
    outline: none;
    border: none;
    appearance: none;
  }

  .rate {
    margin-top: 10px;
    font-weight: 400;
    color: #808080;
  }

}
</style>