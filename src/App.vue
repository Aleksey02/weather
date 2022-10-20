<template>
  <div class="wrapper" :class="{'dark__body': store.darkMode}" v-if="getFullWeather">
    <div class="container">
      <Header/>
      <Main/>
    </div>
  </div>
  <div class="loading" v-else> 
    <div class="loading__element"></div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { onMounted, computed } from 'vue'
import { useWeather } from '@/stores/weather'

const store = useWeather()
const getFullWeather = computed(() => store.weather)
const getDefaultCity = () => store.getWeather('Tashkent')

onMounted(() => {
  setTimeout(() => getDefaultCity(),1000)
})

</script>

<style lang="scss" scoped>

</style>