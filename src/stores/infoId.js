import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const useInfoId = defineStore({
    id: 'infoId',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    }),
    actions: {
        async getMedia({type, id}) {
            try {
                const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
                const data = res.data;
                if(type == 'movie') { 
                    this.movie = data
                }else {
                    this.tv = data
                }
            } catch (error) {
                console.log('Ошибка с запросом', error);
            }
        }
    },

})

