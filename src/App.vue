<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue"
import TheMain from "@/components/main/TheMain.vue"
</script>

<template>
  <div class="container">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<style scoped lang="scss">

.container{
  font-family: 'Roboto', sans-serif;
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
