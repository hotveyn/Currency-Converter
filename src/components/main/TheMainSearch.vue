<template>
  <label>
    <input
        v-model.trim="searchText"
        @change="changeText"
        class="search"
        placeholder="Название валюты или ее код"
        type="text"
    />
  </label>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

let searchText = ref("")

</script>

<style lang="scss">
.search{
  margin-top: 25px;
  padding: 7px;
  font-size: 19px;
  width: 100%;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
}
</style>