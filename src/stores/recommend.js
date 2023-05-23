import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const useRecommend = defineStore({
    id: 'recommend',
    state: () => ({
        url: 'https://api.themoviedb.org/3',
        recomMovies: null,
        recomTvs: null
    }),
    actions: {
        async getRecom(info) {
            let {type, id} = info
            try {
                const res = await axios.get(`${this.url}/${type}/${id}/recommendations?api_key=${apiKey}&language=ru-RU`)
                const data = res.data.results;
                const recom = []
                data.forEach(item => {
                    if(recom.length <4) recom.push(item)
                });
                if(type == 'movie') {
                    this.recomMovies = recom
                }else {
                    this.recomTvs = recom
                }
            } catch (error) {
                console.log('Ошибка с запросом', error);
            }
        }
    },

})

