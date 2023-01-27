<template>
	<div class="div-register">
		<div class="div-register-main ">
			<div class="container div-container">
				<h4>แก้ไขข้อมูลสมาชิก</h4>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">ชื่อผู้รับผิดชอบ:</label></div>
					<div class="col-sm-10">
						<input v-model="form.responsible_person" id="input_responsible_person" type="text" placeholder="Enter responsible person"
							class="form-control">
						<span id="input_responsible_person_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">กลุ่มงาน:</label></div>
					<div class="col-sm-10">
						<input v-model="form.work_group" id="input_work_group" type="text" placeholder="Enter work group"
							class="form-control">
						<span id="input_work_group_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">งาน:</label></div>
					<div class="col-sm-10">
						<input v-model="form.work" id="input_work" type="text" placeholder="Enter work"
							class="form-control">
						<span id="input_work_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">เบอร์ผู้ส่งซ่อม:</label></div>
					<div class="col-sm-10">
						<input v-model="form.phone" id="input_phone" type="text" placeholder="Enter phone"
							class="form-control">
						<span id="input_phone_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">อุปกรณ์:</label></div>
					<div class="col-sm-10">
						<input v-model="form.equipment" id="input_equipment" type="text" placeholder="Enter equipment"
							class="form-control">
						<span id="input_equipment_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">ชื่อผู้แจ้งซ่อม:</label></div>
					<div class="col-sm-10">
						<input v-model="form.name_sender" id="input_name_sender" type="text" placeholder="Enter name sender"
							class="form-control">
						<span id="input_name_sender_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">รหัสคุรุภัณฑ์:</label></div>
					<div class="col-sm-10">
						<input v-model="form.commodity_code" id="input_commodity_code" type="text" placeholder="Enter commodity code"
							class="form-control">
						<span id="input_commodity_code_err" class="err-msg-Register"></span>
					</div>
				</div>
				<!-- <div class="row">
					<div class="col-sm-2"><label for="textarea-small">Ip Address:</label></div>
					<div class="col-sm-10">
						<input v-model="form.ip_address" id="input_ip_address" type="text" placeholder="Enter ip address"
							class="form-control">
						<span id="input_ip_address_err" class="err-msg-Register"></span>
					</div>
				</div> -->
				<!-- <div class="row">
					<div class="col-sm-2"><label for="textarea-small">อื่นๆ:</label></div>
					<div class="col-sm-10">
						<input v-model="form.other" id="input_other" type="text" placeholder="Enter other"
							class="form-control">
						<span id="input_other_err" class="err-msg-Register"></span>
					</div>
				</div> -->
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">ปันหา/อาการ:</label></div>
					<div class="col-sm-10">
						<input v-model="form.problem_symptom" id="input_problem_symptom" type="text" placeholder="Enter problem symptom"
							class="form-control">
						<span id="input_problem_symptom_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">ความต้องการ:</label></div>
					<div class="col-sm-10">
						<input v-model="form.requirements" id="input_requirements" type="text" placeholder="Enter requirements"
							class="form-control">
						<span id="input_requirements_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="register-div-button "><button type="button" class="btn btn-primary"
						@click="Register(), validate_Register()">บันทึก</button></div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';
import { URL_API,URL_GET_INFRMATION_ALL,URL_PUT_INFRMATION,URL_PUT_INFRMATION_ADDMIND ,URL_GET_INFRMATION_BYID} from '../constants';
import Swal from 'sweetalert2';

				// user_id:"",
				// staus:"",
				// work_group:"",
				// work:"",
				// phone:"",
				// computer_name:"",
				// responsible_person:"",
				// commodity_code:"",
				// ip_address:"",
				// equipment:"",
				// other:"",
				// problem_symptom:"",
				// requirements:"",
				// name_sender:"",
				// name_responsible:"",
