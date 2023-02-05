<template>
  <main ref="container" data-scroll-container id="container" >
    <Welcome/>
    <AdoptNotice />
    <AnimalVoice />
  </main>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import AdoptNotice from '@/components/AdoptNotice.vue';
import LocomotiveScroll from 'locomotive-scroll';
import AnimalVoice from '@/components/AnimalVoice.vue';
import { onMounted, ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    Welcome,
    AdoptNotice,
    AnimalVoice
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
        },
        
      });
    })
    return {
      container
    }
  }
}
</script>
