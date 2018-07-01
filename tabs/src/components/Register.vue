/* eslint-disable */
<template>
  <div>
    <h1>Hellow Server!</h1>
    <input name="email"
    v-model="email"
    type="email"
    placeholder="e-Mail">
    <br>
    <input name="password"
    v-model="password"
    type="password"
    placeholder="password">
    <br>
    <button
      @click= "register">
      register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
