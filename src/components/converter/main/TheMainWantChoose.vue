<template>
  <div class="choose" :class="{left:leftborder, right:rightborder}">Выбрать</div>
</template>

<script setup lang="ts">
const props = defineProps({
      leftborder: String,
      rightborder: String,
    }
)
</script>

<style lang="scss">
.choose {
  margin-top: 20px;
  height: 70px;
  width: 100px;
  border: 1px solid #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover{
    background-color: rgb(86, 143, 109);
    color: white;
  }

}
.left{
  border-radius: 10px 0 0 10px;
}
.right{
  border-radius: 0 10px 10px 0;
}
</style>