<template>
	<div class="">
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			login: false
		}
	},
	methods: {
		button() {
			this.login = !this.login
			setTimeout(() => {
				window.print()
			}, 1000);
			setTimeout(() => {
				this.login = !this.login
			}, 10000);

		}
	}

}
</script>

<style>
@page {
	size: A4;
	margin: 0;
}

.pagenone {
	/* display: none */
}
</style>