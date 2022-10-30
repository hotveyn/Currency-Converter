<template>
  <div class="container">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/home/header/TheHeader.vue"
import TheMain from "@/components/home/main/TheMain.vue"
</script>

<style lang="scss">
.container{
  font-family: 'Roboto', sans-serif;
  max-width: 1360px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
}
</style>