<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="List Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
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
              @click="navigateTo
              ({name: 'song', params: {songId: song.id}})"
              >View</v-btn>
            </v-flex>

            <v-flex xs6>
              <img :src="song.albumImageUrl" alt="albumImg" class="album-image">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
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
