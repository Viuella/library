import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: JSON.parse(localStorage.getItem('books') || '[]')
  },
  mutations: {
    createBook(state, book) {
      state.books.push(book)
      localStorage.setItem('books', JSON.stringify(state.books))
    },
    updateBook(state, {id, title, author, description}) {
      const books = state.books.concat()
      const index = books.findIndex(b => b.id === id)
      const book = books[index]

      books[index] = {...book, title, author, description}

      state.books = books
      localStorage.setItem('books', JSON.stringify(state.books))
    },
    deleteBook(state, id) {
      const books = state.books.concat()
     // const index = books.findIndex(b => b.id === id)
      //const book = books[index]
      //books.splice(index, 1)
     // state.books = books

      state.books = books.filter(b => b.id !== id)
      localStorage.setItem('books', JSON.stringify(state.books))
    }
  },
  actions: {
    createBook({commit}, book) {
      commit('createBook', book)
    },
    updateBook({commit}, book) {
      commit('updateBook', book)
    },
    deleteBook({commit}, book) {
      commit('deleteBook', book)
    }
  },
  getters: {
    books: s => s.books,
    bookById: s => id => s.books.find(b => b.id === id)
  },
  modules: {
  }
})
