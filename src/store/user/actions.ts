import { ActionTree } from 'vuex'
import { UserState, UserAction } from './types'
import { RootState } from '../types'

export const actions: ActionTree<UserAction, RootState> = {
  setUser ({ commit }, user: UserState): void {
    commit('setUser', user)
  }
}
