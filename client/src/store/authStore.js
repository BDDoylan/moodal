import * as pinia from "pinia";

const useAuthStore = pinia.defineStore("auth", () => {
	const isAuthorized = ref(false);
	const userInfo = ref(null);

	const authenticate = (status) => {
		isAuthorized.value = status;
	};

	const setUserInfo = (info) => {
		userInfo.value = info;
	};

	return {
		// State
		isAuthorized,
		userInfo,

		// Actions
		authenticate,
		setUserInfo,
	};
});

export default {
	useAuthStore,
};
