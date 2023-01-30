<template>
  <div class="">
    <nav class="menu-bar-layouts">
      <div
        class="group-layouts"
        @click="$router.push({ path: '/', replace: true })"
      >
        <!-- <img class="logo-img" src="~/~/img/LogoMain.png" alt="" width="50px"> -->
        <li class="item-layouts title-layouts" @click="setUSER()">
          ระบบแจ้งซ่อม
          <!-- {{ getnewUSER }} -->
        </li>
        <label>Repair Notification System</label>
      </div>
      <div class="group-layouts">
        <div class="item-MenuDropdown">
          <div class="box001"></div>
          <button
            @click="MenuDropdown = !MenuDropdown"
            class="Menu_item1"
            :class="MenuDropdown ? '' : 'Menu_off'"
          >
            <b>Menu</b>
          </button>
          <div class="Menu_item2" :class="MenuDropdown ? '' : 'Menu_off2'">
            <div>
              <li class="p-1" @click="checkAlert()">user</li>
            </div>
            <div>
              <li class="p-1" @click="logout()">Log Out</li>
            </div>
          </div>
        </div>
        <div class="button-B" v-if="!getIndex == '1'">
          <button @click="$router.back(1)">
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
              ></path>
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
    </nav>
    <Nuxt />
    <!-- <Receive_Repair :stateON="statusON" /> -->
  </div>
</template>
<script>
import Receive_Repair from "../pages/Receive_Repair.vue";
import axios from "axios";
import {
  URL_GET_ALL_REQ,
  URL_GET_REQ,
  URL_GET_USER,
  URL_IP,
} from "../constants";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      MenuDropdown: false,
      get_acessToken: "",
      getIndex: "",
      statusON: "x",
    };
  },
  computed: {
    mode() {
      return this.$store.state.counter;
    },
    getnewUSER() {
      return this.$store.state.newUSER;
    },
  },
  methods: {
    submitSearch() {
      localStorage.setItem("acessToken", "AA");
    },
    logout() {
      localStorage.removeItem("acessToken");
      localStorage.removeItem("users_id");
      this.$store.commit("steUSER", null);
      // window.location.replace(`/login0`)
    },
    increment() {
      this.$store.commit("increment");
    },
    setUSER() {
      var id = localStorage.users_id;
      axios.get(`${URL_GET_USER}/${id}`).then((response) => {
        this.$store.commit("steUSER", response.data.results[0]);
        // console.log('home:',response.data.results[0]);
      });
    },

    checkAlert() {
      var USER_STAUS = this.$store.state?.newUSER?.user_status;
      if (USER_STAUS === "admin") {
        var audio = new Audio();
        audio.src =
          "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg";
        // audio.src = "https://media1.vocaroo.com/mp3/17RnRCYXCMRN";

        audio.play();

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: `มีการแจ้งซ่อม `,
          text: `จำนวน ${this.$store.state.statusON.lengthdata} การแจ้งซ่อม`,
        });
      }
    },
  },
  mounted() {
    this.setUSER();

				audio.play();


    setInterval(() => {
      axios.get(`${URL_IP}/state/?staus=รอตอบรับ`).then((response) => {
        var status = response.data;
        this.$store.commit("setstatusON", status);
        // console.log('status "รอตอบรับ":', status);
      });
    }, 5000);
    setInterval(() => {
      var gat = localStorage.getItem("acessToken");

      if (gat) {
        this.get_acessToken = true;
      } else {
        this.get_acessToken = false;
      }
    }, 1000);
  },

				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 10000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener('mouseenter', Swal.stopTimer)
						toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				})

				Toast.fire({
					icon: 'warning',
					title: `มีการแจ้งซ่อม `,
					text: `จำนวน ${this.$store.state.statusON.lengthdata} การแจ้งซ่อม`,
				})

			}


		}


	},
	mounted() {
		this.setUSER()

		setInterval(() => {
			this.getIndex = this.$route.query.Index
		}, 10);

		setInterval(() => {
			axios.get(`${URL_IP}/state/?staus=รอตอบรับ`).then(response => {
				var status = response.data
				this.$store.commit('setstatusON', status)
				// console.log('status "รอตอบรับ":', status);
			});
		}, 5000);
		setInterval(() => {
			var gat = localStorage.getItem('acessToken')

			if (gat) {
				this.get_acessToken = true
			} else {
				this.get_acessToken = false
			}



		}, 1000);

	},

	watch: {
		"$store.state.statusON.lengthdata"() {
			if (this.$store.state.statusON.lengthdata == 0) {

			} else {
				this.checkAlert()
			}

		},
		get_acessToken() {
			if (!this.get_acessToken) {
				this.$router.push('/login0');
			} else {

			}
		}
	},
	components: { Receive_Repair }
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");

