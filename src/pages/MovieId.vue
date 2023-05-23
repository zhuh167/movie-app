<template>
    <main class="main">
        <ContentId type="movie"/>
    </main>
</template>

<script setup>
import ContentId from '@/components/ContentId/ContentId.vue';
import { ref, inject, onUpdated, onBeforeUnmount } from 'vue'
import { useRoute  } from 'vue-router'
import { useInfoId } from '@/stores/infoId'
import { useActors } from '@/stores/actors'

let actors = useActors()
let infoId = useInfoId()

const route = useRoute()

const reload = inject('reload')

let path = ref(null)
path = route.fullPath


onUpdated(() => {   
    if(route.fullPath != path) {
        reload()
    }
})

onBeforeUnmount(() => {
    infoId.movie = null
    actors.actorsMovie = null   
})




</script>

<style lang="scss" scoped>

</style>