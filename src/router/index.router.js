import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: { name: "Home" },
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/home.vue'),
        },
        {
            path: '/tablero',
            name: 'tablero',
            component: () => import('../views/tablero.vue')
        },
        {
            path: '/tablerocpu',
            name: 'tablerocpu',
            component: () => import('../views/tablerocpu.vue')
        }
    ]
})

export default router