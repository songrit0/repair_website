<template>
	<div class="PV_print">
		<br>
		<div class="col-10">
			<h2>ตัวอย่าง การพิมพ์</h2>
		</div><br>
		<div class="col-7"><button class="btn btn-info" @click="B_print()"><svg xmlns="http://www.w3.org/2000/svg"
					width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
					<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
					<path
						d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
				</svg> พิมพ์</button> <button  @click="$router.back(1)" type="button" class="btn btn-danger"><svg
					xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff"
					class="bi bi-arrow-left-short" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
						d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
				</svg>กลับ</button></div>
		<br>
		<div class="PV_print-item">
			<print :printON='printON' :printID="printID" />
		</div>
		<br>
	</div>
</template>

<script>
import print from './print.vue'
export default {
	components: { print },
	data() {
		return {
			GETBYID: 'aadadadww',
			printON: false,
			printID: this.$route.query.id
			// 
		}
	},
	methods: {
		// GET_by_id() {
		// 	axios.get(`${URL_PUT_GET_BY_ID}/17`).then(response => {
		// 		this.GETBYID = response.data.results
		// 		console.log(response.data.results);
		// 		console.log(this.GETBYID);
		// 	})
		// }
		B_print() {
			this.printON = !this.printON
			setTimeout(() => {
				window.print()
			}, 500);
			setTimeout(() => {
				this.printON = !this.printON
			}, 1000);
		}
	},
	mounted() {
		// this.GET_by_id()


	}
}
</script>

<style>
.PV_print {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
}

.PV_print-item {
	/* width: 78%; */
	display: flex;
	justify-content: center;
}
</style>