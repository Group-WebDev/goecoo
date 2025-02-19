import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { isNull } from "util";

Vue.use(VueAxios, axios)
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('user') || '',
    status: '',
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,

    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    // login({ commit }, user) {
    //   // return new Promise((resolve, reject) => {
    //     commit('auth_request')
    //     axios({ url: 'http://localhost:5000/admin', data: user, method: 'POST' })
    //       .then(resp => {
    //         const token = resp.data.token
    //         const user = resp.data.user
    //         localStorage.setItem('token', token)
    //         sessionStorage.setItem("authenticated", true)
    //         // Add the following line:
    //         axios.defaults.headers.common['Authorization'] = token
    //         commit('auth_success', token, user)
    //         // resolve(resp)
    //       })
    //       .catch(err => {
    //         commit('auth_error')
    //         localStorage.removeItem('token')
    //         reject(err)
    //       })
    //   // })
    // },
    // logout({ commit }) {
    //   // return new Promise((resolve) => {
    //     commit('logout')
    //     sessionStorage.setItem("authenticated", false)
    //     sessionStorage.removeItem('authenticated')
    //     localStorage.removeItem('token')
    //     delete axios.defaults.headers.common['Authorization']
    //     // resolve()
    //   // })
    // }
  },
  modules: {}
});