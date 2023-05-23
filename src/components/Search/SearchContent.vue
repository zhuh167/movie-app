<template>
    <router-link :to="`/${getType}/${item.id}`" class="main__content-item">
        <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__content-img">
        <h2 class="main__content-name">{{ item.title || item.name }}</h2>
    </router-link>
</template>

<script setup>

import { imgUrl } from '@/static'
import { computed } from 'vue'

const props = defineProps({
    item: Object
})

const getType = computed(() => props.item.media_type == 'movie' ? 'movie' : 'tv')


</script>

<style lang="scss" scoped>

</style>