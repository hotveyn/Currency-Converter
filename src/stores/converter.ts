import {defineStore} from 'pinia'
import {ref} from "vue";


export const useConverterStore = defineStore("converter", () => {
    let haveChosen = ref("RUB");
    let wantChosen = ref("USD");
    let enterNumber = ref(5000);

    function changeHaveChosen(newCharCode: string): void {
        haveChosen.value = newCharCode
    }

    function changeWantChosen(newCharCode: string): void {
        wantChosen.value = newCharCode
    }

    return {haveChosen, wantChosen, enterNumber, changeHaveChosen, changeWantChosen};
})