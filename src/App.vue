<template>
    <div id="app">
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
</style>
