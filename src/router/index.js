import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


import Home from '@/pages/HomePage.vue';            
import NotFound from '@/pages/404.vue';            


const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/movie',
            name: 'movies' ,
            component: () => import('@/pages/MoviesPage.vue')
        },
        {
            path: '/tv',
            name: 'tvs',
            component: () => import('@/pages/TvsPage.vue')
        },
        {
            path: '/movie/:id',
            name: 'movieid' ,
            component: () => import('@/pages/MovieId.vue')
        },
        {
            path: '/tv/:id',
            name: 'tvid' ,
            component: () => import('@/pages/TvId.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/pages/SearchPage.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'notfound',
            component: NotFound
        },  
    ],
    scrollBehavior() {
        return {
          top: 0
        }
    }
})



export default routers;

