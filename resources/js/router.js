import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/Home.vue";

const routes = [
    {
        path: "/hello",
        component: HomePage,
    },
];

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
