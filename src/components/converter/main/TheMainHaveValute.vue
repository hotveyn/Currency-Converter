<template>
  <div
      :class="{'chosen':isChosen}"
      class="valute"
      @click="changeChosen()">
    {{ chosenValute }}
  </div>
</template>

<script lang="ts" setup>
import {useConverterStore} from "@/stores/converter";
import {computed, ref} from "vue";

const props = defineProps<{
  valute: string
}>();

const converter = useConverterStore();
const chosenValute = ref(props.valute);

function changeChosen() {
  converter.changeHaveChosen(chosenValute.value);
}

const isChosen = computed(() => chosenValute.value === converter.haveChosen);

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