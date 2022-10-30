import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/components/home/Home.vue"
import Converter from "@/components/converter/Converter.vue"
// const routes = [{
//     history: createWebHashHistory(),
//     {path: '/', component: Home},
//     {path: '/about', component: About},
// }
// ]
const routes = [
    {path: '/', component: Home},
    {path: '/converter', component: Converter}
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})
