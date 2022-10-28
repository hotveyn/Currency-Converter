import {defineStore} from 'pinia'
import {Ref, ref} from "vue";




// export const useSearchStore = defineStore("search1", {
//     state: () => ({search: ref("")}),
//     actions: {
//         changeText(searchedText: string) {
//             this.search.value = searchedText;
//         }
//     }
// })
export const useSearchStore = defineStore("search", ()=>{
    const search = ref("");
    return{search}
})
