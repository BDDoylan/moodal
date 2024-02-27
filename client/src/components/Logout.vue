<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();

const logout = () => {
	auth0.logout({
		logoutParams: {
			returnTo: window.location.origin,
		},
	});
};
</script>

<template>
	<div>
		<button @click="logout">Log out</button>
	</div>
</template>
