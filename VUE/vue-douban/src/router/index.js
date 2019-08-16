import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/view/Recommend'
import Movie from '@/view/Movie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    }
  ]
})
