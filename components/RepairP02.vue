<template>
	<div class="div-receive-row">
		<h3>กำลังดำเนินการ</h3>
		<div class="err_not_item" v-if="response?.length == 0 || response == null">
			<div class="item"> <img src="../img/error_FILL0_wght400_GRAD0_opsz48.svg" width="50%" alt="">
				<b>ยังไม่มีข้อมูล</b>
				<li>ยังไม่มีข้อมูลในการแจ้งซ่อมของผู้ใช้</li>
			</div>
		</div>
		<div class="div-item" v-if="response.length >= 1">
			<div class="item" v-for="item, index in response" :key="index">

				<div class="item1 col-3">
					<div class="div-img">
						<li v-if="item.equipment == ''">err null</li>
						<img v-if="item.equipment == 'คอมพิวเตอร์แม่ข่าย'"
							src="../img/computer_FILL0_wght400_GRAD0_opsz48.svg" alt="computer" width="40px">
						<img v-if="item.equipment == 'คอมพิวเตอร์ตั้งโต๊ะ(pc)'"
							src="../img/computer_FILL0_wght400_GRAD0_opsz48.svg" alt="computer" width="40px">
						<img v-if="item.equipment == 'คอมพิวเตอร์พกพา(NoteBook)'"
							src="../img/computer_FILL0_wght400_GRAD0_opsz48.svg" alt="computer" width="40px">
						<img v-if="item.equipment == 'เครื่องสแกนเนอร์(Scnner)'"
							src="../img/print_FILL0_wght400_GRAD0_opsz48.svg" alt="print" width="40px">
						<img v-if="item.equipment == 'ครื่องพิมพ์(printer)'"
							src="../img/print_FILL0_wght400_GRAD0_opsz48.svg" alt="print" width="40px">
						<img v-if="item.equipment == 'แป้นพิมพ์(KeyBoard)'"
							src="../img/keyboard_FILL0_wght400_GRAD0_opsz48.svg" alt="keyboard" width="40px">
						<img v-if="item.equipment == 'เม้าส์usb(mouseusb)'"
							src="../img/mouse_FILL0_wght400_GRAD0_opsz48.svg" alt="mouse" width="40px">
						<img v-if="item.equipment == 'อินเทอร์เน็ต(Internet)'"
							src="../img/signal_wifi_statusbar_not_connected_FILL0_wght400_GRAD0_opsz48.svg"
							alt="internet" width="40px">
						<img v-if="item.equipment === 'อื่นๆ'"
							src="../img/other_admission_FILL0_wght400_GRAD0_opsz48.svg" alt="other" width="40px">
					</div>
					<div class="row">
						<button class="btn-success button1"
							@click="button(item.id_repair_i, 'ซ่อมเสร็จ')">ตอบรับ</button><button
							class="btn-danger button2" @click="button(item.id_repair_i, 'ยกเลิก')">X</button>
					</div>
				</div>
				<div class="item2 col-9">
					<li>ต้องการแจ้งซ่อม : {{ item.equipment }}</li>
					<li>ปัณหา : {{ item.problem_symptom }}</li>
					<li>เวลาที่แจ้ง : {{ settime(item.date_repair) }}</li>
					<li>ชื้อผู้แจ้งซ่อม : {{ item.name_sender }}</li>
					<li>เบอร์ติดต่อผู้แจ้งซ่อม : {{ item.phone }}</li>

				</div>
			</div>


		</div>
		<br>
		<div class="Pagination-item" v-if="response.length >= 1">
			<label for="cars">หน้าที่ :</label>
			<button type="button" @click="onpot_pages_back()" class="btn btn-outline-primary">&laquo;</button>
			<select class="form-select" v-model="page">
				<option v-for="idex in set_length" :key="idex" :value="idex">{{ idex }}</option>
			</select>
			<button type="button" @click="onpot_pages_go()" class="btn btn-outline-primary">&raquo;</button>
		</div>
		<br>
		<div class="div-staus">
			<button type="button" class="btn btn-warning col-12 button-re " @click="clickRE()">
				<li>โหลดข้อมูล</li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
					<path
						d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { URL_GET_ALL_REQ, URL_GET_REQ, URL_PUT_PROCESS } from '../constants'
