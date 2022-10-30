import {defineStore} from 'pinia'
import {ref} from "vue";


export const useConverterStore = defineStore("converter", () => {
    let haveChosen = ref("RUB");
    let wantChosen = ref("USD");

    function changeHaveChosen(newCharCode: string): void {
        haveChosen.value = newCharCode
    }

    function changeWantChosen(newCharCode: string): void {
        wantChosen.value = newCharCode
    }

    return {haveChosen, wantChosen, changeHaveChosen, changeWantChosen};
})