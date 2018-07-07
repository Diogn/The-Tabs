<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="cyan">
      <span class="home-btn"
      @click="navigateTo({name: 'home'})">
        THE TABS
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
      @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn flat dark
      v-on:click="goBack">
        GoBack!
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    goBack () {
      window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/')
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
