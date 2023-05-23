<template>
    <main class="main">
        <Content type="tv"/>
    </main>
</template>

<script setup>
import Content from '../components/Content/Content.vue';
import { onBeforeUnmount } from 'vue'
import { usePopular } from '@/stores/popular'

const popular = usePopular()

onBeforeUnmount(() => {
    popular.popularTvs = null
})


</script>

<style lang="scss" scoped>

</style>