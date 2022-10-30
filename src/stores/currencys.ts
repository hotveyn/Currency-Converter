import {defineStore} from 'pinia'
import {Ref, ref} from "vue";


export const useCurrencysStore = defineStore("currencys", () => {
    let currencysHave: Ref<string[]> = ref(["RUB", "USD", "EUR", "JPY"]);
    let currencysWant: Ref<string[]> = ref(["RUB", "USD", "EUR", "JPY"]);

    function addNewCurrencyHave(charCode: string): void {
        if (!currencysHave.value.includes(charCode)) {
            let newCurrencys = [...currencysHave.value]
            for (let i = newCurrencys.length - 1; i > 0; i--) {
                newCurrencys[i] = newCurrencys[i - 1]
            }
            newCurrencys[0] = charCode
            currencysHave.value = newCurrencys;
        }
    }

    function addNewCurrencyWant(charCode: string): void {
        if (!currencysWant.value.includes(charCode)) {
            let newCurrencys = [...currencysWant.value]
            for (let i = newCurrencys.length - 1; i > 0; i--) {
                newCurrencys[i] = newCurrencys[i - 1]
            }
            newCurrencys[0] = charCode
            currencysWant.value = newCurrencys;
        }
    }

    return {currencysHave, currencysWant, addNewCurrencyHave, addNewCurrencyWant}
})
