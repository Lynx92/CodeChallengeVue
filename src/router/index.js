import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList/UserList.vue'
import Details from '@/components/Details/Details.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: UserList, Details
    }
  ]
})
