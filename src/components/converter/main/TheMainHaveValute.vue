<template>
<div :class="{left:props.leftborder, right:props.rightborder}" class="valute">{{props.standardValute}}</div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  leftborder?: boolean
  rightborder?: boolean
  standardValute: string
}>()
</script>

<style scoped lang="scss">
.valute {
  margin-top: 20px;
  height: 70px;
  width: 100px;
  border: 1px solid #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  font-size: 23px;
  &:hover{
    background-color: #16b67f;
    color: white;
  }
}
.left{
  border-radius: 10px 0 0 10px;
}
.right{
  border-radius: 0 10px 10px 0;
}
.chosen{
  background-color: rgb(99, 218, 118);
}
</style>