import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "home" */ './views/Home.vue')
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "edit" */ './views/EditProfile.vue')
      }
    },
    {
      path: '/host/:pin',
      name: 'host',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "host" */ './views/HostView.vue')
      }
    },
    {
      path: '/guest/:pin',
      name: 'guest',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "guest" */ './views/GuestView.vue')
      }
    },
    {
      path: '/create',
      name: 'create',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "create" */ './views/CreateEvent.vue')
      }
    },
    {
      path: "*",
      redirect: '/home'
    }
  ]
})
