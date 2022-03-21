import Vue from 'vue'
import Vuex from 'vuex' 
import tasks from '../assets/json/tasks.json' 

Vue.use(Vuex)

export const state = () => ({
    tasks
})

export type RootState = ReturnType<typeof state>
  