<template>
    <section class="main__video" v-if="content">
        <router-link :to="`${props.type}/`" class="main__video-title">
            <span>
                {{ props.type == 'movie' ? 'Фильмы': 'Сериалы'}}
            </span>
            <img src="@/assets/images/arrow.png" alt="" />
        </router-link>
        <Swiper 
            :modules="modules" 
            :space-between="25" 
            :navigation="true" 
            :breakpoints="swiperOptions.breakpoints"
        >
            <Swiper-slide 
                class="main__video-item" 
                v-for="(item, idx) in content" 
                :key="item.id"
                @click="getItem(item)"
            >
                <img 
                    v-lazy="imgUrLFull + item.backdrop_path" 
                    alt="" 
                    class="main__video-item-img" 
                />
                <router-link 
                    class="main__video-item-link" 
                    :to="props.type == 'movie' ?  '/movie/' + item.id : '/tv/' + item.id" 
                />
                <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
            </Swiper-slide> 
            <Swiper-slide>
                <router-link  :to="`${props.type}/`"  class="main__video-item">
                    {{ props.type == 'movie' ? 'Все фильмы': 'Все сериалы'}}
                </router-link>
            </Swiper-slide>
        </Swiper>
        <div class="main__inf" :class="{active: open}" ref="inf">
            <InfoBlock
            :type="type"
            :current="current"
            @close="close"
        />
        </div>
      
    </section>
    <Loader  v-else/>
</template>

<script setup>
import Loader from '../UI/Loader.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { ref, onMounted,computed, onUnmounted } from 'vue'
import { imgUrLFull } from '@/static'
import { usePopular } from '@/stores/popular'
import InfoBlock from '../InfoBlock/InfoBlock.vue';
import {  useInfoId } from '@/stores/infoId'


const props = defineProps(['type'])
const popular = usePopular()
let infoId = useInfoId()    

let modules = ref([Navigation])
let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1450: {
            slidesPerView: 5,
        },
    },
})
const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)

onMounted(() => {
    popular.getPopular({type: props.type})
})


let current = ref(null)
let inf = ref(null)
const open = ref(false)

const getItem = async item => {
    current.value = null
    await infoId.getMedia({type: props.type, id: item.id})
    current.value = props.type == 'movie' ? infoId.movie : infoId.tv
    open.value = true
    let infTop = inf.value.offsetTop;
    window.scrollTo({
        top: infTop - navHeight.offsetHeight,
        behavior: 'smooth'
    })
}

const close = () => {
    open.value = false
    current.value = null
    props.type == 'movie' ? infoId.movie = null : infoId.tv = null
}



</script>

<style lang="scss" scoped>

</style>