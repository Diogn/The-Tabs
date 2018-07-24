<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <h2>{{ title }}</h2>
      <slot name="action" />
    </v-toolbar>

    <div class="pt-2 pb-2">
      <slot>
        No content defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
