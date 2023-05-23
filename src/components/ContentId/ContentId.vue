<template>
    <div class="main__contentId">
        <Intro :typeMT="props.type" :currentMovie="getInfoId" />
        <Budget :currentMovie="getInfoId" />
        <Recommend :typeMT="props.type" v-if="getRecommend" :recommend="getRecommend"  />
    </div>
</template>

<script setup>
import Budget from './Budget.vue';
import Intro from './Intro.vue';
import Recommend from './Recommend.vue';
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRecommend } from '@/stores/recommend'
import { useInfoId } from '@/stores/infoId'

const infoId = useInfoId()
const recommends = useRecommend()   

const route = useRoute()

const props = defineProps(['type'])


const getInfoId = computed(() => props.type == 'movie' ? infoId.movie : infoId.tv)
const getRecommend = computed(() => props.type == 'movie' ? recommends.recomMovies : recommends.recomTvs)


onMounted( () => {
    
    setTimeout(() => {
    infoId.getMedia({type: props.type, id: route.params.id})
     recommends.getRecom({type: props.type, id: route.params.id })
    },500)
    
})



</script>

<style lang="scss" scoped>

</style>