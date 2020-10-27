import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import CategoryIndex from '../components/category/CategoryIndex'
import ArticleEditor from '../components/backend/content/ArticleEditor'
import FriendIndex from '../components/friend/FriendIndex'
import AboutIndex from '../components/about/AboutIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index', // 这就是重定向…… home页面并不需要被访问
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex
        },
        {
          path: '/categories',
          name: 'CategoryIndex',
          component: CategoryIndex
        },
        {
          path: '/seniors-and-friends',
          name: 'FriendIndex',
          component: FriendIndex
        },
        {
          path: '/about',
          name: 'AboutIndex',
          component: AboutIndex
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'ArticleEditor',
      component: ArticleEditor,
      meta: {
        requireAuth: true
      }
    }
  ]
})
