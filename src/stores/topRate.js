import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const useTop = defineStore({
  id: 'top',
  state: () => ({
    url: 'https://api.themoviedb.org/3/movie/top_rated?',
    topRate : null
  }),
  actions: {
    async getTop(count) {
        try {
            const res = await axios.get(`${this.url}api_key=${apiKey}&language=ru-RU&page=1`)
            const data = res.data.results
            const top10 = []
            data.forEach(item => {
              if(top10.length < count)  top10.push(item)
            })
            this.topRate = top10
        } catch (error) {
          console.log('Ошибка произошла при  получении топовых фильмов', error);
        }
      }
  },

})

