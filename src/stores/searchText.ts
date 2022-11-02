import {defineStore} from "pinia";
import {Ref, ref} from "vue";

interface State {
    search : Ref<string>
}

export const useSearchStore = defineStore("search", {
    state: (): State => ({
        search : ref("")
    })
});
