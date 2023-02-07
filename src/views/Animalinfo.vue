<template>
  <div class="bg-[#759675] min-h-screen">
    <AnimalSwiper />
    <router-view />
  </div>
</template>

<script>
import AnimalSwiper from '@/components/AnimalSwiper.vue';

export default {
  components: {
    AnimalSwiper
  },
  setup(){
    return{
    }
  }
}

</script>

<style></style>
