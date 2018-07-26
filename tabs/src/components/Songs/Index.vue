<template>
  <v-layout>
    <v-flex xs6 class="mr-2">
      <songs-bookmarks />
    </v-flex>

    <v-flex xs6>
      <songs-search-panel class="mb-2"/>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel, SongsSearchPanel, SongsBookmarks
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
