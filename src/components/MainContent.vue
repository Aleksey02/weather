<template>
    <div class="main__content">
        <div class="main__content-left" :class="{'dark__main-content': store.darkMode}">
            <p class="main__content-left-degree"> {{ Math.round(getFullWeather.current.temp)}}°</p>
            <p class="main__content-left-day">Сегодня</p>
            <p class="main__content-left-date">Время: {{ getDate(getFullWeather.current.dt, 'hour')}}:{{ getDate(getFullWeather.current.dt, 'minutes')}}</p>
            <p class="main__content-left-city">Город: {{ getFullWeather.name }}</p>
            <div class="main__content-left-img">
                <img :src="`src/assets/images/${getImg}.svg`"  alt="">
            </div>
        </div>
        <div class="main__content-right" :class="{'dark__main-content': store.darkMode}">
            <img src="@/assets/images/headerBg.svg" alt="" class="main__content-right-img">
            <div class="main__content-right-item">
                <div class="main__content-right-icon" :class="{'dark__main-right-img' : store.darkMode}">
                    <img src="@/assets/images/temp.svg" alt="">
                </div>
                <span>Температура</span>
                <span>
                    {{ Math.round(getFullWeather.current.temp)}}°
                    - ощущается как {{ Math.round(getFullWeather.current.feels_like)}}°
                </span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon" :class="{'dark__main-right-img' : store.darkMode}">
                    <img src="@/assets/images/davlenie.svg" alt="">
                </div>
                <span>Давление </span>
                <span>{{ getFullWeather.current.pressure }} мм ртутного столба - нормальное</span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon" :class="{'dark__main-right-img' : store.darkMode}">
                    <img src="@/assets/images/osadki.svg" alt="">
                </div>
                <span>Облачность</span>
                <span>{{ getFullWeather.current.clouds }} %</span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon" :class="{'dark__main-right-img' : store.darkMode}">
                    <img src="@/assets/images/wind.svg" alt="">
                </div>
                <span>Ветер</span>
                <span>{{ getFullWeather.current.wind_speed }} м/с юго-запад - легкий ветер</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWeather } from '@/stores/weather'
import unix from '@/timestamp.js'

const store = useWeather()

const getDate = (date, type) => unix(date, type)

const getFullWeather = computed(() => store.weather)
const desc = computed(() => store.weather.current.weather[0].description)

const getImg = computed(() => store.weatherName[desc.value])

</script>

<style lang="scss" scoped>

</style>