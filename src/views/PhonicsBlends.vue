<template>
  <div class="phonics-blends">
    <van-nav-bar
      title="音素组合"
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
        <van-swipe-item v-for="blend in blends" :key="blend.pattern">
          <div class="blend-card">
            <div class="pattern">{{ blend.pattern }}</div>
            <div class="sound-info">
              <div class="sound-label">发音：<span class="phonetic">{{ blend.sound }}</span></div>
              <div class="main-word" @click="playSound(blend.sounds.word)">
                {{ blend.example }}
                <van-icon name="volume-o" class="play-icon" />
              </div>
            </div>
            <div class="example-section">
              <div class="example-label">示例词</div>
              <div class="example-words">
                <div 
                  v-for="word in blend.exampleWords" 
                  :key="word.text"
                  class="word-item" 
                  @click="playSound(word.audio)"
                >
                  {{ word.text }}
                  <van-icon name="volume-o" class="play-icon" />
                </div>
              </div>
            </div>
            <van-button 
              round 
              type="primary" 
              size="large"
              color="linear-gradient(to right, #1989fa, #39b9fa)"
              @click="playSound(blend.sounds.pattern)"
              class="play-button">
              听发音
            </van-button>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="page-indicator">
        <div class="indicator-dots">
          <span 
            v-for="(_, index) in blends" 
            :key="index"
            :class="['dot', { active: currentIndex === index }]"
          ></span>
        </div>
        <span class="indicator-text">{{ currentIndex + 1 }}/{{ blends.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface ExampleWord {
  text: string
  audio: string
}

interface Blend {
  pattern: string
  sound: string
  example: string
  sounds: {
    pattern: string
    word: string
  }
  exampleWords: ExampleWord[]
}

const router = useRouter()
const currentIndex = ref(0)

const blends = ref<Blend[]>([
  {
    pattern: 'bl',
    sound: '/bl/',
    example: 'blue',
    sounds: {
      pattern: '/audio/bl.mp3',
      word: '/audio/blue.mp3'
    },
    exampleWords: [
      { text: 'black', audio: '/audio/black.mp3' },
      { text: 'block', audio: '/audio/block.mp3' },
      { text: 'blow', audio: '/audio/blow.mp3' }
    ]
  },
  {
    pattern: 'br',
    sound: '/br/',
    example: 'bread',
    sounds: {
      pattern: '/audio/br.mp3',
      word: '/audio/bread.mp3'
    },
    exampleWords: [
      { text: 'brown', audio: '/audio/brown.mp3' },
      { text: 'brush', audio: '/audio/brush.mp3' },
      { text: 'bridge', audio: '/audio/bridge.mp3' }
    ]
  },
  {
    pattern: 'cl',
    sound: '/kl/',
    example: 'clock',
    sounds: {
      pattern: '/audio/cl.mp3',
      word: '/audio/clock.mp3'
    },
    exampleWords: [
      { text: 'cloud', audio: '/audio/cloud.mp3' },
      { text: 'clean', audio: '/audio/clean.mp3' },
      { text: 'climb', audio: '/audio/climb.mp3' }
    ]
  },
  {
    pattern: 'cr',
    sound: '/kr/',
    example: 'crab',
    sounds: {
      pattern: '/audio/cr.mp3',
      word: '/audio/crab.mp3'
    },
    exampleWords: [
      { text: 'cry', audio: '/audio/cry.mp3' },
      { text: 'crown', audio: '/audio/crown.mp3' },
      { text: 'crane', audio: '/audio/crane.mp3' }
    ]
  },
  {
    pattern: 'dr',
    sound: '/dr/',
    example: 'drum',
    sounds: {
      pattern: '/audio/dr.mp3',
      word: '/audio/drum.mp3'
    },
    exampleWords: [
      { text: 'draw', audio: '/audio/draw.mp3' },
      { text: 'drink', audio: '/audio/drink.mp3' },
      { text: 'dress', audio: '/audio/dress.mp3' }
    ]
  },
  {
    pattern: 'fl',
    sound: '/fl/',
    example: 'flag',
    sounds: {
      pattern: '/audio/fl.mp3',
      word: '/audio/flag.mp3'
    },
    exampleWords: [
      { text: 'fly', audio: '/audio/fly.mp3' },
      { text: 'flower', audio: '/audio/flower.mp3' },
      { text: 'floor', audio: '/audio/floor.mp3' }
    ]
  },
  {
    pattern: 'fr',
    sound: '/fr/',
    example: 'frog',
    sounds: {
      pattern: '/audio/fr.mp3',
      word: '/audio/frog.mp3'
    },
    exampleWords: [
      { text: 'friend', audio: '/audio/friend.mp3' },
      { text: 'fruit', audio: '/audio/fruit.mp3' },
      { text: 'freeze', audio: '/audio/freeze.mp3' }
    ]
  },
  {
    pattern: 'gl',
    sound: '/gl/',
    example: 'glass',
    sounds: {
      pattern: '/audio/gl.mp3',
      word: '/audio/glass.mp3'
    },
    exampleWords: [
      { text: 'glue', audio: '/audio/glue.mp3' },
      { text: 'globe', audio: '/audio/globe.mp3' },
      { text: 'glove', audio: '/audio/glove.mp3' }
    ]
  },
  {
    pattern: 'gr',
    sound: '/gr/',
    example: 'green',
    sounds: {
      pattern: '/audio/gr.mp3',
      word: '/audio/green.mp3'
    },
    exampleWords: [
      { text: 'grass', audio: '/audio/grass.mp3' },
      { text: 'grape', audio: '/audio/grape.mp3' },
      { text: 'grow', audio: '/audio/grow.mp3' }
    ]
  },
  {
    pattern: 'pl',
    sound: '/pl/',
    example: 'play',
    sounds: {
      pattern: '/audio/pl.mp3',
      word: '/audio/play.mp3'
    },
    exampleWords: [
      { text: 'plane', audio: '/audio/plane.mp3' },
      { text: 'plant', audio: '/audio/plant.mp3' },
      { text: 'plus', audio: '/audio/plus.mp3' }
    ]
  },
  {
    pattern: 'pr',
    sound: '/pr/',
    example: 'price',
    sounds: {
      pattern: '/audio/pr.mp3',
      word: '/audio/price.mp3'
    },
    exampleWords: [
      { text: 'proud', audio: '/audio/proud.mp3' },
      { text: 'print', audio: '/audio/print.mp3' },
      { text: 'pray', audio: '/audio/pray.mp3' }
    ]
  },
  {
    pattern: 'sc',
    sound: '/sk/',
    example: 'scan',
    sounds: {
      pattern: '/audio/sc.mp3',
      word: '/audio/scan.mp3'
    },
    exampleWords: [
      { text: 'school', audio: '/audio/school.mp3' },
      { text: 'score', audio: '/audio/score.mp3' },
      { text: 'scarf', audio: '/audio/scarf.mp3' }
    ]
  },
  {
    pattern: 'sk',
    sound: '/sk/',
    example: 'sky',
    sounds: {
      pattern: '/audio/sk.mp3',
      word: '/audio/sky.mp3'
    },
    exampleWords: [
      { text: 'skip', audio: '/audio/skip.mp3' },
      { text: 'skin', audio: '/audio/skin.mp3' },
      { text: 'skull', audio: '/audio/skull.mp3' }
    ]
  },
  {
    pattern: 'sl',
    sound: '/sl/',
    example: 'sleep',
    sounds: {
      pattern: '/audio/sl.mp3',
      word: '/audio/sleep.mp3'
    },
    exampleWords: [
      { text: 'slide', audio: '/audio/slide.mp3' },
      { text: 'slow', audio: '/audio/slow.mp3' },
      { text: 'slice', audio: '/audio/slice.mp3' }
    ]
  },
  {
    pattern: 'sm',
    sound: '/sm/',
    example: 'smile',
    sounds: {
      pattern: '/audio/sm.mp3',
      word: '/audio/smile.mp3'
    },
    exampleWords: [
      { text: 'small', audio: '/audio/small.mp3' },
      { text: 'smart', audio: '/audio/smart.mp3' },
      { text: 'smoke', audio: '/audio/smoke.mp3' }
    ]
  },
  {
    pattern: 'sn',
    sound: '/sn/',
    example: 'snake',
    sounds: {
      pattern: '/audio/sn.mp3',
      word: '/audio/snake.mp3'
    },
    exampleWords: [
      { text: 'snow', audio: '/audio/snow.mp3' },
      { text: 'snail', audio: '/audio/snail.mp3' },
      { text: 'snap', audio: '/audio/snap.mp3' }
    ]
  },
  {
    pattern: 'sp',
    sound: '/sp/',
    example: 'space',
    sounds: {
      pattern: '/audio/sp.mp3',
      word: '/audio/space.mp3'
    },
    exampleWords: [
      { text: 'speak', audio: '/audio/speak.mp3' },
      { text: 'spoon', audio: '/audio/spoon.mp3' },
      { text: 'sport', audio: '/audio/sport.mp3' }
    ]
  },
  {
    pattern: 'st',
    sound: '/st/',
    example: 'star',
    sounds: {
      pattern: '/audio/st.mp3',
      word: '/audio/star.mp3'
    },
    exampleWords: [
      { text: 'stop', audio: '/audio/stop.mp3' },
      { text: 'stone', audio: '/audio/stone.mp3' },
      { text: 'stick', audio: '/audio/stick.mp3' }
    ]
  },
  {
    pattern: 'sw',
    sound: '/sw/',
    example: 'swim',
    sounds: {
      pattern: '/audio/sw.mp3',
      word: '/audio/swim.mp3'
    },
    exampleWords: [
      { text: 'sweet', audio: '/audio/sweet.mp3' },
      { text: 'swing', audio: '/audio/swing.mp3' },
      { text: 'sweep', audio: '/audio/sweep.mp3' }
    ]
  },
  {
    pattern: 'tr',
    sound: '/tr/',
    example: 'tree',
    sounds: {
      pattern: '/audio/tr.mp3',
      word: '/audio/tree.mp3'
    },
    exampleWords: [
      { text: 'train', audio: '/audio/train.mp3' },
      { text: 'truck', audio: '/audio/truck.mp3' },
      { text: 'try', audio: '/audio/try.mp3' }
    ]
  }
])

const onChange = (index: number) => {
  currentIndex.value = index
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
</script>

<style scoped>
.phonics-blends {
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

.blend-card {
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

.pattern {
  font-size: 84px;
  background: linear-gradient(45deg, #1989fa, #39b9fa);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(25, 137, 250, 0.1);
}

.sound-info {
  width: 100%;
  margin: 20px 0;
}

.sound-label {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
}

.phonetic {
  font-size: 22px;
  color: #333;
  font-weight: 500;
}

.main-word {
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

.example-words {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.word-item {
  background: #f8f9fc;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.word-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.play-icon {
  font-size: 20px;
  color: #1989fa;
  opacity: 0.8;
}

.play-button {
  margin-top: auto;
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