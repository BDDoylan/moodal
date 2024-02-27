<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
	<suspense>
		<div class="bg-primary-200 min-h-screen pt-2">
			<Navbar class="mx-2" />
			<router-view />
		</div>
	</suspense>
</template>
