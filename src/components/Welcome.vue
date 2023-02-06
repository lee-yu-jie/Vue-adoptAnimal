<template>
    <section
      class="welcome-section"
      data-scroll
      data-scroll-speed="2"
      data-scroll-section
    >
      <div class="absolute top-[calc(100vh/6)]">
        <h1>
          <img src="../../public/img/logo.png" alt="">
        </h1>
        <br>
        <img src="../../public/img/hometext1-1.png" alt="" data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">
        <br> 
        <img src="../../public/img/hometext1-2.png" alt="" data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal">
      </div>
      <div class="absolute bottom-[calc(100vh/6)]  py-3 px-6 nextIcon">
        <span class="text-[50px] text-amber-500 rotate-90 inline-block">➽</span>
      </div>
    </section>
</template>

<script>
import { CaretBottom } from '@element-plus/icons-vue'

export default {
  name: 'welcome-sectionWorld',
  components: {
    CaretBottom
  },
  setup(){
  },
}
</script>

<style scoped lang="scss">
section {
 height: 100vh;
 display: flex;
 justify-content: center;
 color: white;
 font-size: xx-large;
}
.welcome-section {
 background-color: red;
 background-image: url("../../public/img/homebg1.jpeg");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 position: relative;
}

.welcome-section img{
  animation: fade 2s linear 1 ;
}
.nextIcon{
  border-radius: 50%;
  box-shadow: 0 0 50px 10px rgb(255, 196, 85);
  animation: updown 2s infinite alternate;
  background: #ffffff83;
}
@keyframes updown {
  0% { transform:translateY(20px);}
  50% {transform:translateY(50px);}
  100% {transform:translateY(20px);}
}
@keyframes fade {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
</style>
