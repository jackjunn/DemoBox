<template>
  <div id="childSecond">
    <h1>小儿子</h1>
    <h1>{{fathersData}}</h1>
    <h1>{{vuexxx}}</h1>
    <input type="text"
           v-model="msg">
    <button @click="toBroder">给哥哥</button>
  </div>
</template>

<script>
import bus from '../common/bus'
import { mapState } from 'vuex'

export default {
  name: 'childSecond',
  props: {
    fathersData: String
  },
  data () {
    return {
      msg: '哥哥好'
    }
  },
  methods: {
    toBroder () {
      bus.$emit('getBroder', this.msg)
    }
  },
  computed: {
    ...mapState(['vuexxx'])
  }
}
</script>

<style scoped>
#childSecond {
  background-color: bisque;
}
</style>