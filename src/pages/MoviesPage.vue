<template>
    <main class="main">
        <Content type="movie"/>
    </main>
</template>

<script setup>
import Content from '../components/Content/Content.vue';
import {  onBeforeUnmount } from 'vue'
import { usePopular } from '@/stores/popular'

const popular = usePopular()

onBeforeUnmount(() => {
    popular.popularMovies = null
})

</script>

<style lang="scss" scoped>

</style>