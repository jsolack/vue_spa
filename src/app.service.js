import axios from 'axios'

axios.defaults.baseURL = 'https://gongos-ds-vue-spa-api.azurewebsites.net/vue_spa_rest_api/default/'

axios.interceptors.request.use(function (config) {
  config.withCredentials = true
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const imgPath = 'https://gongos-ds-vue-spa-api.azurewebsites.net/vue_spa_rest_api/static/images/api/'

let data = {}

const appService = {
  getCards (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/api/entries/category/${categoryId}.json`)
        .then(response => {
          data['data'] = response.data.content
          data['imgPath'] = imgPath
          for (var i = 0; i < data.data.length; i++) {
            data.data[i]['img'] = data.imgPath + data.data[i]['img']
          }
          resolve(data)
        })
    })
  },
  getProfile () {
    return new Promise((resolve) => {
      axios.get(`/profile/profile.json`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      axios.post(`/user/jwt?username=${credentials.username}&password=${credentials.password}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(response => {
          reject(response.status)
        })
    })
  }
}

export default appService
