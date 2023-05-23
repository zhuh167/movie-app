<template>
    <main class="main">
        <ContentId type="tv"/>
    </main>
</template>

<script setup>
import ContentId from '@/components/ContentId/ContentId.vue';
import { ref, inject, onUpdated, onBeforeUnmount } from 'vue'
import { useRoute,  } from 'vue-router'
import { useActors } from '@/stores/actors'

import { useInfoId } from '@/stores/infoId'

let actors = useActors()
let infoId = useInfoId()

const reload = inject('reload')

const route = useRoute()

let path = ref(null)
path = route.fullPath


onUpdated(() => {   
    if(route.fullPath != path) {
        reload()
    }
})

onBeforeUnmount(() => {
    infoId.tv = null
    actors.actorsTv = null   
})



</script>

<style lang="scss" scoped>

</style>