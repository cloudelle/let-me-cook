import { createWebHistory, createRouter } from "vue-router"
import About from "../components/About.vue"
import Dashboard from "../components/Dashboard.vue"
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
import Profile from "../components/Profile.vue"

const routes = [
    {
        path: "/",
        name: "About",
        component: About,
    },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router