* {
  font-family: "Chakra Petch", sans-serif;
}

br {
  width: 50px;
}

.menu-bar-layouts {
  background-color: #144272;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 2;
}

.item-layouts {
  color: white;
  background-color: transparent;
  font-size: 25px;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
}

.group-layouts label {
  color: rgba(255, 255, 255, 0.49);
  margin-left: -160px;
  margin-top: 40px;
  position: absolute;
  font-size: 13px;
}

.logo-img {
  display: inline-flex;
  margin: 0px 0px 5px 20px;
}

.item-layouts.title-layouts {
  font-weight: 10;
}

/* .item-layouts:hover {
	background-color: rgba(0, 0, 0, 0.1);
} */

/* -maiu */

.item-MenuDropdown {
  color: white;
  font-size: 18px;
  display: flex;
  width: 170px;
  height: auto;
  /* border: 2px solid #ff0000; */
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 17px;
}

.Menu_item1 {
  font-size: 16px;
  display: flex;
  /* top: 21px; */
  color: rgb(255, 255, 255);
  width: 100px;
  height: 40px;
  background-color: #2c74b3;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0px 0px;
  /* box-shadow: rgb(40 73 106) -5px 5px 0px 0px; */
  transition: all 0.3s ease;
  z-index: 2;
  border: none;
}

.Menu_item1:hover {
  box-shadow: #1e4e77 0px 0px 0px 0px;
}

.Menu_off {
  border-radius: 8px;
  /* box-shadow: #1e4e77 -5px 5px 0px 0px */
}

.Menu_item2 {
  display: flex;
  color: rgb(255, 255, 255);
  width: 100px;
  height: auto;
  background-color: #2c74b3;
  justify-content: center;
  position: absolute;
  margin: 40px;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px 5px 15px;
  border-radius: 0px 0px 12px 12px;
  transition: all 0.3s ease;
  top: 0px;
  z-index: 1;
}

.Menu_off2 {
  top: -120px;
  transition: all 0.3s ease;
}

.Menu_item2 li {
  color: #ffffff;
  font-size: 13px;
  width: 100%;
  cursor: pointer;
}

.Menu_item2 div {
  width: 80%;
  border-radius: 5px;
  /* padding: 0px 0px 0px 15px; */
  /* background-color: #133557; */
}

.Menu_item2 div:hover {
  background-color: #133557;
}

.box001 {
  display: flex;
  position: absolute;
  width: 100px;
  height: 40px;
  background-color: #144272;
  margin-top: -20px;
  z-index: 2;
}

/* end -maiu */
.button-B {
  display: flex;
  position: absolute;
  top: 80px;
  right: 40px;
  z-index: 0;
  transform: scale(0.8, 0.8);
}

.button-B button {
  display: flex;
  height: 3em;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee4b;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  background: #fff;
  border: 2px solid #000000;
}

.button-B button > svg {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 20px;
  transition: all 0.4s ease-in;
}

.button-B button:hover > svg {
  font-size: 1.2em;
  transform: translateX(-5px);
}

.button-B button:hover {
  /* box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff; */
  transform: translateY(-2px);
}

.err_not_item {
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* background-color: red; */
}

.err_not_item .item {
  background-color: #ff00004d;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  border-radius: 5px;
  text-align: -webkit-center;
}

body::-webkit-scrollbar {
	width: 15px;
	/* background-color: #cecece7b; */

}
body::-webkit-scrollbar-button {
    display: block;
    background-color: #b91c1c;
    background-repeat: no-repeat;   
    background-size: 50%;
    background-position: center;
}

body::-webkit-scrollbar-button:vertical:start:increment {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/7e/Chevron-up.svg');  
	border-radius:  0px 0px 5px 5px; 
	height: 20px;
}

body::-webkit-scrollbar-button:vertical:start:decrement {
    display: none;
}

body::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
}

body::-webkit-scrollbar-button:vertical:end:decrement {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ee/Chevron-down.svg');   
	border-radius: 5px 5px 0px 0px;
	height: 20px;
}
body::-webkit-scrollbar-button {
	background-color: #ff7300c9;
	
}

body::-webkit-scrollbar-track {
	/* background-color: #cecece7b; */
	position: absolute;
}

body::-webkit-scrollbar-thumb {
	background-color: #0062ff67;
	border-radius: 12px ;
}
</style>