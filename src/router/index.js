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
import BackendHome from '../components/backend/BackendHome'
import ArticleList from '../components/backend/content/ArticleList'
import ResourceList from '../components/backend/content/ResourceList'
import UserManagement from '../components/backend/content/UserManagement'

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
      path: '/backend',
      name: 'Backend',
      component: BackendHome,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/article-list',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/resource-list',
          name: 'ResourceList',
          component: ResourceList
        },
        {
          path: '/user-management',
          name: 'UserManagement',
          component: UserManagement
        },
        {
          path: '/update-article',
          name: 'UpdateArticle',
          component: ArticleEditor
        }
      ]
    }
  ]
})
