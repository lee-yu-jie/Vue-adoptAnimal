<template>
  <main ref="container" data-scroll-container id="container" >
    <HelloWorld/>
    <AdoptNotice />
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AdoptNotice from '@/components/AdoptNotice.vue';
import LocomotiveScroll from 'locomotive-scroll';
import { onMounted, ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AdoptNotice
  },
  setup(){
    const container = ref(null)

    onMounted(() => {
      new LocomotiveScroll({
        el: container.value,
        smooth: true,
        lerp: 0.08,
        repeat: true,
        tablet:{
          smooth:true,
          breakpoint:250
        },
        smartphone:{
          smooth:false
        }
      });
    })
    return {
      container
    }
  }
}
</script>
