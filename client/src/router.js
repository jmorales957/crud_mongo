import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateComponent from './components/CreateComponent.vue'
import ListComponent from './components/ListComponent'
import LoginComponent from './components/LoginComponent'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/users',
      name: 'list',
      component: ListComponent
    },
    {
      path: '/users/create',
      name: 'create',
      component: CreateComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})
