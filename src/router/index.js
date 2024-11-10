import { createWebHistory, createRouter } from "vue-router"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import About from "../components/About.vue"
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
import MyChallenge from "../components/MyChallenge.vue"
import Start from "../components/Start.vue"
import Leaderboard from "../components/Leaderboard.vue"
import Social from '../components/Social.vue';
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
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
    path: "/mychallenge",
    name: "MyChallenge",
    component: MyChallenge,
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
  {
    path: '/social',
    name: 'Social',
    component: Social,
    meta: { requiresAuth: true }, // Protect this route
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }, // Protect this route
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
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

export default router