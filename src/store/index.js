import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: JSON.parse(localStorage.getItem('books') || '[]')
  },
  mutations: {
    createBook(state, book) {
      state.books.push(book);
      localStorage.setItem('books', JSON.stringify(state.books));
    }
  },
  actions: {
    createBook({commit}, book) {
      commit('createBook', book)
    }
  },
  getters: {
    books: s => s.books,
    bookById: s => id => s.books.find(b => b.id === id)
  },
  modules: {
  }
})
