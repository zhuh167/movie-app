import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const usePopular = defineStore({
    id: 'popular',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies: null,
        popularTvs: null,
    }),
    actions: {
        async getPopular({type, page = 1}) {
            try {
                const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`)
                const data = res.data.results
                if(type == 'movie') this.popularMovies = data
                else this.popularTvs = data
            } catch (error) {
                console.log('Ошибка произошла при  получении популярных фильмов', error);
            }
        }
    },

})

