<template>
	<div class="div-register">
		<div class="div-register-main ">
			<div class="container div-container">
				<h4>เพิ่มข้อมูลเจ้าหน้าที่</h4>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">recipients:</label></div>
					<div class="col-sm-10">
						<input v-model="form.recipients" id="input_recipients" type="text" placeholder="Enter recipients"
							class="form-control">
						<span id="input_recipients_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">positions:</label></div>
					<div class="col-sm-10">
						<input v-model="form.positions" id="input_positions" type="text" placeholder="Enter positions"
							class="form-control">
						<span id="input_positions_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">phone:</label></div>
					<div class="col-sm-10">
						<input v-model="form.phone" id="input_phone" type="text" placeholder="Enter phone"
							class="form-control">
						<span id="input_phone_err" class="err-msg-Register"></span>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><label for="textarea-small">email:</label></div>
					<div class="col-sm-10">
						<input v-model="form.email" id="input_email" type="text" placeholder="Enter email"
							class="form-control">
						<span id="input_email_err" class="err-msg-Register"></span>
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
import { URL_API,URL_GET_INFRMATION_ALL,URL_ADD_RECIPIENT,URL_PUT_INFRMATION_ADDMIND ,URL_GET_INFRMATION_BYID} from '../constants';
import Swal from 'sweetalert2';

export default {
	name: "edit_infor",
	data() {
		return {
			form: {
				recipients: "",
				positions: '',
				phone: '',
				email: '',
			},
			recipients: []
		};
	},

methods: {
		validate_Register() {
			let check = true
			if (!this.form.recipients) {
				check = false
				document.getElementById('input_recipients').style.border = '3px solid red'
				document.getElementById('input_recipients_err').innerHTML =
					'please enter recipients'
			}
			if (!this.form.positions) {
				check = false
				document.getElementById('input_positions').style.border = '3px solid red'
				document.getElementById('input_positions_err').innerHTML =
					'please enter positions'
			}
			if (!this.form.phone) {
				check = false
				document.getElementById('input_phone').style.border = '3px solid red'
				document.getElementById('input_phone_err').innerHTML =
					'please enter phone'
			}
			if (!this.form.email) {
				check = false
				document.getElementById('input_email').style.border = '3px solid red'
				document.getElementById('input_email_err').innerHTML =
					'please enter email'
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
            axios.post(`${URL_ADD_RECIPIENT}`, {

                recipients: this.form.recipients,
                positions: this.form.positions,
                phone: this.form.phone,
                email: this.form.email,

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

		// console.log(this.$route.query.id_repair_i);
		// axios.get(`${URL_ADD_RECIPIENT}`).then(response => {
		// 	console.log(response);

		// 	this.form.recipients = response.data.results[id].recipients
		// 	this.form.positions = response.data.results[id].positions
		// 	this.form.phone = response.data.results[id].phone
		// 	this.form.email = response.data.results[id].email

		// })
	},

watch: {
	// 'form.recipients'() {
	// 		if (this.form.recipients) {
	// 			document.getElementById('input_recipients').style.border = '0px solid red'
	// 			document.getElementById('input_recipients_err').innerHTML = ''
	// 		} else {
	// 			document.getElementById('input_recipients').style.border = '3px solid red'
	// 			document.getElementById('input_recipients_err').innerHTML =
	// 				'please enter recipients'
	// 		}
	// 	},
	// 	'form.positions'() {
	// 		if (this.form.positions) {
	// 			document.getElementById('input_positions').style.border = '0px solid red'
	// 			document.getElementById('input_positions_err').innerHTML = ''
	// 		} else {
	// 			document.getElementById('input_positions').style.border = '3px solid red'
	// 			document.getElementById('input_positions_err').innerHTML =
	// 				'please enter positions'
	// 		}
	// 	},
	// 	'form.phone'() {
	// 		if (this.form.phone) {
	// 			document.getElementById('input_phone').style.border = '0px solid red'
	// 			document.getElementById('input_phone_err').innerHTML = ''
	// 		} else {
	// 			document.getElementById('input_phone').style.border = '3px solid red'
	// 			document.getElementById('input_phone_err').innerHTML =
	// 				'please enter phone'
	// 		}
	// 	},
	// 		'form.email'() {
	// 		if (this.form.email) {
	// 			document.getElementById('input_email').style.border = '0px solid red'
	// 			document.getElementById('input_email_err').innerHTML = ''
	// 		} else {
	// 			document.getElementById('input_email').style.border = '3px solid red'
	// 			document.getElementById('input_email_err').innerHTML =
	// 				'please enter email'
	// 		}
	// 	},
		
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



