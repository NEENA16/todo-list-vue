import TaskComponentVue from '@/components/TaskComponent.vue'
import AboutComp from '@/components/AboutComp.vue'
import NestedComp from '@/components/NestedComp.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:"/",redirect:'/task'},
    // {
    //   path: '/',
    //   name: 'taskTracker',
    //   component: TaskComponentVue
    // },
    {
      path: '/about',
      name: 'About',
      component: AboutComp
    },
    {
      path: '/task',
      name: 'taskTracker',
      component: TaskComponentVue,
      children: [
        {
          path: 'nested',
          component: NestedComp
        }
      ]
    }
  ]
})
