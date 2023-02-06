<template>
    <section id="sticky" class="flex items-center justify-center h-screen grid-cols-3 gap-8 px-8" data-scroll-section>
      <h2
        data-scroll
        data-scroll-sticky
        data-scroll-target="#sticky"
        class="text-white font-extrabold text-4xl py-6 leading-[60px] rounded-full bg-red-500" 
      >
        領養前
        <br>
        該注意什麼
      </h2>
      <section class="notice-card aaaa">
        <h3 class="text-2xl text-[#A1896D] font-bold mb-3">事前準備</h3>
        <ul >
          <li v-for="item, index in preparation" :key="index" ><span class="text-green-700">{{item.title}}</span>：{{ item.content}}</li>
        </ul>
      </section>
      <section class="notice-card">
        <h3 class="text-2xl text-[#A1896D] font-bold mb-3">領養條件</h3>
        <ul>
          <li v-for="item, index in condition" :key="index" >{{ item }}</li>
        </ul>
      </section>

    </section>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'welcome-sectionWorld',
  setup(){
    const preparation = [
      {
        title: "經濟能力",
        content: '是否能負擔寵物的生活支出和額外的醫療支出。'
      },
      {
        title: "居住環境",
        content: '是否能提供適合寵物的居住環境、住家是否允許飼養寵物。'
      },
      {
        title: "生活影響",
        content: '是否有時間陪伴及照顧寵物、家人是否同意飼養寵物。'
      },
    ]
    const condition = [
          "動物飼主需要年滿20歲且無棄養紀錄。",
          "需要親自到現場辦理領養手續。",
          "需要簽訂領養切結書。",
          "需要依照政府規定植入晶片。",
          "需要同意寵物成年後進行結紮。",
          "需要定期實施預防注射。",
          "需要同意接受後續追蹤和家庭訪問探親。"
        ]
    return {
      preparation,
      condition
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.notice-card{
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.512);
  padding: 10px;
  box-shadow: 0 10px 20px 10px #aea4a4;
  animation: updown 2s infinite alternate;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: square;
    padding-left: 20px;
    font-size: 20px;
    
  }
}
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
@keyframes updown {
  0% { box-shadow: 0 15px 20px 10px #bdb1b1}
  50% {box-shadow: 0 20px 30px 10px #aea4a4}
  100% {box-shadow: 0 18px 25px 10px #877e7e}
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