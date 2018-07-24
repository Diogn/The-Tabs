<template>
  <div id="app">
    <v-app>
     <the-header />
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}
</style>
