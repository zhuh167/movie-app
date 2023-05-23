import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey } from '@/static'

export const useActors = defineStore({
    id: 'actors',
    state: () => ({
        url: 'https://api.themoviedb.org/3',
        actorsMovie: null,
        actorsTv: null
    }), 
    actions: {
        async getActors({id, count, type}) {
            try {
                const res = await axios.get(`${this.url}/${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`)
                const data = res.data.cast
                let array = []
                data.forEach(item => {
                  if(array.length < count)  array.push(item)
                })
                if(type == 'movie')  this.actorsMovie = array
                else this.actorsTv = array
                
            } catch (error) {
              console.log('Ошибка произошла при  получении актеров ', error);
            }
          }
    },

})

