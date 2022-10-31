import {defineStore} from "pinia";

interface State {
    have: string;
    want: string;
    enterNumber:number;
}


export const useConverterStore = defineStore("converter", {
    state: (): State => ({
        have: "RUB",
        want: "USD",
        enterNumber: 5000,
    }),
    actions: {
        setHave(payload: string) {
            this.have = payload;
        },
        setWant(payload: string) {
            this.want = payload;
        }
    }
});

// let haveChosen = ref("RUB");
// let wantChosen = ref("USD");
// let enterNumber = ref(5000);
//
// function changeHaveChosen(newCharCode: string): void {
//     haveChosen.value = newCharCode
// }
//
// function changeWantChosen(newCharCode: string): void {
//     wantChosen.value = newCharCode
// }
//
// return {haveChosen, wantChosen, enterNumber, changeHaveChosen, changeWantChosen};