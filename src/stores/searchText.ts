import {defineStore} from "pinia";

interface State {
    search : string
}

export const useSearchStore = defineStore("search", {
    state: (): State => ({
        search : ""
    })
});
