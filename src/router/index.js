import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: () =>
      import ('views/home/Home')
  }, {
    path: '/category',
    component: () =>
      import ('views/category/Category')
  }, {
    path: '/cart',
    component: () =>
      import ('views/cart/Cart')
  }, {
    path: '/profile',
    component: () =>
      import ('views/profile/Profile')
  }]
})
export default router