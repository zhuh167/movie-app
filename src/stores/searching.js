import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const useSearching = defineStore({
    id: 'searching',
    state: () => ({
        url: 'https://api.themoviedb.org/3/search/multi',
        searchArray: null,
        search: ''
    }),
    actions: {
        async getSearch(page = 1) {
            if (this.search) {
                try {
                    const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU&page=${page}&query=${this.search}&include_adult=false`)
                    const data = res.data.results
                    const arrayWithPhoto = data.filter(movie => movie.backdrop_path != null)
                    this.searchArray = arrayWithPhoto
                } catch (error) {
                    console.log('Ошибка произошла при  поиске', error);
                }
            }
            else {  
                this.searchArray = null
            }

        }
    },

})

