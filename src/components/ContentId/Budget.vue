<template>
    <div class="main__budjet" v-if="currentMovie">
    <div class="main__budjet-info">
      <span>Бюджет</span>
      <span>${{ currentMovie.budget }}</span>
    </div>
    <div class="main__budjet-info">
      <span>Сборы</span>
      <span>${{ currentMovie.revenue }}</span>
    </div>
    <div class="main__budjet-info">
      <span>Статус</span>
      <span>{{ currentMovie.status }}</span>
    </div>
    <div class="main__budjet-info">
      <span>Исходное название</span>
      <span>{{ currentMovie.original_title || currentMovie.original_name }}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['currentMovie'])

</script>

<style lang="scss" scoped>

</style>