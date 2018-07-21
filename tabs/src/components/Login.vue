<template>
<v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="orange">
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email@gmail.com"
            type="email"
            v-model="email"
            single-line
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            single-line
          ></v-text-field>

          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark
            class="orange"
            @click= "login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style scoped>

</style>
