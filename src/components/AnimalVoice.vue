<template>
  <section class="flex items-center justify-center h-screen grid-cols-3 gap-10 text-4xl parallax" data-scroll-section>
    <div>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-9">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-8">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-7">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">
        Horizontal Parallax Scroll
      </h1>
    </div>

    <h1 class="text-black" data-scroll data-scroll-direction="vertical" data-scroll-speed="9" >
      Vertical Parallax scroll
    </h1>
    <div>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="7">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="8">
        Horizontal Parallax Scroll
      </h1>
      <h1 class="text-black" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
        Horizontal Parallax Scroll
      </h1>
    </div>
  </section>

  <section class="grid items-center justify-center h-screen grid-cols-3 gap-10 text-4xl scroll-into-view" data-scroll-section>
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
#sticky {
  background-image: linear-gradient(to top, #D4C9C9 40%, transparent 70%);
}
.scroll-into-view {
  background-color: black;
  color: rgba(255, 255, 255, 0.497);
}
</style>