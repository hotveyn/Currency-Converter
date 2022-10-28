import {defineStore} from 'pinia'
import {Ref, ref} from "vue";


export const useChosenCurrencyStore = defineStore("chosenCurrency", ()=>{
    const chosenCurrency = ref("RUB");
    return{chosenCurrency}
})