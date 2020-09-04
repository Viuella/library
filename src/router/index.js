import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

    { path: '/create',
      component: () => import('../views/create.vue')
    },

    { path: '/list',
      component: () => import('../views/List.vue')
    },
    { path: '/book/:id',
      component: () => import('../views/Book.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
