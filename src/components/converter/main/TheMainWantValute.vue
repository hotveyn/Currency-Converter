<template>
  <div
      @click="changeChosen()"
      :class="{chosen:isChosen()}"
      class="valute">{{ props.valute }}
  </div>
</template>

<script lang="ts" setup>
import {useConverterStore} from "@/stores/converter";
import {ref} from "vue";

let converter = useConverterStore();

const props = defineProps<{
  valute: string
}>()

let chosenValute = ref(props.valute);

function changeChosen() {
  converter.changeWantChosen(chosenValute.value);
}

function isChosen() {
  return chosenValute.value === converter.wantChosen;
}
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

  &:hover {
    background-color: #16b67f;
    color: white;
  }
}

.left {
  border-radius: 10px 0 0 10px;
}

.right {
  border-radius: 0 10px 10px 0;
}

.chosen {
  background-color: #16b67f;
  color: white;
}
</style>