import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ConverterPage from "@/pages/ConverterPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/converter",
        name: "converter",
        component: ConverterPage,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
