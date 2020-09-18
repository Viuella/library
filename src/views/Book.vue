<template>
    <div>
        <!--<div>{{book.title}}</div>
        <div>{{book.author}}</div>
        <div>{{book.description}}</div>-->
        <form @submit.prevent="submitHandler">
            <div class="input-field s6">
                <input  id="title" v-model="title" type="text" class="validate" required>
                <label for="title">Название книги</label>
            </div>
            <div class="input-field s6">
                <input id="author" v-model="author" type="text" class="validate" required>
                <label for="author">Автор книги</label>
            </div>
            <div class="input-field s6">
                <input id="description" v-model="description" type="text" class="validate" required>
                <label for="description">Описание</label>
            </div>
            <button class="btn" type="submit">Сохранить изменения</button>
            <button class="btn">Отменить изменения</button>
        </form>
    </div>
</template>

<script>
    export default {
        computed: {
            book() {
                return this.$store.getters.bookById(+this.$route.params.id);
            }
        },
        data: () => ({
            title: '',
            author: '',
            description: '',
        }),
        mounted() {
            this.title = this.book.title,
            this.author = this.book.author,
            this.description = this.book.description,
            //M.updateTextFields()
            setTimeout( () => {
                M.updateTextFields()
            },0)
        },
        methods: {
            submitHandler() {
                this.$store.dispatch('updateBook', {
                    id: this.book.id,
                    title: this.title,
                    author: this.author,
                    description: this.description,
                });
                this.$router.push('/list');
            }
        }
    }
</script>

<style scoped>

</style>