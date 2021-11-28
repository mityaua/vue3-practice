import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import ApartmentPage from '../pages/ApartmentPage.vue';
import ErrorPage from '../pages/ErrorPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment',
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
