<template>
  <div class="pt-[100px]">
    <swiper
      ref="{swiperRef}"
      :slidesPerView="5"
      :centeredSlides="true"
      :spaceBetween="50"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      :loop="true"
      @slideNextTransitionStart="nextSlide"
      @slidePrevTransitionStart="prevSlide"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </div>


  <p class="append-buttons"></p>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {  Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    
    const startAnimation = (action) => {
      const swiperEle = document.querySelectorAll('.swiper-slide')
      const prev = document.querySelector('.swiper-button-prev')
      const next = document.querySelector('.swiper-button-next')
      next.classList.add('stopClick')
      prev.classList.add('stopClick')
      swiperEle.forEach(ele => {
        ele.style.animation = action 
        ele.addEventListener('animationend',() => {
          next.classList.remove('stopClick')
          prev.classList.remove('stopClick')
          ele.style.animation = null
        })
      })
    }
    const nextSlide = () => {
      startAnimation('fallRight .8s ease 1')
    };

    const prevSlide = () => {
      startAnimation('fallLeft .8s ease 1')
    };
    return {
      modules: [
        Navigation
      ],
      nextSlide,
      prevSlide
    };
  },
};
</script>

<style>

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 15px;
  /* Center slide text vertically */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 400px;
  margin: 20px auto;
  padding-top: 50px;
  padding-bottom: 40px;
}
.swiper-button-prev{
  right: 100px;
  left: auto;
}
.swiper-button-next, .swiper-button-prev{
  top: 25px;
  background: orange;
  border-radius: 50%;
  padding: 10px 20px;
  height: auto;
}
.swiper-button-next:after, .swiper-button-prev:after{
    color: white;
    font-size: 15px;
}
.stopClick{
  pointer-events: none;
}
@keyframes fallRight{ 
	50% { 
	  transform: rotate(15deg); 
	} 
100% { 
	  transform: rotate(0deg); 
	} 
}
@keyframes fallLeft{ 
	50% { 
	  transform: rotate(-15deg); 
	} 
100% { 
	  transform: rotate(0deg); 
	} 
}
</style>