export default {
	name: "edit_infor",
	data() {
		return {
			form: {
				responsible_person: "",
				work_group: '',
				work: '',
				phone: '',
				equipment: "",
				name_sender: '',
				commodity_code: '',
				// ip_address: '',
				// other: '',
				problem_symptom: '',
				requirements: ''
			},
			responsible_person: []
		};
	},

methods: {
		validate_Register() {
			let check = true
			if (!this.form.responsible_person) {
				check = false
				document.getElementById('input_responsible_person').style.border = '3px solid red'
				document.getElementById('input_responsible_person_err').innerHTML =
					'please enter responsible_person'
			}
			if (!this.form.work_group) {
				check = false
				document.getElementById('input_work_group').style.border = '3px solid red'
				document.getElementById('input_work_group_err').innerHTML =
					'please enter work_group'
			}
			if (!this.form.work) {
				check = false
				document.getElementById('input_work').style.border = '3px solid red'
				document.getElementById('input_work_err').innerHTML =
					'please enter work'

			}if (!this.form.phone) {
				check = false
				document.getElementById('input_phone').style.border = '3px solid red'
				document.getElementById('input_phone_err').innerHTML =
					'please enter phone'
			}
			if (!this.form.equipment) {
				check = false
				document.getElementById('input_equipment').style.border = '3px solid red'
				document.getElementById('input_equipment_err').innerHTML =
					'please enter equipment'
			}
			if (!this.form.name_sender) {
				check = false
				document.getElementById('input_name_sender').style.border = '3px solid red'
				document.getElementById('input_name_sender_err').innerHTML =
					'please enter name sender'
			}
			if (!this.form.commodity_code) {
				check = false
				document.getElementById('input_commodity_code').style.border = '3px solid red'
				document.getElementById('input_commodity_code_err').innerHTML =
					'please enter commodity code'
			}
			if (!this.form.problem_symptom) {
				check = false
				document.getElementById('input_problem_symptom').style.border = '3px solid red'
				document.getElementById('input_problem_symptom_err').innerHTML =
					'please enter problem symptom'
			}
			if (!this.form.requirements) {
				check = false
				document.getElementById('input_requirements').style.border = '3px solid red'
				document.getElementById('input_requirements_err').innerHTML =
					'please enter requirements'
			}
			
			return check
		},

    setFORMON() {
        $nuxt.$store.commit('steformON')
        // this.getformon = this.$store.state.formon
    },
 
    Register() {
		const getid = this.$route.query.id
        console.log(this.validate_Register());
        if (this.validate_Register()) {
            axios.put(`${URL_PUT_INFRMATION_ADDMIND}/${getid}`, {

                responsible_person: this.form.responsible_person,
                work_group: this.form.work_group,
                work: this.form.work,
                phone: this.form.phone,
                equipment: this.form.equipment,
                name_sender: this.form.name_sender,
                commodity_code: this.form.commodity_code,
                // ip_address: this.form.ip_address,
                // other: this.form.other,
                problem_symptom: this.form.problem_symptom,
                requirements: this.form.requirements,


				

            }).then(response => {
                console.log('post', response);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "บันทึกสำเร็จ",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // window.location.reload(0)
                    this.setFORMON()
                });

            })
        }else {
            Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "มีข้อมูลว่าง",
                    text:'กรุณาเช็คข้อมูล',
                    showConfirmButton: false,
                    timer: 5500
                })
        }
    }
},

mounted() {
		//getid
		var id = this.$route.query.idex
		// var id = this.$route.query.id_repair_i

		console.log(this.$route.query.id_repair_i);
		axios.get(`${URL_GET_INFRMATION_ALL}`).then(response => {
			console.log(response);

			this.form.responsible_person = response.data.results[id].responsible_person
			this.form.work_group = response.data.results[id].work_group
			this.form.work = response.data.results[id].work
			this.form.phone = response.data.results[id].phone
			this.form.equipment = response.data.results[id].equipment
			this.form.name_sender = response.data.results[id].name_sender
			this.form.commodity_code = response.data.results[id].commodity_code
			// this.form.ip_address = response.data.results[id].ip_address
			// this.form.other = response.data.results[id].other
			this.form.problem_symptom = response.data.results[id].problem_symptom
			this.form.requirements = response.data.results[id].requirements

		})
	},

