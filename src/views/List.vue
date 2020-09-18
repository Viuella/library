<template>
    <div>
        <router-link :to="'/create/'" class="btn" style="margin:40px 0;">Добавить новую книгу</router-link>
        <h3>Список загруженных книг</h3>
        <table v-if="books.length">
            <thead>
            <tr>
              <th>Номер</th>
              <th>Название книги</th>
              <th>Автор книги</th>
              <th>Описание книги</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, idx) of books"
                :key="book.id">
                <td>{{idx + 1}}</td>
                <td>{{book.title}}</td>
                <td>{{book.author}}</td>
                <td>{{book.description}}</td>
                <td>
                    <router-link tag="button" class="btn btn-small"
                                 :to="'/book/' + book.id">
                        Изменить
                    </router-link>
                </td>
                <td>
                  <button class="btn" v-on:click="deleteBookHandler(book.id)">Удалить книгу</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-else>Нет загруженных книг</div>
    </div>
</template>






<script>
    export default {
        computed: {
            books() {
               return  this.$store.getters.books
            }
        },
      methods: {
        deleteBookHandler(id) {
          this.$store.dispatch('deleteBook', id);
        }
      }
    }
</script>

<style scoped>

</style>