import Swal from 'sweetalert2'
export default {
	props: {
		noclickRE: {
			required: true,
		},
	},
	data() {
		return {
			response: '',
			page: 1,
			set_length: 10,
			// staus: 'ซ่อมเสร็จ',
			get_lengthdata: {
				All: '',
				process01: '',
				process02: '',
				process03: '',
			}
		}
	},
	methods: {
		onpot_pages_go() {
			if (this.page === this.set_length) {

			} else {
				this.page = this.page + 1
			}

		},
		onpot_pages_back() {
			if (this.page === 1) {

			} else {
				this.page = this.page - 1
			}
		},
		settime(item) {
			var H = new Date(item).getHours()
			var M = new Date(item).getMinutes()
			return `${H}:${M} น.`
		},
		button(item, staus) {
			axios.put(`${URL_PUT_PROCESS}/${item}`, {
				staus: staus
			}).then(
				response => {
					console.log(response);
					if (response.data.status === 'ok') {
						Swal.fire({
							position: 'center',
							icon: 'success',
							title: 'กำลังดำเนินการ',
							showConfirmButton: false,
							timer: 2500
						}).then(() => {
							axios.get(`${URL_GET_REQ}/?staus=กำลังดำเนินการ&page=${this.page}&limit=10`).then(response => {
								this.response = response.data.results
							})
							axios.get(`${URL_GET_ALL_REQ}/?staus=กำลังดำเนินการ`).then(response => {
								this.get_lengthdata.process01 = response.data.lengthdata
								var sum = response.data.lengthdata / 10
								this.set_length = Math.ceil(sum)
							})
							axios.get(`${URL_GET_ALL_REQ}/?staus=ซ่อมเสร็จ`).then(response => {
								this.get_lengthdata.process03 = response.data.lengthdata
							})
						})
					}
				}
			)
		},
		clickRE() {
			let Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 1000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})

			Toast.fire({
				icon: 'success',
				title: 'โหลดข้อมูลไหม่แล้ว',
				// text: "รายการข้อมูลผู้ใช้งานจะอยู่ด้านล่าง!",
			})
			this.GETdata02()
			
		},
		GETdata02(){
			axios.get(`${URL_GET_REQ}/?staus=กำลังดำเนินการ&page=${this.page}&limit=10`).then(response => {
			this.response = response.data.results
			console.log(response.data);
		})
		axios.get(`${URL_GET_ALL_REQ}/?staus=กำลังดำเนินการ`).then(response => {
			this.get_lengthdata.process01 = response.data.lengthdata
			var sum = response.data.lengthdata / 10
			this.set_length = Math.ceil(sum)

		})
		}
	},
	mounted() {
		// เปิดเว็บทำงานเลย
		this.GETdata02()
		// เช็คทุกๆ10วิ
		setInterval(() => {
			// axios.get(`${URL_GET_REQ}/?staus=กำลังดำเนินการ&page=${this.page}&limit=10`).then(response => {
			// 	this.response = response.data.results
			// })
			// axios.get(`${URL_GET_ALL_REQ}/?staus=กำลังดำเนินการ`).then(response => {
			// 	this.get_lengthdata.process01 = response.data.lengthdata
			// 	var sum = response.data.lengthdata / 10
			// 	this.set_length = Math.ceil(sum)
			// })
		}, 10000);
	},
	watch: {
		noclickRE() {
			this.GETdata02()

		},
		page() {
			axios.get(`${URL_GET_REQ}/?staus=กำลังดำเนินการ&page=${this.page}&limit=10`).then(response => {
				this.response = response.data.results
				// console.log(this.Getlimit_information);
			})
		}
	}
}
</script>

<style>
.div-receive {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	margin-top: 40px;
	z-index: 1;
}

.div-receive-pages {
	display: flex;
	flex-direction: column;
	width: 95%;
	align-items: center;
}

.div-receive-row {
	display: flex;
	width: 85%;
	grid-template-columns: 1fr;
	/* border: 2px solid #ff0000; */
	flex-direction: column;
	flex-wrap: nowrap;
}


.item-staus {
	border-radius: 10px;
	width: 145px;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* background: #c7c7ff; */

}

.div-staus {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-items: stretch;
	align-items: stretch;
	column-gap: 27px;
	row-gap: 27px;
}

.div-receive-row .div-item {
	display: grid;
	padding: 20px;
	column-gap: 25px;
	row-gap: 25px;
	grid-template-columns: 1fr 1fr;
}

.div-receive-row .div-item .item {
	width: auto;
	height: 150px;
	display: flex;
	background-color: #ffd8be;
	flex-direction: row;
	border-radius: 4px;
}

.div-receive-row .div-item .item .item1 {
	display: grid;
	align-content: space-around;
	justify-items: center;
	height: 150px;

}

.div-receive-row .div-item .item .item2 {
	display: grid;
	align-content: space-between;
	/* justify-items: center; */
	margin: 0px 0px 0px 10px;
	align-content: space-around;

}



.div-item .item1 .button1 {
	width: auto;
	height: auto;
	cursor: pointer;
	display: flex;
	align-items: center;
	/* background: red; */
	border: none;
	margin: auto;
	border-radius: 5px;
	/* box-shadow: 1px 1px 3px rgb(0 0 0 / 15%); */
	/* background: #a9ecbf; */
	justify-content: center;
}

.div-item .item1 .button2 {

	position: absolute;
	margin-top: -111px;
	width: 73px;
	height: 20px;
}

.Pagination-item {
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	flex-direction: row;
	align-items: center;
}

.Pagination-item label {
	width: 100px;
}

.Pagination-item select {
	width: 120px;
}

@media screen and (max-width: 800px) {
	.div-receive-row .div-item {
		grid-template-columns: 1fr;
	}

	.div-staus {
		grid-template-columns: 1fr 1fr;
	}
}
</style>