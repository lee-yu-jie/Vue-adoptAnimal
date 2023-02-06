<template>
  <section class="flex items-center justify-center h-screen grid-cols-3 gap-10 text-4xl parallax" data-scroll-section>
    <div >
      <div class="parallax-item parallax-1 w-[calc(100vw+1000px)]">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="-9">
          我很乖，我不會咬人。
        </p>
      </div>
      <div class="parallax-item parallax-2">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
          Please hug me. Touch me.
        </p>
      </div>
      <div class="parallax-item parallax-3">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="-7">
          我依然對家懷抱著希望。
        </p>
      </div>
      <div class="parallax-item parallax-4">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">
          I will always love you.
        </p>
      </div>
      <div class="parallax-item parallax-5">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
          為什麼要拋棄我。
        </p>
      </div>

      <div class="parallax-item parallax-6">
        <p  data-scroll data-scroll-direction="horizontal" data-scroll-speed="8">
          我只想要主人摸摸我。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
name: 'animalVoice',
setup(){

  return {

  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parallax {
//  background-color: greenyellow;
  align-items: center;
  background-image: linear-gradient(#D4C9C9, rgb(238, 238, 112));
}
.parallax-item {
  p{
  background: white;
  font-size: 100px;
  font-weight: 900;
  padding: 30px;
  color: rgb(82, 82, 82);
  // width: calc(100vh+500px);
  }
}
.parallax-1{
  transform: translateX(-10vw) rotate(18deg)
}
.parallax-2{
  transform: translateX(10vw) rotate(-26deg)
}
.parallax-3{
  transform: translateX(-10vw) rotate(5deg)
}
.parallax-4{
  transform: translateX(-10vw) rotate(26deg)
}
.parallax-5{
  transform: translateX(10vw) rotate(-22deg)
}
.parallax-6{
  transform: translateX(-10vw) rotate(26deg)
}
.parallax-7{
  transform: translateX(10vw) rotate(-15deg)
}
</style>