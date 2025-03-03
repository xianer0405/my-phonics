import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { 
  Button,
  Grid,
  GridItem,
  NavBar,
  Swipe,
  SwipeItem,
  Icon    // 添加这一行
} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Grid)
app.use(GridItem)
app.use(NavBar)
app.use(Swipe)
app.use(SwipeItem)
app.use(Icon)  // 添加这一行

app.mount('#app')