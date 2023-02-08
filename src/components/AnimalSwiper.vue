<template>
  <div class="pt-[50px] relative flex flex-col items-center">
    <h2 class="mb-[50px] text-4xl font-extrabold text-center text-orange-500">
      <el-icon><View /></el-icon>
      看看我是誰
      <el-icon><View /></el-icon>
    </h2>
    <button @click="goHome" class="absolute left-0 flex flex-col items-center p-5 bg-blue-700 cursor-pointer rounded-r-3xl top-6">
      <el-icon :size="40" color="white"><HomeFilled/></el-icon>
      <span class="text-white">Go Home</span>
    </button>
    <swiper
      ref="{swiperRef}"
      :slidesPerView="4"
      :centeredSlides="true"
      :spaceBetween="90"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      :loop="true"
      :autoplay="{
				delay:2000
			}"
      @slideNextTransitionStart="nextSlide"
      @slidePrevTransitionStart="prevSlide"
      class="mySwiper"
    >
      <swiper-slide v-for="item in swiperData.data" :key="item.name" >
        <img :src="item.cover"  :alt="item.name" @click="showData(item)" class="cursor-pointer">
      </swiper-slide>
    </swiper>
    <AnimalInfo :selectedData='selectedData'/>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation, Autoplay } from "swiper";
import { onMounted, reactive , ref} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import AnimalInfo from "@/components/AnimalInfo.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    AnimalInfo
  },
  setup() {
    const router = useRouter()
    const swiperData = reactive({data: {}})
    let selectedData = ref({})
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

    const fetchData = () => {
      fetch('data/projectList.json')
      .then(d => d.json())
      .then(res => {
        swiperData.data = res
      });
    }

    const showData = (item) => {
      selectedData.value = item
    }

    const goHome = () => {
      router.push({name: 'home'})
    }
    
    onMounted(() => {
      fetchData();
    })
    return {
      modules: [
        Navigation,
        Autoplay
      ],
      nextSlide,
      prevSlide,
      swiperData,
      showData,
      goHome,
      selectedData
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
  overflow: hidden;
  box-shadow: 0 0 15px 10px #c3c1bb;
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
  height: 300px;
  margin: 20px auto;
  padding-top: 50px;
  padding-bottom: 40px;
}
.swiper-button-prev{
  right: 300px;
  left: auto;
}
.swiper-button-next{
  right: 230px;
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
