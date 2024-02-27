<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import Logout from "../components/Logout.vue";

const auth0 = useAuth0();

const user = auth0.user;
const isAuthenticated = auth0.isAuthenticated;
const isLoading = auth0.isLoading;
</script>

<template>
	<div v-if="isLoading">Loading ...</div>

	<div v-else>
		<pre v-if="isAuthenticated">
            <code>{{ user }}</code>
        </pre>
		
		<Logout />
	</div>
</template>
