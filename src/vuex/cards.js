import appService from '../app.service.js'

const state = {
  cards: [],
  categoryid: ''
}

const getters = {
  cards: state => state.cards
}

const actions = {
  updateCategory: (context, categoryId) => {
    return new Promise((resolve) => {
      appService.getCards(categoryId)
        .then((data) => {
          context.commit('updateCategory', { categoryId, cards: data })
          resolve()
        })
    })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryId = category.categoryId
    state.cards = category.cards.data
  }
}

export default {
  // wrap the elements of this module in a namespace
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
