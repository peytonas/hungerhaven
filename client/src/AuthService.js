import axios from 'axios'
let baseUrl = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = axios.create({
  baseURL: baseUrl + 'account/',
  timeout: 3000,
  withCredentials: true
})

export default class AuthService {
  static async Login(creds) {
    try {
      let res = await auth.post('login', creds)
      return res.data
    } catch (error) {
      throw new Error(`[login failed] : ${!error.response ? 'No response from server' : error.response.data.error}`)
    }
  }
  static async Register(creds) {
    try {
      let res = await auth.post('register', creds)
      return res.data
    } catch (error) {
      throw new Error(`[registration failed] : ${!error.response ? 'No response from server' : error.response.data.error}`)
    }
  }
  static async Logout() {
    try {
      let res = await auth.delete('logout')
      return true
    } catch (error) {
      throw new Error(`[logout failed] : ${!error.response ? 'No response from server' : error.response.data.error}`)
    }
  }
  static async Authenticate() {
    try {
      let res = await auth.get('authenticate')
      return res.data
    } catch (error) {
      throw new Error(`[login failed] : ${!error.response ? 'No response from server' : error.response.data.error}`)
    }
  }
  static async Edit(creds) {
    try {
      let res = await auth.put('edit', creds) //FIXME no route for this on the back end?
      return res.data
    } catch (error) {
      throw new Error(`[registration failed] : ${!error.response ? 'No response from server' : error.response.data.error}`)
    }
  }
}