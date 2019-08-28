<template>
  <section class="fw-full max-w-xs">
    <div>
      <h1>Sign up to our newsletter</h1>
      <h2>Fill in your details below:</h2>
    </div>
    <form action="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form_data.name"/>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="form_data.email"/>
    </form>
  </section>
</template>

<script>
export default {
  name: 'UserForm',
  data(){
    return{
      form_data: {
        name: '',
        email: ''
      }
    }
  }
}
</script>

<style>

</style>
