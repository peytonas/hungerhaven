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
    user: {},
    events: [],
    event: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    resetState(state) {
      state.user = {}
    },
    setEvent(state, payload) {
      state.event = payload
    }
  },
  actions: {

    //SECTION -- LOGIN THINGS --
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
    },
    async authenticate({ commit, dispatch }) {
      try {
        let user = await AuthService.Authenticate()
        commit('setUser', user)
      } catch (error) {
        console.error(error)
      }
    },
    async register({ commit, dispatch }, payload) {
      try {
        let user = await AuthService.Register(payload)
        commit('setUser', user)
        router.push('/home')
      } catch (error) {
        console.error(error)
      }
    },

    //!SECTION 

    async editProfile({ commit, dispatch }, payload) {
      try {
        let newInfo = await api.put(`/user/${payload._id}`, payload)
        commit('setUser', newInfo.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getEventInfo({ commit }, payload) {
      try {
        let event = await api.get('/events/' + payload.pin)
        commit('setEvent', event.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createEvent({ commit, dispatch }) {
      try {
        let pin = Math.floor(Math.random() * 9999999)
        let output
        switch (pin.toString().length) {
          case 7:
            output = pin;
            break;
          case 6:
            output = '0' + pin;
            break;
          case 5:
            output = '00' + pin;
            break;
          case 4:
            output = '000' + pin;
            break;
          case 3:
            output = '0000' + pin;
            break;
          case 2:
            output = '00000' + pin;
            break;
          case 1:
            output = '000000' + pin;
            break;
        }
        let newEvent = await api.post(`/events`, { pin: output })
        commit('setEvent', newEvent.data)
      } catch (error) {
        console.error(error)
      }
    },
    async setRSVPno({ commit }, payload) {
      let something = await api.post('/events/' + payload.eventId, payload.declined)
      commit('setRSVP', payload)
    }
  }
})
