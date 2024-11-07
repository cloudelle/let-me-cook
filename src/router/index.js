import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import About from "../components/About.vue";
import Dashboard from "../components/Dashboard.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import Start from "../components/Start.vue";
import Leaderboard from "../components/Leaderboard.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
    meta: { requiresAuth: true }, // Protect this route
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
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaderboard,
    meta: { requiresAuth: true }, // Protect this route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard to check authentication
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next(); // User is authenticated, proceed to the route
      } else {
        next({ name: 'Login' }); // Redirect to login if not authenticated
      }
    });
  } else {
    next(); // Route doesn't require authentication
  }
});

export default router;
