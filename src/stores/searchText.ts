import {defineStore} from 'pinia'
import {Ref, ref} from "vue";


export const useSearchStore = defineStore("search", ()=>{
    const search = ref("");
    return{search}
})
