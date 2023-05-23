<template>
     <router-link :to="`${type}/${item.id}`" class="main__content-item">
        <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__content-img">
        <h2 class="main__content-name">{{ item.title || item.name }}</h2>
    </router-link>
</template>

<script setup>

import { imgUrl } from '@/static'

const props = defineProps({
    type: String,
    item: Object
})

</script>

<style lang="scss" scoped>

</style>