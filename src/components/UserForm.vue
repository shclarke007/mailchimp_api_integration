<template>
  <section class="flex flex-col items-center mt-12">
    <form action="POST" @submit="submitForm" class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <div class="py-4">
      <h1 class="text-xl">Sign up to our newsletter</h1>
      <h2 class="text-md">Fill in your details below:</h2>
    </div>
      <label for="name" class="block text-gray-700 text-md font-bold mb-2">Name:</label>
      <input type="text" id="name" v-model="form_data.name" placeholder="Full name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"/>
      <label for="email" class="block text-gray-700 text-md font-bold mb-2">Email:</label>
      <input type="text" id="email" v-model="form_data.email" placeholder="Email address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      <div class="flex items-center justify-between mt-8">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign up!</button>
      </div>
      
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
  },
  methods:{
    submitForm(){
      this.$emit('form-submitted', this.form_data)
    }
  }
}
</script>

<style>

</style>
