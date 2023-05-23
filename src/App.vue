<template>
  <div class="wrapper">
    <Navbar/>
    <Router-view v-if="isRouterAlive"/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import { ref, provide, nextTick } from 'vue'

const isRouterAlive = ref(true)

const reload = () => {
  isRouterAlive.value = false 
  nextTick(() => isRouterAlive.value = true)
  console.log('Working');
}     

provide('reload', reload)


</script>

<style lang="scss" scoped>

</style>