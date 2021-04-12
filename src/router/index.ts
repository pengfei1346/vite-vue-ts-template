import { createRouter, createWebHashHistory } from 'vue-router'
//在vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式，此处使用的时hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    }
  ]
})
