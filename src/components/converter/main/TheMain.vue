<template>
  <div class="converter">
    <TheMainConver mod="have"/>
    <img
        class="reverse"
        src="@/img/reverse.svg"
        alt="reverse">
    <TheMainConver mod="want"/>
  </div>
</template>

<script setup lang="ts">
import TheMainConver from "@/components/converter/main/TheMainConver.vue";
</script>

<style lang="scss">
.reverse {
  width: 80px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.converter {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 20px;
  align-items: center;
  margin: 50px auto 0;
}

@media screen and (max-width: 1250px) {
  .converter {
    flex-direction: column;
    gap: 30px;
  }
}
</style>