<template>
  <panel title="List Songs">
    <v-btn
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="cyan accent-3"
      fab
      light
      small absolute right middle>
      <v-icon>add</v-icon>
    </v-btn>

    <div class="song"
      v-for="song in songs"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>

          <v-btn dark
          class="cyan"
          :to="{
            name: 'song', params: {
              songId: song.id
            }
          }"
          >View</v-btn>
        </v-flex>

        <v-flex xs6>
          <img :src="song.albumImageUrl" alt="albumImg" class="album-image">
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  overflow: hidden;
  height: 330px;
  padding: 20px;
}
.album-image {
  width: 100%;
  margin: 20px auto;
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
