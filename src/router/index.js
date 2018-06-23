import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/index"
    },
    {
      path: '/index',
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/components/LogIn'], resolve)
    },
    {
      path: '/Signin',
      component: resolve => require(['@/components/SignIn'], resolve)
    },
    {
      path: '/MainPage',
      component: resolve => require(['@/components/MainPage/MainPage'], resolve) 
    }
  ]
})
