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
            if (!curenciesList.includes(charCode)) {
                for (let i = newCurrencys.length - 1; i > 0; i--) {
                    newCurrencys[i] = newCurrencys[i - 1];
                }
                newCurrencys[0] = charCode;
            }
            return newCurrencys;
        },
    },
});
