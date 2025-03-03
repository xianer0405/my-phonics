<template>
  <div class="vowels-learning">
    <van-nav-bar
      title="元音学习"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
      class="nav-bar"
    />
    
    <div class="content">
      <van-swipe 
        @change="onChange" 
        :loop="false"
        :show-indicators="false"
      >
        <van-swipe-item v-for="vowel in vowels" :key="vowel.letter">
          <div class="letter-card">
            <div class="letter">{{ vowel.letter }}</div>
            <div class="sounds">
              <div class="sound-item">
                <div class="sound-label">短音：<span class="phonetic">{{ vowel.shortSound }}</span></div>
                <div class="example" @click="playSound(vowel.sounds.short)">
                  {{ vowel.shortExample }}
                  <van-icon name="volume-o" class="play-icon" />
                </div>
              </div>
              <div class="sound-item">
                <div class="sound-label">长音：<span class="phonetic">{{ vowel.longSound }}</span></div>
                <div class="example" @click="playSound(vowel.sounds.long)">
                  {{ vowel.longExample }}
                  <van-icon name="volume-o" class="play-icon" />
                </div>
              </div>
            </div>
            <div class="example-section">
              <div class="example-label">示例词</div>
              <div class="example-word" @click="playSound(vowel.sounds.example)">
                {{ vowel.exampleWord }}
                <van-icon name="volume-o" class="play-icon" />
              </div>
            </div>
            <van-button 
              round 
              type="primary" 
              size="large"
              color="linear-gradient(to right, #1989fa, #39b9fa)"
              @click="playSound(vowel.sounds.letter)"
              class="play-button">
              听发音
            </van-button>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="page-indicator">
        <div class="indicator-dots">
          <span 
            v-for="(_, index) in vowels" 
            :key="index"
            :class="['dot', { active: currentIndex === index }]"
          ></span>
        </div>
        <span class="indicator-text">{{ currentIndex + 1 }}/{{ vowels.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Ref } from 'vue'

interface Vowel {
  letter: string
  exampleWord: string
  sounds: {
    letter: string
    short: string
    long: string
    example: string
  }
  shortSound: string
  longSound: string
  shortExample: string
  longExample: string
}

const router = useRouter()
const currentIndex = ref(0)
const vowels = ref<Vowel[]>([
  { 
    letter: 'A a', 
    exampleWord: 'apple', 
    sounds: {
      letter: '/audio/a.mp3',
      short: '/audio/cat.mp3',
      long: '/audio/cake.mp3',
      example: '/audio/apple.mp3'
    },
    shortSound: '/æ/',
    longSound: '/eɪ/',
    shortExample: 'cat',
    longExample: 'cake'
  },
  { 
    letter: 'E e', 
    exampleWord: 'egg', 
    sounds: {
      letter: '/audio/e.mp3',
      short: '/audio/bed.mp3',
      long: '/audio/bee.mp3',
      example: '/audio/egg.mp3'
    },
    shortSound: '/e/',
    longSound: '/iː/',
    shortExample: 'bed',
    longExample: 'bee'
  },
  { 
    letter: 'I i', 
    exampleWord: 'ink', 
    sounds: {
      letter: '/audio/i.mp3',
      short: '/audio/pig.mp3',
      long: '/audio/kite.mp3',
      example: '/audio/ink.mp3'
    },
    shortSound: '/ɪ/',
    longSound: '/aɪ/',
    shortExample: 'pig',
    longExample: 'kite'
  },
  { 
    letter: 'O o', 
    exampleWord: 'orange', 
    sounds: {
      letter: '/audio/o.mp3',
      short: '/audio/dog.mp3',
      long: '/audio/nose.mp3',
      example: '/audio/orange.mp3'
    },
    shortSound: '/ɒ/',
    longSound: '/əʊ/',
    shortExample: 'dog',
    longExample: 'nose'
  },
  { 
    letter: 'U u', 
    exampleWord: 'umbrella', 
    sounds: {
      letter: '/audio/u.mp3',
      short: '/audio/cup.mp3',
      long: '/audio/cube.mp3',
      example: '/audio/umbrella.mp3'
    },
    shortSound: '/ʌ/',
    longSound: '/juː/',
    shortExample: 'cup',
    longExample: 'cube'
  }
])

const onChange = (index: number) => {
  currentIndex.value = index
  console.log('当前展示的是第', index + 1, '个音素')
}

const onClickLeft = () => {
  router.back()
}

const playSound = (sound: string) => {
  const audio = new Audio(sound)
  audio.play().catch(error => {
    console.error('音频播放失败:', error)
  })
}

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.vowels-learning {
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #f6f7f9, #ffffff);
  display: flex;
  flex-direction: column;
}

.nav-bar {
  background: transparent !important;
}

:deep(.van-nav-bar__title) {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 60px;
  position: relative;
  overflow: hidden;
}

:deep(.van-swipe) {
  flex: 1;
  height: 100% !important;
}

:deep(.van-swipe__track) {
  height: 100% !important;
}

:deep(.van-swipe-item) {
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
}

.letter-card {
  min-height: 450px;
  width: 90%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 24px;
  padding: 30px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.letter {
  font-size: 84px;
  background: linear-gradient(45deg, #1989fa, #39b9fa);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(25, 137, 250, 0.1);
}

.sounds {
  width: 100%;
  margin: 20px 0;
}

.sound-item {
  margin: 15px 0;
  text-align: center;
  padding: 20px;
  background: #f8f9fc;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.sound-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.sound-label {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}

.phonetic {
  font-size: 22px;
  color: #333;
  font-weight: 500;
}

.example {
  font-size: 28px;
  color: #1989fa;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.example-section {
  text-align: center;
  margin: 30px 0;
}

.example-label {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.example-word {
  font-size: 24px;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.play-icon {
  font-size: 20px;
  color: #1989fa;
  opacity: 0.8;
}

.play-button {
  margin-top: 20px;
  width: 80%;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
}

.page-indicator {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.indicator-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddd;
  transition: all 0.3s ease;
}

.dot.active {
  background: #1989fa;
  transform: scale(1.2);
}

.indicator-text {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
</style>