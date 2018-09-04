import { MutationTree } from 'vuex'
import { UserState, UserAction } from './types'
import { RootState } from '../types'

export const mutations = {
  setUser (state:any, payload: UserState): void {
    state.user = payload
  }
}
