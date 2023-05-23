<template>
    <Transition name="upcoming" mode="out-in">
        <div class="main__upcoming" v-if="getUpcomingArray">
            <UpcomingItem 
                v-for="(movie, idx) in getUpcomingArray" 
                :key="movie.id" 
                :movie="movie" 
                :idx="idx"
                :slideView="slideView" 
                :next="getUpcomingArray[idx + 1 == getUpcomingArray.length ? 0 : idx + 1]"
                @slideNext="slideNext" 
            />
        </div>
        <Loader v-else />
    </Transition>
</template>

<script setup>
import UpcomingItem from '../Upcoming/UpcomingItem.vue';
import { ref, onMounted, computed } from 'vue'
import { useUpcoming } from '@/stores/upcoming'

let upcomingStore = useUpcoming()

let slideView = ref(0)
let timeout = ref(null)

const getUpcomingArray = computed(() => upcomingStore.upcoming)

const slide = () => {
    if(getUpcomingArray.value.length - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(slide, 10000)
}

const slideNext = () => {
    clearTimeout(timeout)
    slide()
}

onMounted(() => {
    upcomingStore.getUpcoming()
    timeout = setTimeout(slide, 10000)
})


</script>

<style lang="scss" scoped>

</style>