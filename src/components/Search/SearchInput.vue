<template>
        <div class="container">
      <div class="main__search">
          <input 
            type="text" 
            class="main__search-input"
            :placeholder="placeholder"
            v-model="searchValue"
            autofocus
          >
          <div class="main__content-list"  v-if="multiData">
            <SearchContent
                v-for="item in multiData"
                :key="item.id"
                :item="item"
            />
          </div>
      </div>
    </div>
</template>

<script setup>
import SearchContent from './SearchContent.vue';
import { useSearching } from '@/stores/searching'
import { computed, onBeforeUnmount  } from 'vue';

const searchStore = useSearching()

const props = defineProps({
    placeholder: String
})



const multiData = computed(() => searchStore.searchArray)

const searchValue = computed({
    get: () => searchStore.search,  
    set: (val) => {
        searchStore.search = val,
        searchStore.getSearch()
    }
})

onBeforeUnmount(() => {
    searchStore.searchArray = null
    searchStore.search = ''
})



</script>

<style lang="scss" scoped>

</style>