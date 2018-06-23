import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'route0',
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/LogIn'], resolve)
    },
    {
      path: '/Signin',
      name: 'signin',
      component: resolve => require(['@/components/SignIn'], resolve)
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: resolve => require(['@/components/MainPage/MainPage'], resolve),
      children: [
        {
          path: 'UserInfo',
          name: 'UserInfo',
          component: resolve => require(['@/components/MainPage/UserInfo/UserInfo'], resolve),
          children: [
            {
              path: 'MyFriend',
              name: 'MyFriend',
              component: resolve => require(['@/components/MainPage/UserInfo/MyFriend'], resolve)
            },
            {
              path: 'MyUser',
              name: 'MyUser',
              component: resolve => require(['@/components/MainPage/UserInfo/MyUser'], resolve)
            },
            {
              path: 'MySchool',
              name: 'MySchool',
              component: resolve => require(['@/components/MainPage/UserInfo/MySchool'], resolve)
            }
          ]
        },
        {
          path: 'ApplySchool',
          name: 'ApplySchool',
          component: resolve => require(['@/components/MainPage/ApplySchool'], resolve)
        },
        {
          path: 'AllSchool',
          name: 'AllSchool',
          component: resolve => require(['@/components/MainPage/AllSchool'], resolve)
        },
        {
          path: 'MessageCenter',
          name: 'MessageCenter',
          component: resolve => require(['@/components/MainPage/MessageCenter'], resolve)
        }
      ]
    }
  ]
})
