import {IValute} from "@/interfaces/IValute";
import {defineStore} from "pinia";
import {useValutesStore} from "@/stores/valutes";

interface State {
    chosenCurrency: string;
    chosenCurrencyObj: IValute;
}

export const useChosenCurrencyStore = defineStore("chosenCurrency", {

    state: (): State => ({
        chosenCurrency: "RUB",
        chosenCurrencyObj: {
            ID: "R01090R",
            NumCode: "810",
            CharCode: "RUB",
            Nominal: 1,
            Name: "Российский рубль",
            Value: 1,
            Previous: 1,
        },
    }),
    actions: {
        setChosenCurrencyObj(): void {
            const valutesStore = useValutesStore();
            this.chosenCurrencyObj = valutesStore.valutes[this.chosenCurrency];
        },
    },
});

// const chosenCurrency = ref("RUB");
// const chosenCurrencyObj = ref({
//     ID: "R01090R",
//     NumCode: "810",
//     CharCode: "RUB",
//     Nominal: 1,
//     Name: "Российский рубль",
//     Value: 1,
//     Previous: 1
// });
//
// const valutesStore = useValutesStore();
//
// function setChosenCurrencyObj(): void {
//     chosenCurrencyObj.value = valutesStore.valutes[chosenCurrency.value];
// }
//
// return {chosenCurrency, setChosenCurrencyObj, chosenCurrencyObj};