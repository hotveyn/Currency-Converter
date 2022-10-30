<template>
  <label>
    <input
        v-model.trim="searchStore.search"
        class="search"
        placeholder="Название валюты или ее код"
        type="text"
    />
  </label>
</template>

<script setup lang="ts">
import {useSearchStore} from "@/stores/searchText";

const searchStore = useSearchStore();
</script>

<style lang="scss">
.search {
  margin-top: 25px;
  padding: 7px;
  font-size: 19px;
  width: 100%;
  outline: none;
  border: 2px solid #cdcdcd;
  border-radius: 5px;
}
</style>