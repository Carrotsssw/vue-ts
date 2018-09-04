import { UserState, UserAction } from './types'
import { GetterTree } from 'vuex'
import { RootState } from '../types'

export const getters: GetterTree<UserAction, RootState> = {
  getUser (state) {
    return state.user
  }
}
