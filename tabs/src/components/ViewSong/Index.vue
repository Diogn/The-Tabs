<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6 class="mt-2">
        <tabs :song="song" />
      </v-flex>

      <v-flex xs6 class="mt-2 ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import Tabs from './Tabs'
import Lyrics from './Lyrics'
import YouTube from './YouTube'
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata, YouTube, Lyrics, Tabs
  }
}
</script>

<style scoped>

</style>
