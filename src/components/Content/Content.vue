<template>
    <div class="container" v-if="allContent.length > 0">
        <div class="main__content">
            <h2 class="main__content-title">
                {{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
            </h2>
            <div class="main__content-list">
                <ContentItem 
                    v-for="item in allContent" 
                    :key="item.id" 
                    :item="item" 
                    :type="type" 
                />
            </div>
        </div>
    </div>
    <Loader v-if="loading || allContent.length == 0" />
</template>

<script setup>
import Loader from '../UI/Loader.vue';
import ContentItem from './ContentItem.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { usePopular } from '@/stores/popular'


const popular = usePopular()

const props = defineProps({
    type: String
})


let page = ref(1)
let loading = ref(false)
let allContent = ref([])

const getContent = async () => {
    if (!loading.value) {
        loading.value = true            
        await popular.getPopular({type: props.type, page:page.value})
        let state = props.type == 'movie' ? popular.popularMovies : popular.popularTvs
        allContent.value.push(...state)
        loading.value = false
        page.value++
    }
}


onMounted(() => {
    window.onscroll = function() {
        if(window.scrollY + window.innerHeight >=  document.body.scrollHeight) {
        getContent()
      }
    }
    getContent()
})  


onBeforeUnmount(() => {
    window.onscroll = null  
})


</script>

<style lang="scss" scoped>

</style>