watch: {
	'form.recipients'() {
			if (this.form.responsible_person) {
				document.getElementById('input_recipients').style.border = '0px solid red'
				document.getElementById('input_recipients_err').innerHTML = ''
			} else {
				document.getElementById('input_recipients').style.border = '3px solid red'
				document.getElementById('input_recipients_err').innerHTML =
					'please enter recipients'
			}
		},
		'form.positions'() {
			if (this.form.work_group) {
				document.getElementById('input_positions').style.border = '0px solid red'
				document.getElementById('input_positions_err').innerHTML = ''
			} else {
				document.getElementById('input_positions').style.border = '3px solid red'
				document.getElementById('input_positions_err').innerHTML =
					'please enter positions'
			}
		},
		'form.work'() {
			if (this.form.work) {
				document.getElementById('input_work').style.border = '0px solid red'
				document.getElementById('input_work_err').innerHTML = ''
			} else {
				document.getElementById('input_work').style.border = '3px solid red'
				document.getElementById('input_work_err').innerHTML =
					'please enter work'
			}
		},
			'form.phone'() {
			if (this.form.phone) {
				document.getElementById('input_phone').style.border = '0px solid red'
				document.getElementById('input_phone_err').innerHTML = ''
			} else {
				document.getElementById('input_phone').style.border = '3px solid red'
				document.getElementById('input_phone_err').innerHTML =
					'please enter phone'
			}
		},
		'form.equipment'() {
			if (this.form.equipment) {
				document.getElementById('input_equipment').style.border = '0px solid red'
				document.getElementById('input_equipment_err').innerHTML = ''
			} else {
				document.getElementById('input_equipment').style.border = '3px solid red'
				document.getElementById('input_equipment_err').innerHTML =
					'please enter equipment'
			}
		},
		'form.name_sender'() {
			if (this.form.name_sender) {
				document.getElementById('input_name_sender').style.border = '0px solid red'
				document.getElementById('input_name_sender_err').innerHTML = ''
			} else {
				document.getElementById('input_name_sender').style.border = '3px solid red'
				document.getElementById('input_name_sender_err').innerHTML =
					'please enter name sender'
			}
		},
		'form.commodity_code'() {
			if (this.form.commodity_code) {
				document.getElementById('input_commodity_code').style.border = '0px solid red'
				document.getElementById('input_commodity_code_err').innerHTML = ''
			} else {
				document.getElementById('input_commodity_code').style.border = '3px solid red'
				document.getElementById('input_commodity_code_err').innerHTML =
					'please enter commodity code'
			}
		},
		'form.problem_symptom'() {
			if (this.form.problem_symptom) {
				document.getElementById('input_problem_symptom').style.border = '0px solid red'
				document.getElementById('input_problem_symptom').innerHTML = ''
			} else {
				document.getElementById('input_problem_symptoml').style.border = '3px solid red'
				document.getElementById('input_problem_symptom').innerHTML =
					'please enter problem symptom'
			}
		},'form.requirements'() {
			if (this.form.requirements) {
				document.getElementById('input_requirements').style.border = '0px solid red'
				document.getElementById('input_requirements_err').innerHTML = ''
			} else {
				document.getElementById('input_requirements').style.border = '3px solid red'
				document.getElementById('input_requirements_err').innerHTML =
					'please enter requirements'
			}
		},
},
computed: {},
components: {}
}
</script>

<style>
.div-register {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	margin-top: 40px;
	z-index: 1;
}

.div-register-main {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	/* background-color: #2D3142; */
	width: 60%;
	min-height: 640px;
	align-items: center;
	border-radius: 10px;
	background: linear-gradient(225deg, #f0f0f0, #cacaca);
	box-shadow: -29px 29px 58px #8f8f8f,
		29px -29px 10px #ffffff;
}

.div-container {
	display: flex;
	row-gap: 40px;
	flex-direction: column;
	margin: 20px 0px 20px 0px;
}

.register-div-button {
	display: flex;
	justify-content: center;
}

@media screen and (max-width: 900px) {
	.div-register-main {

		width: 85%;
	}

	@media screen and (max-width: 700px) {
		.div-register-main {
			width: 90%;
		}
	}
}
</style>



