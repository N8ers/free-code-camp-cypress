import { createRouter, createWebHistory } from 'vue-router'

import FindingAndAsserting from '../components/FindingAndAsserting.vue'
import IteratingAssertions from '../components/IteratingAssertions.vue'
import UserInteractions from '../components/UserInteractions.vue'
import UrlValidation from '../components/UrlValidation.vue'
import NetworkRequests from '../components/NetworkRequests.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/finding-and-asserting',
      component: FindingAndAsserting
    },
    {
      path: '/iterating-assertions',
      component: IteratingAssertions
    },
    {
      path: '/user-interactions',
      component: UserInteractions
    },
    {
      path: '/url-validation',
      component: UrlValidation
    },
    {
      path: '/network-requests',
      component: NetworkRequests
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/finding-and-asserting'
    }
  ]
})

export default router
