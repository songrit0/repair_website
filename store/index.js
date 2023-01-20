export const state = () => ({
  counter: 0,
  newUSER: "",
});

export const getters = {
  getCounter(state) {
    return state.counter;
  },
  getUSER(state) {
    return state.newUSER;
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  steUSER(state,payload){
	state.newUSER = payload
	// console.log(payload);
  }
};

export const actions = {
  async getapiUSER(state, payload) {
    return s
  },
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};
