<template>
  <v-layout>
    <v-flex xs6 class="mr-2"
      v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>

    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs6: isUserLoggedIn
      }">
      <songs-search-panel class="mb-2"/>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
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
