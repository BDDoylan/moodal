import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		beforeEnter: authGuard,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
