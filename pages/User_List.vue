<template>
	<div class="">
		<b>get_user_lengthdata : {{ $store.state.get_user_lengthdata }}</b>
		<br>
		<b>get_set_pages : {{ $store.state.get_set_pages }}</b>
		<br>
		<b>get_all_lengthdata : {{ $store.state.get_all_lengthdata }}</b>
		<br>
		<b>get_set_pages_all : {{ $store.state.get_set_pages_all }}</b>
	</div>


</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		getL(payload) {
			$nuxt.$store.commit('get_user_lengthdata', payload)
			console.log('get_user_lengthdata:', payload);
		}
	}
}
</script>

<style>

</style>