<template>
    <Transition name="upcoming-item" mode="out-in">
    <div class="main__upcoming-item" v-if="slideView == idx">
      <img v-lazy="imgUrLFull + movie.backdrop_path" alt="" class="main__upcoming-item-img" />
      <div class="main__upcoming-content">
          <div class="main__upcoming-info">
            <h1 class="main__upcoming-content-title">{{ movie.title }}</h1>
            <p class="main__upcoming-content-text">{{ movie.overview }}</p>
            <BtnMore type="movie" :id="movie.id" />
          </div>
      </div>
      <div class="main__upcoming-next" @click="$emit('slideNext')">
        <img :src="imgUrl + next.backdrop_path" alt="" class="main__upcoming-next-img">
        <div class="main__upcoming-next-content">
          <span class="next">Следующий</span>
          <span class="main__upcoming-next-title">{{ next.title }}</span>
        </div>
        <div class="main__upcoming-next-line"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import BtnMore from '../UI/BtnMore.vue';
import { computed  } from 'vue';
import { imgUrLFull, imgUrl } from '@/static'
import { useUpcoming } from '@/stores/upcoming'

const upcomingStore = useUpcoming()



const props = defineProps({
    movie: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
    },
    slideView: {
      type: Number,
    },
})



</script>