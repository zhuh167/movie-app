<template>
     <router-link class="more" :to="`${type}/` + id">
      <img src="@/assets/images/more.svg" alt="">
      <span class="more__text" >Подробнее</span>
    </router-link>  
</template>

<script setup>

let props = defineProps({
    id: Number,
    type: String
})

</script>

<style lang="scss" >


.more {
  padding: 10px 15px; 
  background: #149A03;
  border-radius: 10px;
  display: flex;
  width: max-content;
  gap: 15px;
  &__icon {
    font-size: 20px;
    color: white;
  }
  &__text {
    font-size: 20px;
    line-height: 1.5;
    color: white;
  }
  
}

</style>