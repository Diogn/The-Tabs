<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      {{ title }}
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>No data available.</slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hi Panel!'
    }
  }
}
</script>

<style scoped>
</style>
