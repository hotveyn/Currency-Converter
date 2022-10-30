<template>
  <header class="header">
    <a href="../../../../index.html"><img src="@/img/CurCorv.png" alt="CurCorv logo"></a>
    <a href="#/converter" class="header__converter">Конвертер</a>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__converter {
    font-size: 20px;
    text-decoration: none;
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
