<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form autocomplete="off"
            name="the-tabs-tracker">
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
          </form>

          <div class="danger-alert" v-html="error"></div>
          <br>
          <v-btn dark
            class="indigo darken-1"
            @click= "register">
            register
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: #FFF;
}
</style>
