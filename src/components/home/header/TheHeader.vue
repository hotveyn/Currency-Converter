<template>
  <header class="header">
    <a href="#/"><img
src="@/img/CurCorv.png"
alt="CurCorv logo"></a>
    <a
href="#/converter"
class="header__converter">Конвертер</a>
  </header>
  <hr>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
hr {
  margin-top: 20px;
}

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
