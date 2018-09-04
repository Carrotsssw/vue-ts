<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <h1 style="color:red;">EMIT :: {{emitMSG}}</h1>
    <input v-bind:value="test" v-on:input="test = $event.target.value">
    <HelloWorld :msg="test" @emit-msg="emitFromChild"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
  HelloWorld,
  },
  })
export default class Home extends Vue {
  test = ''
  emitMSG = ''

  emitFromChild (value: string) {
    this.emitMSG = value
  }
}
</script>
