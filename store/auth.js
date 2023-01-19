import axios from 'axios'
export const state = () => ({

})

export const mutations = {
}

export const actions = {
  async login(state, payload) {
    console.log('login_payload', payload)
    return await axios
      .post(
        ``,
        payload
      )
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);
          localStorage.setItem('acessToken', res.data.token)
          // localStorage.setItem("refreshToken", res.data.refresh)
          // return res.status
        }
        return res.status
      })
      .catch((err) => {
        return err.response
      })
  },


}

export const getters = {
}
