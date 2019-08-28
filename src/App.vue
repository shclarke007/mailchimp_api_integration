<template>
  <div id="app">
    <user-form @submit-form="handleFormSubmit"/>
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue'

export default {
  name: 'app',
  components: {
    UserForm
  },
  methods:{
    handleFormSubmit(){

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
