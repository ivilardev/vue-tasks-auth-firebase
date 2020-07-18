import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () =>
      import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () =>
      import(/* webpackChunkName: "registro" */ '../views/Registro.vue'),
  },
  {
    path: '/acceso',
    name: 'Acceso',
    component: () =>
      import(/* webpackChunkName: "registro" */ '../views/Acceso.vue'),
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () =>
      import(/* webpackChunkName: "editar" */ '../views/Editar.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () =>
      import(/* webpackChunkName: "editar" */ '../views/Agregar.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;

    if (!usuario) {
      next({ path: '/acceso' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
