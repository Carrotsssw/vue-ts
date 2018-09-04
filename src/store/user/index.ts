import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { UserState, UserAction } from './types'
import { RootState } from '@/store/types'

export const state: UserAction = {
  user: {
    name: 'Default NAme',
    isAdmin: false,
    age: 12
  }
}

const namespaced: boolean = true

export const UserModule: Module<UserAction, RootState> = {
  namespaced,
  actions,
  state,
  getters,
  mutations
}
