import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function saveDataToLocalStorage(field, data) {
  localStorage.setItem(field, JSON.stringify(data))
}
function loadFromLocalStorage(field) {
  return JSON.parse(localStorage.getItem(field) || '[]')
}

function saveBooks(state) {
  saveDataToLocalStorage('books', state.books)
}

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks(state, books) {
      state.books = books
    },
    createBook(state, book) {
      state.books.push(book)
    },
    updateBook(state, {id, title, author, description}) {
      const book = state.books.find(b => b.id === id)

      book.title = title
      book.author = author
      book.description = description
    },
    deleteBook(state, id) {
      state.books = state.books.filter(b => b.id !== id)
    }
  },
  actions: {
    loadBooks({commit}) {
      const books = loadFromLocalStorage('books')
      commit('setBooks', books)
    },
    createBook({commit, state}, book) {
      commit('createBook', book)
      saveBooks(state)
    },
    updateBook({commit, state}, book) {
      commit('updateBook', book)
      saveBooks(state)
    },
    deleteBook({commit, state}, book) {
      commit('deleteBook', book)
      saveBooks(state)
    }
  },
  getters: {
    books: s => s.books,
    bookById: s => id => s.books.find(b => b.id === id)
  },
  modules: {
  }
})
