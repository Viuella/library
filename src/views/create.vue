<template>
    <div class="row">
        <div class="col offset-s3">
            <h2>Добавление новой книги</h2>
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
                <button class="btn" type="submit">Добавить книгу</button>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "create",
        data: ()  => ({
            title:'',
            author: '',
            description: '',
        }),
        methods: {
            submitHandler() {
                const book = {
                    title: this.title,
                    author: this.author,
                    description: this.description,
                    id: Date.now()
                }
                this.$store.dispatch('createBook', book);
                this.$router.push('/list');
            }
        }
    }

</script>

<style scoped>

</style>