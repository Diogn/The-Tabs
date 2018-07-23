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
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel, SongMetadata, YouTube, Lyrics, Tabs
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
.song {
  overflow: hidden;
  height: 330px;
  padding: 20px;
}
.album-image {
  width: 100%;
  margin: 0 auto;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
</style>
