import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入每个状态机
import home from './home'
import order from './order'
import user from './user'
import login from './login'

export default new Vuex.Store({
    modules:{
      order,
      home,
      user,
      login
    }
})
