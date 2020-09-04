<template>
    <div>
        <div>Список загруженных книг</div>
        <table v-if="books.length">
            <thead>
            <tr>
                <th>
                    Название книги
                </th>
                <th>
                    Автор книги
                </th>
                <th>
                    Описание книги
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, idx) of books"
                :key="book.id">
                <td>{{idx + 1}}}</td>
                <td>{{book.title}}</td>
                <td>{{book.author}}</td>
                <td>{{book.description}}</td>
                <td>
                    <router-link tag="button" class="btn btn-small"
                                 :to="'/book/' + book.id">
                        Изменить
                    </router-link>
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
        }
    }
</script>

<style scoped>

</style>