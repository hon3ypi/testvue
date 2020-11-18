import { createRouter, createWebHashHistory } from 'vue-router'
/*import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Orte from '../views/Orte.vue'
import Startseite from '../views/Startseite.vue'*/
import Fasnacht from '../views/Fasnacht.vue'
import Mapbox from '../views/Mapbox.vue'


const routes = [
  {
    path: '/fasnacht',
    name: 'Fasnacht',
    component: Fasnacht
  },
  {
    path: '/mapbox',
    name: 'Mapbox',
    component: Mapbox
  }/*,
    {
    path: '/',
    name: 'Startseite',
    component: Startseite
  },
  {
    path: '/startseite',
    name: 'Startseite',
    component: Startseite
  },
    {
    path: '/orte',
    name: 'Orte',
    component: Orte
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }*/

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
