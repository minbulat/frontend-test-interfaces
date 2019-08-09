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
            path: '/dashboard/:resource',
            name: 'table',
            component: () => import('./views/ResourceTable.vue'),
        },
        {
            path: '/dashboard/:resource/create',
            name: 'create',
            component: () => import('./views/ResourceCreate.vue'),
        },
        {
            path: '/dashboard/:resource/:id/edit',
            name: 'edit',
            component: () => import('./views/ResourceEdit.vue'),
        },
        {
            path: '/dashboard/:resource/:id/delete',
            name: 'delete',
            component: () => import('./views/ResourceDelete.vue'),
        },
    ],
});
