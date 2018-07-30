<template>
  <panel title="Song Metadata">
    <v-layout class="song">
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn dark
        class="cyan"
        :to="{
          name: 'song-edit',
          params () {
            return {
              songId: song.id
            }
          }
        }">Edit</v-btn>

        <v-btn dark
          v-if="isUserLoggedIn && !bookmark"
          class="cyan"
          @click="setAsBookmark">
        Set as Bookmark
        </v-btn>

        <v-btn dark
          v-if="isUserLoggedIn && bookmark"
          class="cyan"
          @click="unsetAsBookmark">
        Unset as Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img :src="song.albumImageUrl"
        alt="albumImg" class="album-image">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px 20px;
  height: 320px;
  overflow: hidden;
  margin: 20px;
}
.song-title {
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
}
.song-artist {
  font-size: 24px;
  font-weight: 500;
  Text-transform: capitalize;
}
.song-genre {
  font-size: 22px;
  text-transform: capitalize;
}
</style>
