import {defineStore} from 'pinia'
import {IValute} from "@/interfaces/IValute";
import {Ref, ref} from "vue";


type ValutesMap = Record<string, IValute>

export const useValutesStore = defineStore('valutes', () => {
    let valutes: Ref<ValutesMap> = ref({
        "RUB": {
            ID: "1234A",
            NumCode: "123123",
            CharCode: "RUB",
            Nominal: 1,
            Name: "Российский рубль",
            Value: 1,
            Previous: 1
        }
    })

    function addValute(charCode: string, info: IValute): void {
        valutes.value[charCode] = info;
    }

    return {valutes, addValute}

})
