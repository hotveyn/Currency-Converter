import {defineStore} from "pinia";
import {IValute} from "@/interfaces/IValute";
import {Ref, ref} from "vue";

interface State {
    valutes: Ref<Record<string, IValute>>;
}

export const useValutesStore = defineStore("valutes", {
    state: (): State => ({
        valutes: ref({RUB:{
                ID: "R01010",
                NumCode: "036",
                CharCode: "RUB",
                Nominal: 1,
                Name: "Российский рубль",
                Value: 1,
                Previous: 1
            }})
    }),
    actions:{
       addNewValute(charCode:string,valInfo:IValute){
           this.valutes[charCode] = valInfo;
       }
    }
});

