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

let googleApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    user: {},
    events: [],
    event: {},
    pending: [],
    coords: {}
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
    },
    setRSVP(state, payload) {
      state.pending.push(payload)
    },
    setMyEvents(state, payload) {
      state.events.push(payload)
    },
    setCoords(state, payload) {
      state.coords = payload
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

    //SECTION -- PROFILE --
    async editProfile({ commit, dispatch }, payload) {
      try {
        let newInfo = await api.put(`/user/${payload._id}`, payload)
        commit('setUser', newInfo.data)
      } catch (error) {
        console.error(error)
      }
    },
    async removeAllergy({ commit, dispatch }, payload) {
      try {
        let index = payload.user.allergies.indexOf(payload.allergy)
        let deleted = payload.user.allergies.splice(index, 1)
        let test = await api.put(`/user/${payload.user._id}`, payload.user)
        commit('setUser', payload.user)

        console.log(deleted);

      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION 

    //SECTION -- GET/DELETE/EDIT/CREATE EVENTS --
    async getEventInfo({ commit, dispatch, state }, payload) {
      try {
        let event = await api.get('/events/' + payload.pin)
        commit('setEvent', event.data)
        dispatch('getCoords', state.event.place.replace(/ /g, "+"))
      } catch (error) {
        console.error(error)
      }
    },
    async getEventForList({ commit }, payload) {
      try {
        let event = await api.get('/events/' + payload.pin)
        commit('setMyEvents', event.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createEvent({ commit, dispatch }) {
      try {
        let pin = Math.floor(Math.random() * 9999999)
        let pinString = pin.toString()
        let output
        for (let i = 0; i < 7; i++) {
          if (pinString.length == 7) {
            output = pinString
          } else if (pinString.length < 7) {
            pinString = "0" + pinString
          }
        }
        let newEvent = await api.post(`/events`, { pin: output })
        commit('setEvent', newEvent.data)
      } catch (error) {
        console.error(error)
      }
    },

    async editEvent({ commit, dispatch }, payload) {
      try {
        let mainCourse = await api.put('/events/' + payload.eventId, payload)
        dispatch('getEventInfo', payload)
      } catch (error) {
        console.error(error)
      }
    },

    async cancelEvent({ commit, dispatch }, payload) {
      try {
        let event = await api.delete('/events/' + payload.pin)
      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION 

    //SECTION -- RSVP --
    async setRSVP({ commit }, payload) {
      let something = await api.put('/events/' + payload.eventId + "/attendee", payload)
    },
    async setPending({ commit }, payload) {
      try {
        let data = await api.post('/events/' + payload.eventId + '/join', payload)
      } catch (error) { console.error(error) }
    },

    async joinEvent({ commit, dispatch }, payload) {
      try {
        let data = await api.put('/user', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async addPlusOnes({ commit, dispatch }, payload) {
      try {
        let dmoney = await googleApi.get(`json?address=${payload}&key=AIzaSyAAYXjnMSg4R7_uURpraaqY2ljK5F7M08k`)
        commit('setCoords', dmoney.data.results[0])
        let plusOnes = await api.put(`events/${this.state.event._id}/plusOnes`, payload)
      } catch (error) {
        console.error(error)
      }
    },
    async bringingThings({ commit, dispatch }, payload) {
      try {
        let data = await api.put('/events/' + payload.eventId + '/bringing', payload)
      } catch (error) {
        console.error(error)
      }
    },

    //!SECTION 

    //SECTION -- MAP --
    async setAddress({ commit, dispatch }, payload) {
      try {
        let data = await api.put(`/events/${payload.eventId}`, payload)
        dispatch('getEventInfo', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async getCoords({ commit, dispatch }, payload) {
      try {
        let dmoney = await googleApi.get(`json?address=${payload}&key=AIzaSyAAYXjnMSg4R7_uURpraaqY2ljK5F7M08k`)
        commit('setCoords', dmoney.data.results[0])
      } catch (error) {

      }
    },

    //!SECTION 

  }
})
