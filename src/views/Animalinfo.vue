<template>
  <div class="min-h-screen ">
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

<style scoped>
div{
  background-color: #f9ebe0;
opacity: 1;
background-image:  linear-gradient(30deg, #fdf5de 12%, transparent 12.5%, transparent 87%, #fdf5de 87.5%, #fdf5de), linear-gradient(150deg, #fdf5de 12%, transparent 12.5%, transparent 87%, #fdf5de 87.5%, #fdf5de), linear-gradient(30deg, #fdf5de 12%, transparent 12.5%, transparent 87%, #fdf5de 87.5%, #fdf5de), linear-gradient(150deg, #fdf5de 12%, transparent 12.5%, transparent 87%, #fdf5de 87.5%, #fdf5de), linear-gradient(60deg, #fdf5de77 25%, transparent 25.5%, transparent 75%, #fdf5de77 75%, #fdf5de77), linear-gradient(60deg, #fdf5de77 25%, transparent 25.5%, transparent 75%, #fdf5de77 75%, #fdf5de77);
background-size: 80px 140px;
background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
</style>
