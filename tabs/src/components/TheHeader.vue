<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="cyan">
      <router-link
        class="home-btn"
        tag="span"
        :to="{
          name: 'songs'
        }">
        THE TABS
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
      <v-btn flat dark
      v-if="!$store.state.isUserLoggedIn"
      :to="{
        name: 'register'
        }">
        Sign Up
      </v-btn>
      <v-btn flat dark
      v-if="!$store.state.isUserLoggedIn"
      :to="{
        name: 'login'
        }">
        Login
      </v-btn>
      <v-btn flat light
      v-if="$store.state.isUserLoggedIn"
      @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.home-btn {
  cursor: pointer;
}
.home-btn:hover {
  color: grey;
}
</style>
