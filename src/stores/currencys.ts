import {defineStore} from "pinia";
import {Ref, ref} from "vue";

interface State {
    currenciesHave: Ref<string[]>;
    currenciesWant: Ref<string[]>;
    enterNumber: Ref<number>;
}

export const useCurrencysStore = defineStore("currencys", {
    state: (): State => ({
        currenciesHave: ref(["RUB", "USD", "EUR", "JPY"]),
        currenciesWant: ref(["RUB", "USD", "EUR", "JPY"]),
        enterNumber: ref(5000),
    }),
    actions: {
        addNewCurrency(charCode: string, curenciesList: string[]): string[] {
            const newCurrencys = [...curenciesList];
            newCurrencys.unshift(charCode);
            newCurrencys.length = 4;

            return newCurrencys;
        },
    },
});
