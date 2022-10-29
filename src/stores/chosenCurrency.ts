import {defineStore} from 'pinia'
import {ref} from "vue";
import {useValutesStore} from "@/stores/valutes";


export const useChosenCurrencyStore = defineStore("chosenCurrency", () => {
    const chosenCurrency = ref("RUB");
    let chosenCurrencyObj = ref({
        ID:"R01090R",
        NumCode:"810",
        CharCode:"RUB",
        Nominal:1,
        Name:"Российский рубль",
        Value:1,
        Previous:1
    });

    const valutesStore = useValutesStore();

    function getChosenCurrencyObj(): void {
        for (let i of valutesStore.valutes) {
            if (i.CharCode === chosenCurrency.value) {
                chosenCurrencyObj.value = i;
            }
        }
    }

    return {chosenCurrency, getChosenCurrencyObj, chosenCurrencyObj}
})