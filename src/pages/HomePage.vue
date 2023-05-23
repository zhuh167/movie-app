<template>
    <main class="main">
        <Upcoming/>
        <Movies/>
        <Tvs/>
        <Top/>
    </main>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import Movies from '../components/MOT/Movies.vue';
import Tvs from '../components/MOT/Tvs.vue';
import Upcoming from '../components/Upcoming/Upcoming.vue';
import Top from '../components/Top/Top.vue';

import { useInfoId } from '@/stores/infoId'

const infoId = useInfoId()




onBeforeUnmount(() => {
    console.log('beforeun');
    infoId.movie = infoId.tv = null
})


</script>

<style lang="scss" scoped>

</style>