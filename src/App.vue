<template>
    <div id="app">
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
</style>