<template>
    <div class="main__week">
        <div class="main__week-btns">
            <button class="main__week-btn"
                :class="{ 'main__week-active': !openAllWeek, 'dark__main-btn':store.darkMode, 'dark__main-btn-active':(store.darkMode&&!openAllWeek) }"
                @click="openAllWeek=true">На неделю</button>
            <button class="main__week-btn"
                :class="{ 'main__week-active': openAllWeek, 'dark__main-btn':store.darkMode, 'dark__main-btn-active':(store.darkMode&&openAllWeek) }"
                @click="openAllWeek=false">Отменить</button>
        </div>
        <Transition>
            <div class="main__week-info" v-show="openAllWeek" :class="{'dark__main-week': store.darkMode}">
                <div class="main__week-item" v-for="(item, index) in getWeekWeather" :key="item.dt">
                    <h3 class="main__week-item-day">
                        {{ index == 0 ? 'Сегодня':
                        index == 1 ? 'Завтра' :
                        getDate(item.dt, 'weekday')[0].toUpperCase()+getDate(item.dt, 'weekday').slice(1)
                        }}
                    </h3>
                    <p class="main__week-item-date">{{getDate(item.dt, 'day')}} {{getDate(item.dt, 'month').slice(0,3)}}
                    </p>
                    <div class="main__week-item-icon">
                        <img :src="`src/assets/images/${getImg(item.weather[0].description)}.svg`" alt="">
                    </div>
                    <p class="main__week-item-degHigh">+{{Math.round(item.temp.max)}}°</p>
                    <p class="main__week-item-degLow">+{{Math.round(item.temp.min)}}°</p>
                    <p class="main__week-item-desc">{{item.weather[0].description}}</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useWeather } from '@/stores/weather'
import unix from '@/timestamp.js'

const store = useWeather()

const getWeekWeather = computed(() => store.weather.daily.slice(0, -1))
const getImgName = computed(() => store.weatherName)
const getImg = (descr) => getImgName.value[descr]

const getDate = (date, type) => unix(date, type)

const openAllWeek = ref(true)

</script>

<style lang="scss" scoped>

</style>