<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();

const login = () => {
	auth0.loginWithRedirect();
};
</script>

<template>
	<div>
		<Button @click="login" size="small" label="Log in"></Button>
	</div>
</template>
