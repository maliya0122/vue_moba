import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path:'/category/create',
        name:'CategoryEdit',
        component:CategoryEdit
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
