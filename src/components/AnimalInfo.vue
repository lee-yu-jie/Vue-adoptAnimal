<template >
  <div class="h-[250px] w-[510px] bg-white shadow-lg rounded-xl overflow-hidden pr-2">
    <div v-if="Object.keys(props.selectedData).length !== 0" class="flex h-full">
      <div class="w-1/2 h-full mr-2 overflow-hidden rounded-r-full">
        <img :src="props.selectedData.cover" alt="props.selectedData.name " class="object-cover h-full">
      </div>
      <div class="flex flex-col justify-around">
        <div class="text-2xl font-bold text-purple-900">資料卡</div>
        <div>
          <div class="flex gap-1">
            <p class="w-[60px]">姓名：</p>
            <p>{{ props.selectedData.name  }}</p>
          </div>
          <div class="flex gap-1">
            <p class="w-[60px]">年齡：</p> 
            <p>{{ props.selectedData.age  }}</p>
          </div>
          <div class="flex gap-1">
            <p class="w-[60px]">個性：</p>
            <p>{{ props.selectedData.personality  }}</p>
          </div>
        </div>
        <el-button type="warning">我想領養</el-button>

      </div>

    </div>
    <div v-else class="text-xl">
      <el-icon><CaretTop /></el-icon>
      請點擊上方照片
      <el-icon><CaretTop /></el-icon>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, watch,} from 'vue';
import { useRoute } from 'vue-router';
export default {
  props: {
    selectedData: {
      type: Object,
    },
  },
  setup(props, { emit }){
    let AllData = reactive([])
    let nowData = reactive([])
    let route = useRoute()
    
    return {
      props,
      nowData
    }
  }
}
</script>

<style scoped>
:deep(button){
  background: #e6a23c;;
}
</style>