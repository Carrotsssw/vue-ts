<template>
  <div class="hello">
    <h1>prop :: {{ msg }}</h1>
    <h1>computed :: {{ computedMsg }}</h1>
    <h1>State.name (mapGetter) :: {{ computedUser }}</h1>
    <button @click="getterUser">GETTER</button>
    <button @click="setUserAction">ACTION SET NAME STATE</button>
    <button @click="beforeEmit('yyyyy')">EMIT MSG</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
// import { State, Action, Getter, namespace } from 'vuex-class'
import { UserState, UserAction } from '@/store/user/types'
import { mapGetters, mapActions } from 'vuex'
// const namespace : string = 'user'
// const userModule = namespace('user')
@Component({
  props: {
  msg: String
  },
  computed: {
  ...mapGetters({
    getUser: 'user/getUser'
    })
  },
  methods: {
  ...mapActions({
    setUser: 'user/setUser'
    })
  }
  })
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string
  // @State('user') private user!: UserState
  // @Getter('getUser', { namespace }) private getterName!: string
  // @Action('setName', { namespace }) private actionSetName!: any
  // @userModule.Getter('getUser') private getterUser!: UserState
  // @userModule.Action('setUser') private actionSetUser!: (n:UserState) => void
  // @Emit('emit-msg') emitMsg (n: any) {}

  // initial data
  msg: string = ''
  setUser!: (n:UserState) => void
  getUser!: UserState

  // lifecycle hook
  mounted () {
    console.log('test')
    this.greet()
  }

  // computed
  get computedMsg (): string {
    return '{{ ' + this.msg.split('').reverse().join('') + ' }}'
  }
  get computedUser (): string {
    // mapGetter
    return '{{ ' + this.getUser.name + ' ' + this.getUser.age + ' years old }}'
  }

  // method
  greet (): void {
    console.log('Welcome')
  }
  getterUser (): void {
    console.log(this.getUser)
  }
  setUserAction (): void {
    // this.actionSetUser({
    //   name: 'asfdghn',
    //   isAdmin: true,
    //   age: 13425
    // })

    this.setUser({
      name: this.msg,
      isAdmin: true,
      age: 13425
    })
  }
  beforeEmit () {
    let s = '--- ' + this.computedMsg + ' ---'
    this.$emit('emit-msg', s)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  border: 1px solid #585858;
  border-radius: 10px;
  padding: 20px 0;
  margin: 20px;
}
</style>
