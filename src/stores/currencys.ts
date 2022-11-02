import {defineStore} from "pinia";
import {Ref, ref} from "vue";

interface State {
    currenciesHave: string[];
    currenciesWant: string[];
    enterNumber: number;
}

export const useCurrencysStore = defineStore("currencys", {
    state: (): State => ({
        currenciesHave: ["RUB", "USD", "EUR", "JPY"],
        currenciesWant: ["RUB", "USD", "EUR", "JPY"],
        enterNumber: 5000,
    }),
    actions: {
        addNewCurrency(charCode: string, curenciesList: string[]): string[] {
            const newCurrencys = [...curenciesList];
            if(!curenciesList.includes(charCode)){
                newCurrencys.unshift(charCode);
                newCurrencys.length = 4;
            }
            return newCurrencys;
        },
    },
});
