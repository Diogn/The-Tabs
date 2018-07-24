<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <songs-search-panel class="mb-2"/>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel, SongsSearchPanel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
