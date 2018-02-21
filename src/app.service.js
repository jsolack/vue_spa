import axios from 'axios'

axios.defaults.baseURL = 'https://o2beta.gongos.com/vue_spa_rest_api/default/'
const imgPath = 'https://o2beta.gongos.com/vue_spa_rest_api/static/images/api/'
let data = {}

const appService = {
  getCards (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/api/entries/category/${categoryId}.json`)
        .then(response => {
          data['data'] = response.data.content
          data['imgPath'] = imgPath
          resolve(data)
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
