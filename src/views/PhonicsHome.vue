<template>
  <div class="phonics-home">
    <h1 class="title">趣味自然拼读</h1>
    <div class="level-grid">
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item 
          v-for="level in levels" 
          :key="level.id"
          @click="goToLevel(level)">
          <div class="level-item">
            <van-icon :name="level.icon" size="40" />
            <span>{{ level.name }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const levels = ref([
  {
    id: 1,
    name: '元音字母',
    icon: 'smile-o',
    route: '/phonics/vowels'
  },
  {
    id: 2,
    name: '辅音字母',
    icon: 'music-o',
    route: '/phonics/consonants'
  }
])

const goToLevel = (level: any) => {
  router.push(level.route)
}
</script>

<style scoped>
.phonics-home {
  padding: 20px;
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.level-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.level-item span {
  margin-top: 8px;
  font-size: 16px;
}
</style>