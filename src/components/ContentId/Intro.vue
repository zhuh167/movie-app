<template>
  <Transition name="infoblock" mode="out-in">
    <div class="main__media" v-if="currentMovie">
      <img :src="imgUrLFull + currentMovie.poster_path" alt="" class="main__media-poster" />
      <div class="main__media-block">
        <div class="main__media-left">
          <h1 class="main__media-left-title">{{ currentMovie.title || currentMovie.name }}</h1>
          <p class="main__media-left-text">{{ currentMovie.overview }}</p>
          <p class="main__media-left-janr">
            <span class="main__media-date">{{ new Date(currentMovie.release_date).getFullYear() || new
                Date(currentMovie.first_air_date).getFullYear()
            }},</span>
            <span v-for="(genres, idx) in currentMovie.genres" :key="genres.id">
              {{ genres.name }}
              <span v-if="idx < currentMovie.genres.length - 1">,</span>
            </span>
          </p>
          <Trailer />
        </div>
        <div class="main__media-right">
          <img :src="imgUrLFull + currentMovie.backdrop_path" alt="" />
        </div>
        <div class="main__media-actors">
          <h2 class="main__media-title">В главных ролях</h2>
          <div class="main__media-casts">
            <Actors :count="6" :id="currentMovie.id" :type="typeMT" />
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </Transition>
</template>

<script setup>


import { imgUrLFull } from '@/static'

const props = defineProps(['typeMT', 'currentMovie'])

</script>

<style lang="scss" scoped>

</style>