import {defineStore} from 'pinia'
import {IValute} from "../interfaces/IValute";


interface IValutes {
    valutes: IValute[];
}

export const useValutesStore = defineStore('valutes', {
    state: (): IValutes => ({valutes:[
            {
                ID:"R01090R",
                NumCode:"810",
                CharCode:"RUB",
                Nominal:1,
                Name:"Российский рубль",
                Value:1,
                Previous:1
            }
        ]}),
    actions: {
        addValute(currency:IValute){
            this.valutes.push(currency)
        }
    }
})
