<template>
	<div class="div-receive ">
		<div class="div-receive-pages">
			<div class="row col-10">
				<h1>แจ้งซ่อม</h1>
			</div>
			<div class="col-10">
				<div class="div-staus">
					<div class="col-12">
						<div class="item-staus I1">
							<img src="../img/clear_all_FILL0_wght400_GRAD0_opsz48.svg" width="40px">
							<li>{{ get_lengthdata.All }}+</li>
							<li>ทั้งหมด </li>
						</div>
						<div class="checkbox-div">
							<li>แสดง:</li>
							<label class="switch">
								<input type="checkbox" v-model="checkbox.All">
								<span class="slider"></span>
							</label>
						</div>

					</div>
					<div class="col-12 ">
						<div class="item-staus I2">
							<img src="../img/quick_reference_FILL0_wght400_GRAD0_opsz48.svg" width="40px">
							<li>{{ get_lengthdata.process01 }}+</li>
							<li>รอตอบรับ </li>
						</div>
						<div class="checkbox-div">
							<li>แสดง:</li>
							<label class="switch">
								<input type="checkbox" v-model="checkbox.process01">
								<span class="slider"></span>
							</label>
						</div>
					</div>
					<div class="col-12 ">
						<div class="item-staus I3 ">
							<img src="../img/autorenew_FILL0_wght400_GRAD0_opsz48.svg" width="40px">
							<li>{{ get_lengthdata.process02 }}+</li>
							<li>กำลังดำเนินการ </li>
						</div>
						<div class="checkbox-div">
							<li>แสดง:</li>
							<label class="switch">
								<input type="checkbox" v-model="checkbox.process02">
								<span class="slider"></span>
							</label>
						</div>
					</div>
					<div class="col-12 ">
						<div class="item-staus I4 ">
							<img src="../img/done_FILL0_wght400_GRAD0_opsz48.svg" width="40px">
							<li>{{ get_lengthdata.process03 }}+</li>
							<li>ซ่อมเสร็จ </li>
						</div>
						<div class="checkbox-div">
							<li>แสดง:</li>
							<label class="switch">
								<input type="checkbox" v-model="checkbox.process03">
								<span class="slider"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<br>
			<br>
			<hr width=80% size=3 v-if="checkbox.process01">
			<RepairP01_u v-if="checkbox.process01" />
			<hr width=80% size=3 v-if="checkbox.process02">
			<RepairP02_u v-if="checkbox.process02" />
			<hr width=80% size=3 v-if="checkbox.process03">
			<RepairP03_u v-if="checkbox.process03" />
			<hr width=80% size=3 v-if="checkbox.All">
			<RepairP00_u v-if="checkbox.All" />


			<br>
			<br>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import RepairP00_u from '../components/RepairP00_u.vue';
import RepairP02_u from '../components/RepairP02_u.vue';
import RepairP01_u from '../components/RepairP01_u.vue';
import { URL_GET_ALL_REQ, URL_GET_REQ, URL_PUT_PROCESS } from '../constants'
import RepairP03_u from '../components/RepairP03_u.vue';
// import Swal from 'sweetalert2'
export default {
	data() {
		return {
			response: "",
			page: "1",
			set_length: 10,
			get_lengthdata: {
				All: "",
				process01: "",
				process02: "",
				process03: "",
			},
			checkbox: {
				All: true,
				process01: false,
				process02: false,
				process03: false,
			}
		};
	},
	methods: {
		settime(item) {
			var H = new Date(item).getHours();
			var M = new Date(item).getMinutes();
			return `${H}:${M} น.`;
		},
		GETall_lengthdata(){
			axios.get(`${URL_GET_ALL_REQ}/?staus=ทั้งหมด&user_id=1`).then(response => {
			this.get_lengthdata.All = response.data.lengthdata;
		});
		axios.get(`${URL_GET_ALL_REQ}/?staus=รอตอบรับ&user_id=1`).then(response => {
			this.get_lengthdata.process01 = response.data.lengthdata;
		});
		axios.get(`${URL_GET_ALL_REQ}/?staus=กำลังดำเนินการ&user_id=1`).then(response => {
			this.get_lengthdata.process02 = response.data.lengthdata;
		});
		axios.get(`${URL_GET_ALL_REQ}/?staus=ซ่อมเสร็จ&user_id=1`).then(response => {
			this.get_lengthdata.process03 = response.data.lengthdata;
		});
		}
	},
	mounted() {
		// เปิดเว็บทำงานเลย
		this.GETall_lengthdata()
		// เช็คทุกๆ10วิ
		setInterval(() => {
			this.GETall_lengthdata()
		}, 10000);
	},
	watch: {},
	components: { RepairP00_u, RepairP01_u, RepairP02_u, RepairP03_u }
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

.I1 {
	background: #c7c7ff;
}

.I2 {
	background-color: #f3bbe1;

}

.I3 {
	background-color: #ffd8be;
}

.I4 {
	background-color: #a9ecbf;
}

.div-receive-row .div-item {
	display: grid;
	padding: 20px;
	column-gap: 25px;
	row-gap: 25px;
	grid-template-columns: 1fr 1fr;
}


.div-receive-row .div-img {
	display: grid;
	align-content: center;
	background-color: #a9a9a94a;
	/* margin: 25px; */
	height: 75px;
	width: 75px;
	justify-content: center;
	border-radius: 10px;

}

.item1 button {
	width: 80px;
	height: 34px;
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

/* checkbox-div */
.checkbox-div {
	display: flex;
	margin: 10px;
	justify-content: center;
	width: 55%;
}

.checkbox-div li {
	margin-top: 2.5px;
}

.switch {
	--button-width: 3.5em;
	--button-height: 2em;
	--toggle-diameter: 1.5em;
	--button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
	--toggle-shadow-offset: 10px;
	--toggle-wider: 3em;
	--color-grey: #cccccc;
	--color-green: #4296f4;
}

.slider {
	display: inline-block;
	width: var(--button-width);
	height: var(--button-height);
	background-color: var(--color-grey);
	border-radius: calc(var(--button-height) / 2);
	position: relative;
	transition: 0.3s all ease-in-out;
	transform: scale(0.7, 0.7);
}

.slider::after {
	content: "";
	display: inline-block;
	width: var(--toggle-diameter);
	height: var(--toggle-diameter);
	background-color: #fff;
	border-radius: calc(var(--toggle-diameter) / 2);
	position: absolute;
	top: var(--button-toggle-offset);
	transform: translateX(var(--button-toggle-offset));
	box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
	transition: 0.3s all ease-in-out;
}

.switch input[type="checkbox"]:checked+.slider {
	background-color: var(--color-green);
}

.switch input[type="checkbox"]:checked+.slider::after {
	transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
	box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switch input[type="checkbox"] {
	display: none;
}

.switch input[type="checkbox"]:active+.slider::after {
	width: var(--toggle-wider);
}

.switch input[type="checkbox"]:checked:active+.slider::after {
	transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}

/* checkbox-div */
</style>