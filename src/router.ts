import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/dashboard/products',
            name: 'table',
            component: () => import('./views/Table.vue'),
        },
        {
            path: '/dashboard/products/create',
            name: 'create',
            component: () => import('./views/Create.vue'),
        },
        {
            path: '/dashboard/products/:id/edit',
            name: 'edit',
            component: () => import('./views/Edit.vue'),
        },
        {
            path: '/dashboard/products/:id/delete',
            name: 'edit',
            component: () => import('./views/Delete.vue'),
        },
    ],
});
