import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
let routes = [];
let matches = require.context('../views', true, /\.router\.js$/)
matches.keys().forEach(key => {
  routes = routes.concat(matches(key).default)
})
// routes.push( {
//   path: '*',
//   name: 'home',
//   component: () => import('@project/cdkx/views/home/index.vue')
// })
const router = new VueRouter({
  // mode: 'history',
  // base:  process.env.VUE_APP_PATH,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
// router.beforeEach((to, from, next) => {

//   next()

// })
export default router