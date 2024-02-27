import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import Moodal from "./presets/moodal";
import "./index.css";

const pinia = createPinia();

createApp(App)
	.use(pinia)
	.use(router)
	.use(
		createAuth0({
			domain: import.meta.env.VITE_AUTH0_DOMAIN,
			clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
			authorizationParams: {
				redirect_uri: window.location.origin,
			},
		})
	)
	.use(PrimeVue, {
		unstyled: true,
		pt: Moodal,
		ripple: true,
	})
	.directive("ripple", Ripple)
	.mount("#app");
