import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main'},
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/exchange',
    name: 'Exchenge',
    meta: {layout: 'main'},
    component: () => import('../views/Exchange.vue')
  },
  {
    path: '/guarantee',
    name: 'Guarantee',
    meta: {layout: 'main'},
    component: () => import('../views/Guarantee.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    meta: {layout: 'main'},
    component: () => import('../views/Pay.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
