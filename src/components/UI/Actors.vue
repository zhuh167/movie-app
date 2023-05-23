<template>
    <div class="main__info-content-actors" v-if="getActors">
        <div class="main-info-content-actor" v-for="actor in getActors" :key="actor.id">
            <img v-lazy="imgUrl + actor.profile_path" alt="" class="main-info-content-img">
            <span class="main-info-content-name">{{ actor.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted,computed  } from 'vue';
import { useActors } from '@/stores/actors'
import { imgUrl } from '@/static'

const actors = useActors()

const props = defineProps(['count','id', 'type'])


const getActors = computed(() => props.type == 'movie' ? actors.actorsMovie : actors.actorsTv)


onMounted(() => {
    actors.getActors({id: props.id, count: props.count, type: props.type})  
})  



</script>

<style lang="scss" >


.main__info-content-actors {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;  
  width: 100%;
}
.main-info-content-actor {

  border: 1px solid #FFFFFF;
  border-radius: 25px;
  padding-right: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  & img {
    width: 45px;
    height: 50px;
    border-radius: 50%;
  }
  & span {
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
}

</style>