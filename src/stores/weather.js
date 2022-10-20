import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeather = defineStore({
  id: 'weather',
  state: () => ({
    apiKey: '3c9333a1a3a40ca893996cbeb44b7022',
    weather: null,
    search: '',
    darkMode: false,
    weatherName : {
      'дымка': 'minicloud',
      'ясно': 'sun',
      'небольшая облачность' : 'cloud',
      'пасмурно': 'cloud',
      'облачно с прояснениями' : 'sunrain',
      'небольшой дождь': 'minirain',
      'дождь': 'rain',
      'переменная облачность': 'cloud',
  }
  }),
  actions: {
    async getWeather(city) {
      try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`)
        let { lat, lon, name } = res.data[0]
        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${this.apiKey}&units=metric&lang=ru`)
        let weatherInfo = {...res2.data, name: name}
        this.weather = weatherInfo
      } catch (error) {
        console.log('Ошибка в получении данных',error);
      }
    }
  },
  getters: {
   
  }
})

