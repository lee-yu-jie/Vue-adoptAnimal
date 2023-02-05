<template>
    <section id="sticky" data-scroll-section>
      <h2
        data-scroll
        data-scroll-sticky
        data-scroll-target="#sticky"
      >
        注意事項
      </h2>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
    </section>

    <section class="parallax" data-scroll-section>
      <h1 class="text-black" data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        Vertical Parallax scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
        Horizontal Parallax Scroll
      </h1>
    </section>

    <section class="scroll-into-view" data-scroll-section>
      <h1
        className="hint-text"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="animate"
        data-scroll-speed="5">
        Here, we're calling the Animate class when the Content scrolls into view
      </h1>
    </section>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import { onMounted, ref } from 'vue'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
 height: 100vh;
 display: flex;
//  align-items: center;
 justify-content: center;
 color: white;
 font-size: xx-large;
}
section#sticky{
  align-items: center;
}
.welcome-section {
 background-color: red;
 background-image: url("../assets/img/homebg1.jpeg");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 position: relative;
}

.welcome-section img{
  animation: fade 2s linear 1 ;
}
.parallax {
//  background-color: greenyellow;
 align-items: center;
 background-image: linear-gradient(#c9c9d4, rgb(238, 238, 112));
}
#sticky {
background-image: linear-gradient(to top, #c9c9d4 40%, transparent 70%);
 padding: 50px;
}
.scroll-into-view {
 background-color: black;
 color: rgba(255, 255, 255, 0.497);
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