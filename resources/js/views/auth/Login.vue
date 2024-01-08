<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md">
        <h1 class="text-2xl font-semibold mb-6">Login Page</h1>
        
        <!-- Form -->
        <form @submit.prevent="login">
          <!-- Username Input -->
          <div class="mb-4">
            <label for="username" class="block text-gray-600 text-sm font-medium mb-2">Username:</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <!-- Password Input -->
          <div class="mb-6">
            <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Logging in...');
      },
    },
  };
  </script>
  