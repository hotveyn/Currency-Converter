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
                CharCode: "AUD",
                Nominal: 1,
                Name: "Австралийский доллар",
                Value: 39.8065,
                Previous: 39.9508
            }})
    }),
    actions:{
       addNewValute(charCode:string,valInfo:IValute){
           this.valutes[charCode] = valInfo;
       }
    }
});

