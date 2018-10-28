import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Movie from '@/components/Movie';
import Trailer from '@/components/Trailer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },{
      path:'/:id',
      name:'Movie',
      component:Movie
    },{
      path:'/:id/trailer',
      name:'Trailer',
      component:Trailer
    }
  ]
})
