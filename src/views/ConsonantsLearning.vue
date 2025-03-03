<template>
  <div class="consonants-learning">
    <van-nav-bar
      title="辅音学习"
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
        <van-swipe-item v-for="consonant in consonants" :key="consonant.letter">
          <div class="letter-card">
            <div class="letter">{{ consonant.letter }}</div>
            <div class="sound-info">
              <div class="sound-label">发音：<span class="phonetic">{{ consonant.sound }}</span></div>
              <div class="main-word" @click="playSound(consonant.sounds.word)">
                {{ consonant.example }}
                <van-icon name="volume-o" class="play-icon" />
              </div>
            </div>
            <div class="example-section">
              <div class="example-label">示例词</div>
              <div class="example-words">
                <div 
                  v-for="word in consonant.exampleWords" 
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
              @click="playSound(consonant.sounds.letter)"
              class="play-button">
              听发音
            </van-button>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="page-indicator">
        <div class="indicator-dots">
          <span 
            v-for="(_, index) in consonants" 
            :key="index"
            :class="['dot', { active: currentIndex === index }]"
          ></span>
        </div>
        <span class="indicator-text">{{ currentIndex + 1 }}/{{ consonants.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Ref } from 'vue'

interface ExampleWord {
  text: string
  audio: string
}

interface Consonant {
  letter: string
  sound: string
  example: string
  sounds: {
    letter: string
    word: string
  }
  exampleWords: ExampleWord[]
}

const router = useRouter()
const currentIndex = ref(0)

const consonants: Ref<Consonant[]> = ref([
  {
    letter: 'B b',
    sound: '/b/',
    example: 'ball',
    sounds: {
      letter: '/audio/b.mp3',
      word: '/audio/ball.mp3'
    },
    exampleWords: [
      { text: 'bed', audio: '/audio/bed.mp3' },
      { text: 'boy', audio: '/audio/boy.mp3' },
      { text: 'book', audio: '/audio/book.mp3' }
    ]
  },
  {
    letter: 'C c',
    sound: '/k/',
    example: 'cat',
    sounds: {
      letter: '/audio/c.mp3',
      word: '/audio/cat.mp3'
    },
    exampleWords: [
      { text: 'cup', audio: '/audio/cup.mp3' },
      { text: 'car', audio: '/audio/car.mp3' },
      { text: 'cake', audio: '/audio/cake.mp3' }
    ]
  },
  {
    letter: 'D d',
    sound: '/d/',
    example: 'dog',
    sounds: {
      letter: '/audio/d.mp3',
      word: '/audio/dog.mp3'
    },
    exampleWords: [
      { text: 'duck', audio: '/audio/duck.mp3' },
      { text: 'door', audio: '/audio/door.mp3' },
      { text: 'desk', audio: '/audio/desk.mp3' }
    ]
  },
  {
    letter: 'F f',
    sound: '/f/',
    example: 'fish',
    sounds: {
      letter: '/audio/f.mp3',
      word: '/audio/fish.mp3'
    },
    exampleWords: [
      { text: 'fan', audio: '/audio/fan.mp3' },
      { text: 'fox', audio: '/audio/fox.mp3' },
      { text: 'food', audio: '/audio/food.mp3' }
    ]
  },
  {
    letter: 'G g',
    sound: '/g/',
    example: 'girl',
    sounds: {
      letter: '/audio/g.mp3',
      word: '/audio/girl.mp3'
    },
    exampleWords: [
      { text: 'game', audio: '/audio/game.mp3' },
      { text: 'goat', audio: '/audio/goat.mp3' },
      { text: 'gift', audio: '/audio/gift.mp3' }
    ]
  },
  {
    letter: 'H h',
    sound: '/h/',
    example: 'hat',
    sounds: {
      letter: '/audio/h.mp3',
      word: '/audio/hat.mp3'
    },
    exampleWords: [
      { text: 'hand', audio: '/audio/hand.mp3' },
      { text: 'home', audio: '/audio/home.mp3' },
      { text: 'horse', audio: '/audio/horse.mp3' }
    ]
  },
  {
    letter: 'J j',
    sound: '/dʒ/',
    example: 'jam',
    sounds: {
      letter: '/audio/j.mp3',
      word: '/audio/jam.mp3'
    },
    exampleWords: [
      { text: 'jump', audio: '/audio/jump.mp3' },
      { text: 'juice', audio: '/audio/juice.mp3' },
      { text: 'jet', audio: '/audio/jet.mp3' }
    ]
  },
  {
    letter: 'K k',
    sound: '/k/',
    example: 'king',
    sounds: {
      letter: '/audio/k.mp3',
      word: '/audio/king.mp3'
    },
    exampleWords: [
      { text: 'kid', audio: '/audio/kid.mp3' },
      { text: 'kite', audio: '/audio/kite.mp3' },
      { text: 'key', audio: '/audio/key.mp3' }
    ]
  },
  {
    letter: 'L l',
    sound: '/l/',
    example: 'lion',
    sounds: {
      letter: '/audio/l.mp3',
      word: '/audio/lion.mp3'
    },
    exampleWords: [
      { text: 'leg', audio: '/audio/leg.mp3' },
      { text: 'leaf', audio: '/audio/leaf.mp3' },
      { text: 'lamp', audio: '/audio/lamp.mp3' }
    ]
  },
  {
    letter: 'M m',
    sound: '/m/',
    example: 'moon',
    sounds: {
      letter: '/audio/m.mp3',
      word: '/audio/moon.mp3'
    },
    exampleWords: [
      { text: 'map', audio: '/audio/map.mp3' },
      { text: 'milk', audio: '/audio/milk.mp3' },
      { text: 'mouse', audio: '/audio/mouse.mp3' }
    ]
  },
  {
    letter: 'N n',
    sound: '/n/',
    example: 'nest',
    sounds: {
      letter: '/audio/n.mp3',
      word: '/audio/nest.mp3'
    },
    exampleWords: [
      { text: 'net', audio: '/audio/net.mp3' },
      { text: 'nose', audio: '/audio/nose.mp3' },
      { text: 'nut', audio: '/audio/nut.mp3' }
    ]
  },
  {
    letter: 'P p',
    sound: '/p/',
    example: 'pig',
    sounds: {
      letter: '/audio/p.mp3',
      word: '/audio/pig.mp3'
    },
    exampleWords: [
      { text: 'pen', audio: '/audio/pen.mp3' },
      { text: 'pan', audio: '/audio/pan.mp3' },
      { text: 'pet', audio: '/audio/pet.mp3' }
    ]
  },
  {
    letter: 'Q q',
    sound: '/kw/',
    example: 'queen',
    sounds: {
      letter: '/audio/q.mp3',
      word: '/audio/queen.mp3'
    },
    exampleWords: [
      { text: 'quick', audio: '/audio/quick.mp3' },
      { text: 'quiet', audio: '/audio/quiet.mp3' },
      { text: 'quiz', audio: '/audio/quiz.mp3' }
    ]
  },
  {
    letter: 'R r',
    sound: '/r/',
    example: 'red',
    sounds: {
      letter: '/audio/r.mp3',
      word: '/audio/red.mp3'
    },
    exampleWords: [
      { text: 'run', audio: '/audio/run.mp3' },
      { text: 'rain', audio: '/audio/rain.mp3' },
      { text: 'rat', audio: '/audio/rat.mp3' }
    ]
  },
  {
    letter: 'S s',
    sound: '/s/',
    example: 'sun',
    sounds: {
      letter: '/audio/s.mp3',
      word: '/audio/sun.mp3'
    },
    exampleWords: [
      { text: 'sit', audio: '/audio/sit.mp3' },
      { text: 'sea', audio: '/audio/sea.mp3' },
      { text: 'sock', audio: '/audio/sock.mp3' }
    ]
  },
  {
    letter: 'T t',
    sound: '/t/',
    example: 'top',
    sounds: {
      letter: '/audio/t.mp3',
      word: '/audio/top.mp3'
    },
    exampleWords: [
      { text: 'ten', audio: '/audio/ten.mp3' },
      { text: 'toy', audio: '/audio/toy.mp3' },
      { text: 'tree', audio: '/audio/tree.mp3' }
    ]
  },
  {
    letter: 'V v',
    sound: '/v/',
    example: 'van',
    sounds: {
      letter: '/audio/v.mp3',
      word: '/audio/van.mp3'
    },
    exampleWords: [
      { text: 'vet', audio: '/audio/vet.mp3' },
      { text: 'vest', audio: '/audio/vest.mp3' },
      { text: 'vine', audio: '/audio/vine.mp3' }
    ]
  },
  {
    letter: 'W w',
    sound: '/w/',
    example: 'web',
    sounds: {
      letter: '/audio/w.mp3',
      word: '/audio/web.mp3'
    },
    exampleWords: [
      { text: 'win', audio: '/audio/win.mp3' },
      { text: 'walk', audio: '/audio/walk.mp3' },
      { text: 'wall', audio: '/audio/wall.mp3' }
    ]
  },
  {
    letter: 'X x',
    sound: '/ks/',
    example: 'box',
    sounds: {
      letter: '/audio/x.mp3',
      word: '/audio/box.mp3'
    },
    exampleWords: [
      { text: 'fox', audio: '/audio/fox.mp3' },
      { text: 'six', audio: '/audio/six.mp3' },
      { text: 'mix', audio: '/audio/mix.mp3' }
    ]
  },
  {
    letter: 'Y y',
    sound: '/j/',
    example: 'yes',
    sounds: {
      letter: '/audio/y.mp3',
      word: '/audio/yes.mp3'
    },
    exampleWords: [
      { text: 'you', audio: '/audio/you.mp3' },
      { text: 'yard', audio: '/audio/yard.mp3' },
      { text: 'year', audio: '/audio/year.mp3' }
    ]
  },
  {
    letter: 'Z z',
    sound: '/z/',
    example: 'zoo',
    sounds: {
      letter: '/audio/z.mp3',
      word: '/audio/zoo.mp3'
    },
    exampleWords: [
      { text: 'zip', audio: '/audio/zip.mp3' },
      { text: 'zero', audio: '/audio/zero.mp3' },
      { text: 'zebra', audio: '/audio/zebra.mp3' }
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
.consonants-learning {
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

.letter-card {
  min-height: 450px;
  width: 90%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 24px;
  padding: 40px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.letter {
  font-size: 84px;
  background: linear-gradient(45deg, #1989fa, #39b9fa);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
}

.sound-info {
  width: 100%;
  text-align: center;
  margin: 20px 0 40px;
}

.sound-label {
  font-size: 18px;
  color: #666;
  margin-bottom: 15px;
}

.phonetic {
  font-size: 24px;
  color: #333;
  font-weight: 500;
}

.main-word {
  font-size: 32px;
  color: #1989fa;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.example-section {
  width: 100%;
  margin: 20px 0;
}

.example-label {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  text-align: center;
}

.example-words {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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
</style>