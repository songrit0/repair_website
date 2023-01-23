<template>
	<div class="">
		<div class="show-information-B"></div>
		<div class="show-information">

			<div class="show_i-div">
				<div class="row col-12">
					<div class="back-button"><button type="button" class="btn btn-danger col-1" @click="Showformitem(false)">X</button></div>

					<br>
					<h2 class="col-12 py-1">ข้อมมูลการแจ้งซ่อม</h2>
					<div class="col-6 py-2">
						<li><b>ชื้อผู้แจ้งซ่อม:  </b>{{ check(GETBYID.name_sender) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>เบอร์โทรศัพท์: </b>{{ check(GETBYID.phone) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>กลุ่มงาน: </b>{{ check(GETBYID.work_group) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>งาน: </b>{{ check(GETBYID.work) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ต้องการแจ้งซ่อม: </b>{{ check(GETBYID.equipment) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ชื่อ คอมพิวเตอร์/อุปกรณ์: </b>{{ check(GETBYID.computer_name) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>รหัสครุภัณฑ์: </b>{{ check(GETBYID.commodity_code) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ip_address: </b>{{ check(GETBYID.ip_address) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ปัญหา/อาการ: </b>{{ check(GETBYID.problem_symptom) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ความเร่งด่วน: </b>{{ check(GETBYID.requirements) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>อื่นๆ: </b>{{ check(GETBYID.other) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>วัน/เวลาที่แจ้ง:</b>{{ check(GETBYID.date_repair) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>วัน/เวลารับแจ้ง:</b> {{ check(GETBYID.date_receive) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ผู้ประสานงาน(ผู้รับแจ้งซ่อม):</b> {{check(GETBYID.name_responsible)}}</li>
					</div>
					<div class="col-12 py-2">
						<button type="button" class="btn btn-danger"  @click="button(GETBYID.id_repair_i, 'ยกเลิก')" v-if="GETBYID.staus === 'รอตอบรับ'||GETBYID.staus === 'กำลังดำเนินการ'">ยกเลิกการแจ้งซ่อม</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { URL_PUT_GET_BY_ID, URL_PUT_PROCESS } from '../constants'
import Swal from 'sweetalert2'
export default {
	data() {
		return {
			
			ID: 2,
			GETBYID: ''
		}
	},
	methods: {
		Showformitem(payload) {
			$nuxt.$store.commit('setShowformitem',payload)
		},
		check(item) {
			if (item) {
				return item
			} else {
				return 'ยังไม่มีข้อมูล'
			}
		},
		GET_by_id() {
			axios.get(`${URL_PUT_GET_BY_ID}/${this.$store.state.showformitem.id}`).then(response => {
				this.GETBYID = response.data.results
				console.log(response.data);
				console.log(this.GETBYID);
			})
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
							title: 'กำลังทำการยกเลิก',
							showConfirmButton: false,
							timer: 2500
						}).then(() => {})
					}
				}
			)
		}

	},
	mounted() {
		this.GET_by_id()
		console.log(this.GETBYID);
		
	}


}
</script>

<style>
.show_i-div {

	display: flex;
	height: auto;
	/* width: 70%; */
	justify-content: center;
	padding: 15px 30px 15px 30px;
	background-color: #ecc6a9;
	z-index: 6;
	border-radius: 12px;
}

.show-information {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* max-height: 19cm; */
	height: 777px;
	padding: 150px;
	justify-content: center;
	z-index: 5;
	/* filter: blur(4px); */
}

.show-information-B {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* max-height: 19cm; */
	height: 777px;
	padding: 150px;
	justify-content: center;
	/* background-color: rgba(9, 9, 9, 0); */
	z-index: 5;
	backdrop-filter: blur(2px);
}

.back-button {
	display: flex;
	justify-content: flex-end;
}
</style>