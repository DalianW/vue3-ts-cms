import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'

import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      age: 0
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
