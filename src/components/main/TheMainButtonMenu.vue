<template>
  <div class="currency-list__menu menu">
    <div class="menu__valute" v-for="item in valutesStore.valutes">{{item.CharCode}}</div>
  </div>
</template>

<script setup lang="ts">
import {useValutesStore} from "../../stores/valutes.js";

const valutesStore = useValutesStore();

</script>

<style lang="scss">

.currency-list__menu {
  position: absolute;
  z-index: 10;
  left: 0;
  border-radius: 15px;
  bottom: -10px;
  box-shadow: 0 8px 40px #0003;
  padding: 20px;
  grid-template-columns: repeat(3, 40px);
  text-overflow: ellipsis;
  overflow: hidden;
  gap: 8px 20px;
  background: white;
  transform: translate(calc(-100% + 100px), 100%);
  display: grid;


  .menu__valute {
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;
    display: flex;
    gap: 5px;
    &:hover {
      color: rgb(15, 199, 45);
    }
  }
}
</style>