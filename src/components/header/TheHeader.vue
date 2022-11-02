<template>
  <header class="header">
    <RouterLink to="/">
      <img
src="@/img/CurCorv.png"
alt="CurCorv logo">
    </RouterLink>
    <RouterLink
        v-if="route.name !== 'home'"
        class="rt-link"
        :to="{name:'home'}"
    >
      Главная
    </RouterLink>
    <RouterLink
        v-else
        class="rt-link"
        :to="{name: 'converter'}">
      Конвертер
    </RouterLink>
  </header>
  <hr>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
hr {
  margin-top: 20px;
}

.header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rt-link {
    font-size: 20px;
    text-decoration: none;
    font-family: Roboto;
    color: black;
    border-bottom: 2px solid grey;
    transition: color 0.2s, border-bottom-color 0.2s;

    &:hover {
      color: rgb(32, 221, 62);
      border-bottom-color: rgb(32, 221, 62);
    }
  }
}
</style>
