<template>
    <div class="main__info" >
      <img src="@/assets/images/close.svg" alt="" @click="$emit('close')" class="main__info-close">
     <Transition name="infoblock" mode="out-in">
      <div   class="main__info-block" v-if="current">
        <img :src="imgUrLFull + current.backdrop_path" alt="" class="main__info-img">
        <div class="main__info-content">
          <div class="main__info-content-block">
            <h2 class="main__info-content-title">{{ current.title || current.name }}</h2>
            <p class="main__info-content-text">{{ current.overview }}</p>
            <p class="main__info-content-date">
              <span>
                {{ 
                  new Date(current.release_date).getFullYear() ||
                  new Date(current.first_air_date).getFullYear()
                }},
              </span>
              <span v-for="(genres,idx) in current.genres" :key="genres.id">
                {{ genres.name}}
                <span v-if="idx < current.genres.length - 1" >,</span>
              </span>
            </p>
            <Actors :type="type" :id="current.id" :count="4" />
            <BtnMore :type="type"  :id="current.id"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>

import { imgUrLFull } from '@/static'
const props = defineProps(['current', 'type'])

</script>

<style lang="scss" scoped>

</style>