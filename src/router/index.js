import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/HomePage.vue"
import BlogsView from "../views/BlogsPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import Registerpage from "@/views/RegisterPage.vue"
import ResetPasswordPage from "@/views/ResetPasswordPage.vue"
import ProfilePage from "@/views/ProfilePage.vue"
import AdminPage from "@/views/AdminPage.vue"
import CreatePostPage from "@/views/CreatePostPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogsView,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Registerpage,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ResetPasswordPage,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    meta: {
      title: "Admin",
    },
  },
  {
    path: "/create-post",
    name: "createPost",
    component: CreatePostPage,
    meta: {
      title: "Create Post",
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlogs`
  next()
})

export default router
