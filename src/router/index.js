import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movie/hot',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/movie',
        redirect: '/movie/hot',
        name: 'Movie',
        component: () => import('@/views/index/movie/index.vue'),
        children: [
          {
            path: '/movie/hot',
            name: 'Hot',
            component: () => import('@/views/index/movie/hot.vue'),
          },
          {
            path: '/movie/prehot',
            name: 'Prehot',
            component: () => import('@/views/index/movie/prehot.vue'),
          }
        ]
      },
      {
        path: '/theater',
        name: 'Theater',
        component: () => import('@/views/index/theater/index.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/index/profile/index.vue')
      },
    ]
  },
   
  {
    path: '/district',
    name: 'District',
    component: () => import('@/views/district.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
