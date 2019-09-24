import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    resetState(state) {
      state.user = {}
    }
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        let user = await AuthService.Login(payload)
        commit('setUser', user)
        router.push('/home')
      } catch (error) {
        console.error(error)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
})
