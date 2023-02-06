<template>
  <main v-if="isHorizontal" ref="container" data-scroll-container id="container" >
    <Welcome/>
    <AdoptNotice />
    <AnimalVoice />
    <AdoptButton />
  </main>
  <main v-else>
    <DeviceSuggestion />
  </main>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import AdoptNotice from '@/components/AdoptNotice.vue';
import LocomotiveScroll from 'locomotive-scroll';
import AnimalVoice from '@/components/AnimalVoice.vue';
import AdoptButton from '@/components/AdoptButton.vue';
import DeviceSuggestion from '@/components/DeviceSuggestion.vue';
import { onMounted, ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    Welcome,
    AdoptNotice,
    AnimalVoice,
    AdoptButton,
    DeviceSuggestion
  },
  setup(){
    const container = ref(null)
    const isHorizontal = ref(true)
    onMounted(() => {
      new LocomotiveScroll({
        el: container.value,
        smooth: true,
        lerp: 0.03,
        repeat: true,
        tablet:{
          smooth:true,
          breakpoint:1000
        },
        smartphone:{
          smooth:false
        },
      });
      if(window.innerWidth < 1000 && window.innerWidth - window.innerHeight < 0){
        isHorizontal.value = false
      }
    })
    return {
      container,
      isHorizontal
    }
  }
}
</script>
