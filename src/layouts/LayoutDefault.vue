<template>
  <div class="header-container">
    <TheHeader/>
  </div>
  <slot/>
</template>

<script setup lang="ts">
import TheHeader from "@/components/converter/header/TheHeader.vue";
</script>

<style scoped>
.header-container{
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

}
</style>